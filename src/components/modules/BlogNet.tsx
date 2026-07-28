"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogsNetProps } from "@/types/props/BlogsNet.props";
import { Blog } from '@/types/interfaces/Blog.interface';
import { Playlist } from '@/types/interfaces/Playlist.interface';
import CatalogHeader from '../common/CatalogHeader';
import Tabs from './Tabs';
import BlogCard from '../common/BlogCard';
import PlaylistCard from '../common/PlaylistCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { CatalogFilter, useCatalogStore } from "@/store/useCatalogStore";
import { TabKey } from '@/store/useTabsStore';

export default function BlogNet({ blogs, page, cardsPerPage, playlistIsEmpty }: BlogsNetProps ) {
    const searchParams = useSearchParams();
    const activeTab = (searchParams.get('tab') as TabKey) || 'articles';
    const playlistParam = searchParams.get('playlist');

    const showPlaylists = activeTab === 'playlists' && !playlistParam;

    const contextKey = `${activeTab}:${playlistParam ?? ''}`;

    const isMobile = useResponsiveStore(state => state.isMobile);
    const isTablet = useResponsiveStore(state => state.isTablet);
    const targetRef = useRef<HTMLDivElement>(null);

    const isBlogs = useMemo<Blog[]>(
        () => (showPlaylists ? [] : (blogs as Blog[])),
        [showPlaylists, blogs]
    );

    const playlists = useMemo<Playlist[]>(
        () => (showPlaylists ? (blogs as Playlist[]) : []),
        [showPlaylists, blogs]
    );

    const filter = useCatalogStore(state => state.filter);
    const setAllLectures = useCatalogStore(state => state.setAllLectures);

    useEffect(() => {
        if (!showPlaylists) {
            setAllLectures(blogs as Blog[]);
        }
    }, [showPlaylists, blogs, setAllLectures]);

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

    const filteredBlogs = useMemo(() => {
        if (filter === 'new') {
            return [...isBlogs].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        if (filter === 'popular') {
            return [...isBlogs].sort((a, b) => b.viewsCount - a.viewsCount);
        }
        return isBlogs;
    }, [isBlogs, filter]);

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
        : Math.ceil(filteredBlogs.length / cardsPerPage);

    const currentCards = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return filteredBlogs.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage, filteredBlogs]);

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
                            contentType='blog'
                        />
                    ))
                ) : (
                    currentCards.map((blog, index) => {
                        const isTallCard = 
                            (currentCards.length >= 5 && currentCards.length <= 7 && index === 2) ||
                            (currentCards.length === 8 && (index === 2 || index === 6));

                        const gridClass = isTallCard ? 'col-span-1 xl:col-span-2 row-span-2' : 'col-span-1 xl:col-span-2';

                        return (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                grid={isMobile || isTablet ? 'col-span-1' : gridClass}
                                isActive
                            />
                        )
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