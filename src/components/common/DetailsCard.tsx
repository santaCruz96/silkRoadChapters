'use client';

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Icon from "@/icons/Icon";
import { DetailsCardProps } from "@/types/props/DetailsCard.props";
import {useTranslations} from 'next-intl';
import useActiveLectureStore from '@/store/useActiveLectureStore';
import { FavoriteItem } from "@/types/api/favorites";
import { LikesResponse } from "@/types/api/likes";
import { useModal } from "@/store/useModalStore";
import { getFavorites, toggleFavorite } from '@/lib/api/favorites';
import { getLikes, toggleLike } from "@/lib/api/likes";

export default function DeatailsCard({entityType, isAuthenticated}: DetailsCardProps) {
    const router = useRouter();

    const isFree = entityType === 0;
    const isPaid = entityType === 1;
    const isBlog = entityType === 2;

    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
    const [isLoadingFavorite, setIsLoadingFavorite] = useState(false);
    const [isLoadingLike, setIsLoadingLike] = useState(false);
    const [likes, setLikes] = useState<LikesResponse | null>(null);
    const [isLiked, setIsLiked] = useState(false);

    const { currentLecture } = useActiveLectureStore();

    const t = useTranslations('DeatailsCard');

    const { open } = useModal();

    const viewsCount = useMemo(() => {
        if (!currentLecture) return null;
        if ('viewsCount' in currentLecture) return currentLecture.viewsCount;
        if ('viewCount' in currentLecture) return currentLecture.viewCount;
        if ('popularityCount' in currentLecture) return currentLecture.popularityCount;
        return null;
    }, [currentLecture]);

    const typeString = useMemo(() => {
        if (isFree) return 'free-lectures';
        if (isPaid) return 'premium-lectures';
        if (isBlog) return 'blogs';
        return '';
    }, [isFree, isPaid, isBlog]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await getFavorites();
            setFavorites(data);
        };

        if (isAuthenticated) {
            fetchFavorites();
        }
    }, [isAuthenticated]);

    // useEffect(() => {
    //     if (!isAuthenticated || isFree) return;

    //     const fetchLikes = async () => {
    //         const data = await getLikes(currentLecture.id, entityType);
    //         setLikes(data);
    //     };
        
    //     fetchLikes();
    // }, [currentLecture, entityType, isAuthenticated, isFree]);

    useEffect(() => {
        if (!isAuthenticated) return
        setIsLiked(likes?.userReaction !== null && likes?.userReaction !== undefined);
    }, [isAuthenticated, likes?.userReaction]);

    const isFavorite = favorites.some((item) => item.entityId === currentLecture?.id);

    const handleToggleFavorite = async () => {
        setIsLoadingFavorite(true);
        try {
            const result = await toggleFavorite(
                currentLecture?.id ?? '',
                entityType,
                isFavorite
            );

            if (result.status < 200 || result.status >= 300) {
                console.error('Error:', result.status);
                return;
            }

            if (isFavorite) {
                setFavorites((prev) =>
                    prev.filter((item) => item.entityId !== currentLecture?.id)
                );
            } else {
                if (result.data) {
                    setFavorites((prev) => [...prev, result.data!]);
                } else {
                    const fresh = await getFavorites();
                    setFavorites(fresh);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoadingFavorite(false);
        }
    };

    const handleToggleLike = async () => {
        setIsLoadingLike(true);
        try {
            const result = await toggleLike(
                typeString ?? '',
                currentLecture?.id ?? '',
                isLiked
            );

            if (result.status < 200 || result.status >= 300) {
                console.error('Error:', result.status);
                return;
            }

            setIsLiked(prev => !prev);
            setLikes(prev => {
                if (!prev) return prev;
                return {
                    ...prev,
                    likesCount: isLiked ? prev.likesCount - 1 : prev.likesCount + 1,
                    userReaction: isLiked ? null : 1,
                };
            });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoadingLike(false);
        }
    };

    const handleClickPay = () => {
        if (isAuthenticated) {
            router.push(`/payment/${currentLecture.id}`)
        } else {
            open('login');
        }
    }

    return (
        <div className="flex flex-col rounded-[20px] p-4 bg-light w-full lg:w-72 self-start
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <div className="flex w-full justify-between">
                <div className="flex gap-3">
                    <Button
                        color={likes?.userReaction ? 'green' : 'lightGrey'}
                        size="sm"
                        form="square"
                        icon="like"
                        iconSize="big"
                        hover={likes?.userReaction ? 'detailsButton' : 'contentButton'}
                        // disabled={isFree || isLoadingLike}
                        disabled={true}
                        onClick={isAuthenticated ? handleToggleLike : () => open('login')}
                    />
                    <Button
                        color={isFavorite ? 'green' : 'lightGrey'}
                        size="sm"
                        form="square"
                        icon="bookmark"
                        iconSize="big"
                        hover={isFavorite ? 'detailsButton' : 'contentButton'}
                        disabled={isLoadingFavorite}
                        onClick={isAuthenticated ? handleToggleFavorite : () => open('login')}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <Icon className="fill-dark" name="eye"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            {viewsCount}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Icon className="fill-dark" name="like"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            {'likesCount' in currentLecture && currentLecture.likesCount}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-4">
                {isPaid && 
                    <div className="flex flex-col gap-1.75 py-4 border-b border-stroke">
                        <p className="font-normal text-[14px] leading-[160%] text-grey">
                            {t('price')}
                        </p>
                        <p className="font-semibold text-[32px] leading-9.5 text-dark">
                            ${'priceUsd' in currentLecture && currentLecture.priceUsd}
                        </p>
                    </div>
                }
                <div className="flex flex-col gap-1.75 py-4 border-b border-stroke">
                    <p className="font-semibold text-[18px] leading-5.5 text-dark">
                        {t('location')}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        {/* {currentLecture?.viewCount} */}{t('location')}
                    </p>
                </div>
                <div className="flex flex-col gap-1.75 py-4 border-b border-stroke">
                    <p className="font-semibold text-[18px] leading-5.5 text-dark">
                        {t('travelPoint')}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        {/* {currentLecture?.viewCount} */}{t('travelPoint')}
                    </p>
                </div>
                <div className="flex flex-col gap-1.75 py-4">
                    <p className="font-semibold text-[18px] leading-5.5 text-dark">
                        {t('year')}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        {/* {currentLecture?.viewCount} */}{t('year')}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {isPaid && 
                    <Button 
                        color="dark" 
                        size="full"
                        form="round"
                        icon='cart'
                        hover="headerPrimary"
                        onClick={handleClickPay}
                    >
                        {t('buyButton')}
                    </Button>
                }
                <Button
                    color="dark"
                    size="full"
                    form="round"
                    icon="squareForward"
                    hover="headerPrimary"
                >
                    {t('shareButton')}
                </Button>
            </div>
        </div>
    )
}