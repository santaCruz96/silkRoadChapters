import { PurchasesLecture } from "@/types/api/purchasesLecture";
import { PaidLecture } from "@/types/interfaces/PaidLecture.interface";

export function mergePurchasesLectures(
    allLectures: PaidLecture[],
    purchasesLectures: PurchasesLecture[]
) {
    const lectureMap = new Map(allLectures.map((l) => [l.id, l]));

    return purchasesLectures.reduce<(PaidLecture & PurchasesLecture)[]>((acc, purchasesLecture) => {
        const lecture = lectureMap.get(purchasesLecture.lectureId);
        if (lecture) acc.push({ ...lecture, ...purchasesLecture });
        return acc;
    }, []);
}