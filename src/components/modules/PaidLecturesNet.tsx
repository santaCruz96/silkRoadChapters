"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { PaidLecturesNetProps } from "@/types/props/PaidLecturesNet.props";
import CatalogHeader from '../common/CatalogHeader';
import PaidLectureCard from "../common/PaidLectureCard";
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import PaidLecturesSlider from './PaidLecturesSlider';
import { CatalogFilter, useCatalogStore } from "@/store/useCatalogStore";

export default function PaidLecturesNet({lectures, page, cardsPerPage}: PaidLecturesNetProps ) {
    const isMobile = useResponsiveStore(state => state.isMobile);
    const targetRef = useRef<HTMLDivElement>(null);

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

    const filteredLectures = useMemo(() => {
        if (filter === 'new') {
            return [...lectures].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        if (filter === 'popular') {
            return [...lectures].sort((a, b) => b.popularityCount - a.popularityCount);
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
            {page === 'account' && isMobile ?
                <PaidLecturesSlider lectures={lectures} page='account'/>
            :
                <div 
                    ref={targetRef} 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 scroll-mt-30"
                >
                    {currentCards.map((lecture) => (
                        <PaidLectureCard
                            key={lecture.id}
                            lecture={lecture}
                            isActive
                            isBought={page === 'account'}
                        />
                    ))}
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