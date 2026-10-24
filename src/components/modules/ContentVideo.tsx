import Image from 'next/image';
import { useMemo, useState } from "react";
import { ContentVideoProps } from "@/types/props/ContentVideo.props";
import Button from "../common/Button";
import { usePush } from "@/store/usePushStore";
import { useModal } from "@/store/useModalStore";
import { getPlayback } from "@/lib/api/paidLectures";
import {useTranslations} from 'next-intl';

const BUNNY_PLAYER_PARAMS = 'autoplay=true&loop=false&muted=false&preload=true&responsive=true';

function getYouTubeVideoId(url: string): string {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match?.[1]) return match[1];
    }
    
    return '';
}

const getYouTubeEmbedUrl = (lecture: ContentVideoProps['lecture']): string | null => {
    if ('youtubeId' in lecture) {
        const videoId = getYouTubeVideoId(lecture.youtubeId);
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
    }
    return null
};

export default function ContentVideo({lecture, isAuthenticated, isBought}: ContentVideoProps) {
    const { addPush, pushes } = usePush();
    const { open } = useModal();
    const [showVideo, setShowVideo] = useState(false);
    const [paidEmbedUrl, setPaidEmbedUrl] = useState<string | null>(null);
    const [isLoadingVideo, setIsLoadingVideo] = useState(false);

    const t = useTranslations('Push')

    const isPaid = 'videoId' in lecture;
    const hasAccess = !!isBought || ('hasAccess' in lecture && !!lecture.hasAccess);
    const isLocked = isPaid && (!isAuthenticated || !hasAccess);

    const youTubeEmbedUrl = useMemo(() => getYouTubeEmbedUrl(lecture), [lecture]);
    const embedUrl = isPaid ? paidEmbedUrl : youTubeEmbedUrl;

    const showBuyPush = () => {
        if (pushes.length < 1) addPush('info', t('buyVideo'));
    };

    const showPaidVideo = async () => {
        setIsLoadingVideo(true);

        const playback = await getPlayback(lecture.id);

        setIsLoadingVideo(false);

        if (playback.status === 'ok') {
            setPaidEmbedUrl(`${playback.embedUrl}&${BUNNY_PLAYER_PARAMS}`);
            setShowVideo(true);
            return;
        }

        if (playback.status === 'unauthorized') {
            open('login');
            return;
        }

        if (playback.status === 'noAccess') {
            showBuyPush();
            return;
        }

        addPush('error', t('videoError'));
    };

    const handlePush = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        if (isPaid && !isAuthenticated) {
            open('login');
            return;
        }
        if (isPaid && !hasAccess) {
            showBuyPush();
            return;
        }
        if (isPaid) {
            if (!isLoadingVideo) showPaidVideo();
            return;
        }
        if (youTubeEmbedUrl) {
            setShowVideo(true);
        }
    };

    return (
        <div 
            className="relative rounded-[30px] w-full h-82 lg:h-169.25 overflow-hidden"
            onClick={handlePush}
        >
            {showVideo && embedUrl && (
                <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    title="Lecture video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
            {!showVideo && 'coverImageUrl' in lecture && lecture.coverImageUrl && (
                <>
                    <Image src={lecture.coverImageUrl} alt="" fill priority className="object-cover" />
                    <div 
                        className='cursor-pointer absolute flex items-center 
                            justify-center w-full h-full bg-black/20 z-10'
                        onClick={handlePush}
                    >
                        <Button
                            color="lightGrey"
                            size="sm"
                            form="square"
                            icon={isLocked ? "lock" : "play"}
                            iconSize="big"
                            hover="contentButton"
                        />
                    </div>
                </>
            )}
        </div>
    )
}