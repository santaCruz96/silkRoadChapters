"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PaidLecturesNetProps } from "@/types/props/PaidLecturesNet.props";
import { PaidLecture } from '@/types/interfaces/PaidLecture.interface';
import { Playlist } from '@/types/interfaces/Playlist.interface';
import CatalogHeader from '../common/CatalogHeader';
import Tabs from './Tabs';
import PaidLectureCard from "../common/PaidLectureCard";
import PlaylistCard from '../common/PlaylistCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import PaidLecturesSlider from './PaidLecturesSlider';
import { CatalogFilter, useCatalogStore } from "@/store/useCatalogStore";
import { TabKey } from '@/store/useTabsStore';

export default function PaidLecturesNet({lectures, page, cardsPerPage, purchasesLectures, playlistIsEmpty}: PaidLecturesNetProps ) {
    const searchParams = useSearchParams();
    const activeTab = (searchParams.get('tab') as TabKey) || 'articles';
    const playlistParam = searchParams.get('playlist');

    const showPlaylists = activeTab === 'playlists' && !playlistParam;

    const contextKey = `${activeTab}:${playlistParam ?? ''}`;
    
    const isMobile = useResponsiveStore(state => state.isMobile);
    const targetRef = useRef<HTMLDivElement>(null);

    const paidLectures = useMemo<PaidLecture[]>(
        () => (showPlaylists ? [] : (lectures as PaidLecture[])),
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
            setAllLectures(lectures as PaidLecture[]);
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

    const filteredLectures = useMemo(() => {
        if (filter === 'new') {
            return [...paidLectures].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        if (filter === 'popular') {
            return [...paidLectures].sort((a, b) => b.popularityCount - a.popularityCount);
        }
        return paidLectures;
    }, [paidLectures, filter]);

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
            {page !== 'account' && <Tabs playlistIsEmpty={playlistIsEmpty}/>}
            {page === 'account' && isMobile ?
                <PaidLecturesSlider lectures={lectures as PaidLecture[]} purchasesLectures={purchasesLectures} page='account'/>
            :
                <div 
                    ref={targetRef} 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 scroll-mt-30 mb-12 lg:mb-16"
                >
                    {showPlaylists ? (
                        currentPlaylists.map((playlist) => (
                            <PlaylistCard 
                                key={playlist.id} 
                                playlist={playlist} 
                                contentType='paid-lectures'
                            />
                        ))
                    ) : (
                        currentLectures.map((lecture) => (
                            <PaidLectureCard
                                key={lecture.id}
                                lecture={lecture}
                                isActive
                                isBought={purchasesLectures?.some(ul => ul.lectureId === lecture.id) || page === 'account'}
                            />
                        ))
                    )}
                </div>
            } 
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