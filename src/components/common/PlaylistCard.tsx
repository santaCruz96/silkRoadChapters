'use client';

import Image from 'next/image';
import Link from "next/link";
import { Playlist } from '@/types/interfaces/Playlist.interface';
import { useTranslations, useLocale } from 'next-intl';
import Icon from '@/icons/Icon';

interface PlaylistCardProps {
    playlist: Playlist;
    contentType: string;
}

export default function PlaylistCard({ playlist, contentType }: PlaylistCardProps) {
    const locale = useLocale();
    const t = useTranslations('PlaylistCard');
    const title = locale === 'ru' ? playlist.titleRu : playlist.titleEn;
    const description = locale === 'ru' ? playlist.shortDescriptionRu : playlist.shortDescriptionEn;

    const isPaid = contentType === 'paid-lectures'

    const url = `/catalog/${contentType}?tab=playlists&playlist=${playlist.id}`

    return (
        <Link 
            href={url}
            className={`relative card__selector flex flex-col rounded-[20px] p-4 bg-light 
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer 
                transition duration-180 ease-out-[0.2,0.8,0.2,1] mr-4 w-full col-span-1 ${isPaid ? '' : 'xl:col-span-2'} 
                hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)`}
        >
            <div className="relative mb-4 rounded-xl w-full h-64 lg:h-78.75 overflow-hidden">
                <Image 
                    src={playlist.coverImageUrl} 
                    alt={title} 
                    fill 
                    priority 
                    className="object-cover" 
                />
            </div>
            <div className="flex flex-col gap-3 mb-8 min-h-19.75">
                <p className="font-semibold text-[18px] text-dark leading-5.5">
                    {title}
                </p>
                <p className="font-normal text-[14px] leading-[160%] text-grey line-clamp-2">
                    {description}
                </p>
            </div>
            <div className='absolute bottom-4 left-4 flex gap-2'>
                <Icon className="fill-dark" name="materials"/>
                <span className='font-normal text-[16px] text-dark'>{t('materials')} {playlist.itemsCount}</span>
            </div>
        </Link>
    )
}