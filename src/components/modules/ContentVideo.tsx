import { useMemo, useState } from "react";
import { ContentVideoProps } from "@/types/props/ContentVideo.props";
import Button from "../common/Button";
import { usePush } from "@/store/usePushStore";
import { useModal } from "@/store/useModalStore";
import {useTranslations} from 'next-intl';

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

const getEmbedUrl = (lecture: ContentVideoProps['lecture']): string | null => {
    if ('youtubeId' in lecture) {
        const videoId = getYouTubeVideoId(lecture.youtubeId);
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
    }
    if ('videoId' in lecture) {
        const videoId = lecture.videoId;
        return videoId ? `https://iframe.mediadelivery.net/embed/476172/${videoId}?autoplay=true&loop=false&muted=false&preload=true&responsive=true` : null;
    }
    return null
};

export default function ContentVideo({lecture, isAuthenticated}: ContentVideoProps) {
    const { open } = useModal();
    const [showVideo, setShowVideo] = useState(false);

    const embedUrl = useMemo(() => getEmbedUrl(lecture), [lecture]);

    const handlePush = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        if ('videoId' in lecture && !isAuthenticated) {
            open('login');
        }
        if (isAuthenticated && embedUrl || 'youtubeId' in lecture) {
            setShowVideo(true);
        }
    };

    return (
        <div 
            className="relative rounded-[30px] w-full h-82 lg:h-169.25 
                bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{backgroundImage: `url(${'coverImageUrl' in lecture && lecture?.coverImageUrl})`}}
            onClick={handlePush}
        >
            {showVideo && embedUrl && (
                <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    title="Lecture video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                />
            )}
            {!showVideo && (
                <div 
                    className='cursor-pointer absolute flex items-center 
                        justify-center w-full h-full bg-black/20'
                    onClick={handlePush}
                >
                    <Button
                        color="lightGrey"
                        size="sm"
                        form="square"
                        icon={'videoId' in lecture && !isAuthenticated ? "lock" : "play"}
                        iconSize="big"
                        hover="contentButton"
                    />
                </div>
            )}
        </div>
    )
}