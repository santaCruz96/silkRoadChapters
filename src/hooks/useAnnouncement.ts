import { useCallback, useEffect, useState } from "react";
import { PaidLecture } from "@/types/interfaces/PaidLecture.interface";
import { getSpecificLecture } from "@/lib/api/paidLectures";

const POLLING_INTERVAL_MS = 30 * 1000;

const getInitialTimeLeft = (lecture: PaidLecture) => {
    if (lecture.availability !== 'Announced' || !lecture.availableAt) return 0;

    const now = lecture.serverTime ? new Date(lecture.serverTime).getTime() : Date.now();

    return Math.max(new Date(lecture.availableAt).getTime() - now, 0) || 0;
};

export default function useAnnouncement(initialLecture: PaidLecture) {
    const [lecture, setLecture] = useState(initialLecture);
    const [prevInitialLecture, setPrevInitialLecture] = useState(initialLecture);
    const [timeLeft, setTimeLeft] = useState(() => getInitialTimeLeft(initialLecture));

    if (initialLecture !== prevInitialLecture) {
        setPrevInitialLecture(initialLecture);
        setLecture(initialLecture);
        setTimeLeft(getInitialTimeLeft(initialLecture));
    }

    const isAnnounced = lecture.availability === 'Announced';
    const isExpired = isAnnounced && timeLeft === 0;

    const updateLecture = useCallback((nextLecture: PaidLecture) => {
        setLecture(nextLecture);
        setTimeLeft(getInitialTimeLeft(nextLecture));
    }, []);

    useEffect(() => {
        const initialTimeLeft = getInitialTimeLeft(lecture);

        if (initialTimeLeft <= 0) return;

        const startedAt = Date.now();

        const interval = setInterval(() => {
            const left = Math.max(initialTimeLeft - (Date.now() - startedAt), 0);

            setTimeLeft(left);

            if (left === 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [lecture]);

    useEffect(() => {
        if (!isExpired) return;

        const interval = setInterval(async () => {
            try {
                const freshLecture = await getSpecificLecture(lecture.id, true);

                if (
                    freshLecture.availability !== 'Announced' ||
                    freshLecture.availableAt !== lecture.availableAt
                ) {
                    updateLecture(freshLecture);
                }
            } catch (error) {
                console.error('Failed to refresh lecture:', error);
            }
        }, POLLING_INTERVAL_MS);

        return () => clearInterval(interval);
    }, [isExpired, lecture.id, lecture.availableAt, updateLecture]);

    return { lecture, timeLeft, isAnnounced, updateLecture };
}
