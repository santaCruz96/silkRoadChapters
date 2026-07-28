"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FreeLecturesNetProps } from "@/types/props/FreeLecturesNet.props";
import { FreeLecture } from '@/types/interfaces/FreeLecture.interface';
import { Playlist } from '@/types/interfaces/Playlist.interface';
import CatalogHeader from '../common/CatalogHeader';
import Tabs from './Tabs';
import FreeLectureCard from '../common/FreeLectureCard';
import PlaylistCard from '../common/PlaylistCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { CatalogFilter, useCatalogStore } from "@/store/useCatalogStore";
import { TabKey } from '@/store/useTabsStore';

export default function FreeLecturesNet({ lectures, page, cardsPerPage, playlistIsEmpty }: FreeLecturesNetProps) {
    const searchParams = useSearchParams();
    const activeTab = (searchParams.get('tab') as TabKey) || 'articles';
    const playlistParam = searchParams.get('playlist');

    const showPlaylists = activeTab === 'playlists' && !playlistParam;

    const contextKey = `${activeTab}:${playlistParam ?? ''}`;

    const isMobile = useResponsiveStore(state => state.isMobile);
    const isTablet = useResponsiveStore(state => state.isTablet);
    const isMiniDesktop = useResponsiveStore(state => state.isMiniDesktop);

    const freeLectures = useMemo<FreeLecture[]>(
        () => (showPlaylists ? [] : (lectures as FreeLecture[])),
        [showPlaylists, lectures]
    );

    const playlists = useMemo<Playlist[]>(
        () => (showPlaylists ? (lectures as Playlist[]) : []),
        [showPlaylists, lectures]
    );

    const filter = useCatalogStore(state => state.filter);
    const setAllLectures = useCatalogStore(state => state.setAllLectures);

    useEffect(() => {
        if (!showPlaylists) {
            setAllLectures(lectures as FreeLecture[]);
        }
    }, [showPlaylists, lectures, setAllLectures]);

    const [pageState, setPageState] = useState<{
        page: number;
        context: string;
        filter: CatalogFilter;
    }>({
        page: 0,
        context: contextKey,
        filter,
    });

    const isSameContext =
        pageState.context === contextKey && pageState.filter === filter;
    const currentPage = isSameContext ? pageState.page : 0;
    const targetRef = useRef<HTMLDivElement>(null);

    const filteredLectures = useMemo(() => {
        if (filter === 'new') {
            return [...freeLectures].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        if (filter === 'popular') {
            return [...freeLectures].sort((a, b) => b.viewCount - a.viewCount);
        }
        return freeLectures;
    }, [freeLectures, filter]);

    const filteredPlaylists = useMemo(() => {
        if (filter === 'new') {
            return [...playlists].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        return playlists;
    }, [playlists, filter]);

    const pageCount = showPlaylists
        ? Math.ceil(filteredPlaylists.length / cardsPerPage)
        : Math.ceil(filteredLectures.length / cardsPerPage);

    const currentLectures = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return filteredLectures.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage, filteredLectures]);

    const currentPlaylists = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return filteredPlaylists.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage, filteredPlaylists]);

    const handlePageChange = useCallback((selected: number) => {
        setPageState({ page: selected, context: contextKey, filter });
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [filter, contextKey]);

    return (
        <section className="flex flex-col w-full">
            <CatalogHeader page={page}/>
            <Tabs playlistIsEmpty={playlistIsEmpty}/>
            <div 
                ref={targetRef} 
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 scroll-mt-30 mb-12 lg:mb-16"
            >
                {showPlaylists ? (
                    currentPlaylists.map((playlist) => (
                        <PlaylistCard 
                            key={playlist.id} 
                            playlist={playlist} 
                            contentType='free-lectures'
                        />
                    ))
                ) : (
                    currentLectures.map((lecture, index) => {
                        const gridClass = (index === 4 || index === 13) ? 'col-span-2' : 'col-span-1';
                        return (
                            <FreeLectureCard
                                key={lecture.id}
                                lecture={lecture}
                                grid={isMobile || isTablet || isMiniDesktop ? 'col-span-1' : gridClass}
                            />
                        );
                    })
                )}
            </div>
            {page !== 'account' && pageCount > 1 && (
                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </section>
    )
}