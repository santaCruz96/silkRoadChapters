"use client";

import { useState, useMemo, useRef, useCallback } from 'react';
import { BlogsNetProps } from "@/types/props/BlogsNet.props";
import CatalogHeader from '../common/CatalogHeader';
import BlogCard from '../common/BlogCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function BlogNet({blogs, page, cardsPerPage}: BlogsNetProps ) {
    const isMobile = useResponsiveStore(state => state.isMobile);
    const isTablet = useResponsiveStore(state => state.isTablet);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const targetRef = useRef<HTMLDivElement>(null);

    const pageCount = Math.ceil(blogs.length / cardsPerPage);

    const currentCards = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return blogs.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage, blogs]); 

    const handlePageChange = useCallback((selected: number) => {
        setCurrentPage(selected);
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section className="flex flex-col gap-16 w-full">
            <CatalogHeader page={page}/>
            <div ref={targetRef} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 scroll-mt-30">
                {currentCards.map((blog, index) => {
                    const isTallCard = 
                    (currentCards.length >= 5 && currentCards.length <= 7 && index === 2) ||
                    (currentCards.length === 8 && (index === 2 || index === 6));

                    const gridClass = isTallCard ? 'col-span-1 row-span-2' : 'col-span-1';

                    return (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            grid={isMobile || isTablet ? 'col-span-1' : gridClass}
                            isActive
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