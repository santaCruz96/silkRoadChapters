"use client";

import { useState, useMemo, useRef, useCallback } from 'react';
import { PaidLecturesNetProps } from "@/interfaces/PaidLecturesNet.props";
import CatalogHeader from '../common/CatalogHeader';
import FreeLectureCard from '../common/FreeLectureCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";

const MOCK_LECTURES = Array.from({ length: 100 }, (_, i) => ({ id: i }));

export default function FreeLecturesNet({page, cardsPerPage}: PaidLecturesNetProps ) {
    const isMobile = useResponsiveStore(state => state.isMobile);
    const isTablet = useResponsiveStore(state => state.isTablet);
    const isMiniDesktop = useResponsiveStore(state => state.isMiniDesktop);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const targetRef = useRef<HTMLDivElement>(null);

    const pageCount = Math.ceil(MOCK_LECTURES.length / cardsPerPage);

    const currentCards = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return MOCK_LECTURES.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage]); 

    const handlePageChange = useCallback((selected: number) => {
        setCurrentPage(selected);
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section className="flex flex-col gap-16 w-full">
            <CatalogHeader page={page}/>
            <div ref={targetRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 scroll-mt-30">
                {currentCards.map((card, index) => {
                    const gridClass = (index === 4 || index === 13) ? 'col-span-2' : 'col-span-1';

                    return (
                        <FreeLectureCard
                            key={card.id}
                            cardId={card.id}
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