"use client";

import { useState, useMemo, useRef, useCallback } from 'react';
import { PaidLecturesNetProps } from "@/interfaces/PaidLecturesNet.props";
import CatalogHeader from '../common/CatalogHeader';
import PaidLectureCard from "../common/PaidLectureCard";
import Pagination from '../common/Pagination';

const MOCK_LECTURES = Array.from({ length: 100 }, (_, i) => ({ id: i }));

export default function PaidLecturesNet({page, cardsPerPage}: PaidLecturesNetProps ) {
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
            <div ref={targetRef} className="flex flex-wrap gap-x-4 gap-y-8 scroll-mt-30">
                {currentCards.map((card) => (
                    <PaidLectureCard
                        key={card.id}
                        cardId={card.id}
                        isActive
                        isBought={page === 'account'}
                    />
                ))}
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