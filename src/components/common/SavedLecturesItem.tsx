"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import Icon from "@/icons/Icon";
import Button from "./Button";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { useLocale, useTranslations } from "next-intl";
import { usePush } from "@/store/usePushStore";
import { UserProfileFavorites } from "@/types/api/user";
import { deleteFavorite } from "@/lib/api/favorites";

interface SavedLecture {
    savedLecture: UserProfileFavorites
}

export default function SavedLecturesItem({savedLecture}: SavedLecture) {
    const [ isLoading, setIsLoading ] = useState(false);

    const router = useRouter();

    const { addPush } = usePush();

    const isMobile = useResponsiveStore(state => state.isMobile);

    const route: Record<number, string> = {
        0: 'free',
        1: 'paid',
        2: 'blog'
    }

    const t = useTranslations('Push')
    const locale = useLocale();
    const title = locale === 'ru' ? savedLecture.titleRu : savedLecture.titleEn;
    const description = locale === 'ru' ? savedLecture.shortDescriptionRu : savedLecture.shortDescriptionEn;

    const handleDelete = async() => {
        setIsLoading(true);

        try {
            const response = await deleteFavorite(savedLecture.entityId, savedLecture.entityType);
            
            if (response.success) {
                addPush('info', t('deleteFavorite'));
                router.refresh();
            }
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <div
            className="relative flex items-start justify-between w-82 sm:w-full border-t border-grey 
                py-8 last:border-b"
        >
            <Link 
                href={`/${route[savedLecture.entityType]}/${savedLecture.entityId}`}
                className="flex w-full sm:w-auto sm:h-full flex-col sm:flex-row gap-4 cursor-pointer"
            >
                <div 
                    className="w-full h-46.25 sm:w-72 sm:h-40.5 rounded-xl 
                        bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${savedLecture?.imageUrl})`}}
                />
                <div className="flex sm:h-full flex-col-reverse sm:flex-col gap-4 sm:gap-0 justify-between">
                    <div className="flex flex-col gap-2.5">
                        <p className="font-semibold text-[18px] leading-5.25 text-dark">
                            {title}
                        </p>
                        <p className="font-normal text-[14px] max-w-110 leading-[160%] text-grey line-clamp-2">
                            {description?.replace(/<[^>]*>?/gm, ' ')}
                        </p>
                    </div>
                    {/* <div className="flex gap-22.25">
                        <div className="flex items-center gap-2">
                            <Icon className="fill-dark" name="eye"/>
                            <p className="font-normal text-[16px] uppercase text-dark">
                                {savedLecture.views ? savedLecture.views : 0}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon className="fill-dark" name="like"/>
                            <p className="font-normal text-[16px] uppercase text-dark">
                                454
                            </p>
                        </div>
                    </div> */}
                </div>
            </Link>
            <div className="absolute top-12 right-4 sm:static">
                <Button
                    color={isMobile ? "lightGreyDelete" : "red"}
                    size="sm"
                    form="square"
                    icon="trashBin"
                    iconSize="big"
                    shadow={!isMobile}
                    hover="delete"
                    onClick={handleDelete}
                    disabled={isLoading}
                />
            </div>
        </div>
    )
}