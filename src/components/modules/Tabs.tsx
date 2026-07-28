"use client";

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Button from '../common/Button';
import Icon from '@/icons/Icon';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTabsStore, TabKey } from '@/store/useTabsStore';
import { getSpecificPlaylist } from '@/lib/api/playlists';
import { Playlist } from '@/types/interfaces/Playlist.interface';

interface TabItem {
    key: TabKey;
    label: string;
}

interface TabsProps {
    playlistIsEmpty: boolean
}

export default function Tabs({ playlistIsEmpty }: TabsProps) {
    const locale = useLocale();
    const t = useTranslations('Catalog');
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setActiveTab } = useTabsStore();

    const [playlist, setPlaylist] = useState<Playlist | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const title = locale === 'ru' ? playlist?.titleRu : playlist?.titleEn;

    const activeTab = (searchParams.get('tab') as TabKey) || 'articles';
    const selectedPlaylist = searchParams.get('playlist');

    useEffect(() => {
        if (!selectedPlaylist) {
            setPlaylist(null);
            setError(null);
            return;
        }

        let cancelled = false;

        const fetchPlaylist = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getSpecificPlaylist(selectedPlaylist);

                if (!cancelled) {
                    setPlaylist(data);
                }
            } catch (err) {
                console.error('Failed to load playlist:', err);

                if (!cancelled) {
                    setPlaylist(null);
                    setError('Не удалось загрузить плейлист');
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        };

        fetchPlaylist();

        return () => {
            cancelled = true;
        };
    }, [selectedPlaylist]);

    const tabs: TabItem[] = [
        { key: 'articles', label: t('tabs.articles') },
        { key: 'playlists', label: t('tabs.playlists') },
    ];

    const handleTabClick = (key: TabKey) => {
        setActiveTab(key);
        const params = new URLSearchParams(searchParams);
        params.set('tab', key);
        params.delete('playlist');
        params.delete('playlistTitle');
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const handleBackToPlaylists = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('playlist');
        params.delete('playlistTitle');
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col mt-16 mb-8">
            <div className="flex gap-14.75 border-b border-grey pb-4">
                {tabs.map((tab) => {
                    const isDisabled = playlistIsEmpty && tab.key === 'playlists';

                    return (
                        <button
                            key={tab.key}
                            disabled={isDisabled}
                            onClick={() => handleTabClick(tab.key)}
                            className={`
                                font-bold text-[24px] text-dark transition-opacity duration-200
                                ${isDisabled 
                                    ? 'opacity-40 cursor-not-allowed' 
                                    : `cursor-pointer ${activeTab === tab.key ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                            `}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {selectedPlaylist && (
                <div className="flex justify-between pt-8">
                    <h3
                        className={`
                            font-bold text-[24px] lg:text-[36px] text-dark transition-opacity duration-200
                            ${isLoading ? 'opacity-40' : 'opacity-100'}
                        `}
                    >
                        {title}
                    </h3>
                    <Button
                        color="light"
                        size="sm"
                        form="square"
                        shadow
                        onClick={handleBackToPlaylists}
                        hover="smallSquare"
                    >
                        <Icon name="arrowLeft" className="stroke-dark fill-transparent w-8 h-8" />
                    </Button>
                </div>
            )}
        </div>
    );
}