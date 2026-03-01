"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { FreeLecturesNetProps } from "@/types/props/FreeLecturesNet.props";
import CatalogHeader from '../common/CatalogHeader';
import FreeLectureCard from '../common/FreeLectureCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { CatalogFilter, useCatalogStore } from "@/store/useCatalogStore";

export default function FreeLecturesNet({lectures, page, cardsPerPage}: FreeLecturesNetProps ) {
    const isMobile = useResponsiveStore(state => state.isMobile);
    const isTablet = useResponsiveStore(state => state.isTablet);
    const isMiniDesktop = useResponsiveStore(state => state.isMiniDesktop);

    const filter = useCatalogStore(state => state.filter);
    const setAllLectures = useCatalogStore(state => state.setAllLectures);

    useEffect(() => {
        setAllLectures(lectures);
    }, [lectures, setAllLectures]);

    const [pageState, setPageState] = useState<{ page: number; filter: CatalogFilter }>({
        page: 0,
        filter: filter,
    });

    const currentPage = pageState.filter === filter ? pageState.page : 0;
    
    const targetRef = useRef<HTMLDivElement>(null);

    const filteredLectures = useMemo(() => {
        if (filter === 'new') {
            return [...lectures].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        if (filter === 'popular') {
            return [...lectures].sort((a, b) => b.viewCount - a.viewCount);
        }
        return lectures;
    }, [lectures, filter]);

    const pageCount = Math.ceil(filteredLectures.length / cardsPerPage);

    const currentCards = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return filteredLectures.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage, filteredLectures]); 

    const handlePageChange = useCallback((selected: number) => {
        setPageState({ page: selected, filter });
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [filter]);

    return (
        <section className="flex flex-col gap-16 w-full">
            <CatalogHeader page={page}/>
            <div ref={targetRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 scroll-mt-30">
                {currentCards.map((lecture, index) => {
                    const gridClass = (index === 4 || index === 13) ? 'col-span-2' : 'col-span-1';

                    return (
                        <FreeLectureCard
                            key={lecture.id}
                            lecture={lecture}
                            grid={isMobile || isTablet || isMiniDesktop ? 'col-span-1' : gridClass}
                        />
                    )
                })}
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