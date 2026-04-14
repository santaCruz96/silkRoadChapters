"use client";

import Image from 'next/image';
import { useEffect } from 'react'; 
import { usePathname } from 'next/navigation';
import DeatailsCard from "../common/DetailsCard";
import ContentVideo from '../modules/ContentVideo';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import useActiveLectureStore from '@/store/useActiveLectureStore';
import { useFullscreenImage } from "@/store/useFullscreenImageStore";
import { useLocale } from 'next-intl';
import ContentBlocksRenderer from '@/utils/ContentBlocksRenderer';
import { FreeLecture } from '@/types/interfaces/FreeLecture.interface';
import { PaidLecture } from '@/types/interfaces/PaidLecture.interface';
import { Blog } from '@/types/interfaces/Blog.interface';
import { LikesResponse } from '@/types/api/likes';

interface ContentProps {
    specificLecture?: FreeLecture | PaidLecture | Blog;
    isAuthenticated: boolean;
    likeInfo?: LikesResponse | null;
    isFavoriteServer: boolean;
    isBought?: boolean;
}

export default function Content({
    specificLecture, 
    isAuthenticated, 
    likeInfo,
    isFavoriteServer,
    isBought
}: ContentProps ) {
    const isTablet = useResponsiveStore((state) => state.isTablet);
    const pathname = usePathname();

    const { open } = useFullscreenImage();

    const { currentLecture, setCurrentLecture } = useActiveLectureStore();

    const isPaid = pathname.includes('/paid')
    const isBlog = pathname.includes('/blog')

    const getEntityType = () => {
        if (isPaid) return 1
        if (isBlog) return 2
        return 0
    }

    const locale = useLocale();
    const title = locale === 'ru' ? currentLecture?.titleRu : currentLecture?.titleEn;

    useEffect(() => {
        if (specificLecture) {
            setCurrentLecture(specificLecture);
        }
    }, [specificLecture, setCurrentLecture]);

    return (
        <section className="flex flex-col gap-16 w-full">
            <h1 className="font-bold text-[40px] leading-12 sm:text-[64px] sm:leading-19.25 tracking-[-0.01em] text-center text-dark">
                {title}
            </h1>
            {!isBlog && specificLecture &&
                <ContentVideo lecture={specificLecture} isAuthenticated={isAuthenticated} isBought={isBought}/>
            }
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-12 sm:gap-16 flex-1">
                    {isTablet && !isBlog && currentLecture && 
                        <DeatailsCard 
                            entityType={getEntityType()} 
                            isAuthenticated={isAuthenticated}
                            likeInfo={likeInfo}
                            isFavoriteServer={isFavoriteServer}
                            isBought={isBought}
                        />
                    }
                    {'imageLink' in currentLecture && isBlog && 
                        <div 
                            className="relative rounded-[20px] sm:rounded-[30px] w-full h-46.25 sm:h-126.25 
                                overflow-hidden cursor-pointer"
                            onClick={() => open(currentLecture.imageLink)}
                        >
                            <Image src={currentLecture.imageLink} alt="" fill priority className="object-cover" />
                        </div>
                    }
                    {isTablet && isBlog && 
                        <DeatailsCard 
                            entityType={getEntityType()} 
                            isAuthenticated={isAuthenticated}
                            likeInfo={likeInfo}
                            isFavoriteServer={isFavoriteServer}
                            isBought={isBought}
                        />
                    }
                    {currentLecture?.contentBlocks &&
                        <ContentBlocksRenderer blocks={currentLecture?.contentBlocks}/>
                    }
                </div>
                {!isTablet && currentLecture && 
                    <DeatailsCard 
                        entityType={getEntityType()} 
                        isAuthenticated={isAuthenticated}
                        likeInfo={likeInfo}
                        isFavoriteServer={isFavoriteServer}
                        isBought={isBought}
                    />
                }
            </div>
        </section>
    )
}