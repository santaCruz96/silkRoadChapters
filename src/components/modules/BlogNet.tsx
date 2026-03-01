"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { BlogsNetProps } from "@/types/props/BlogsNet.props";
import CatalogHeader from '../common/CatalogHeader';
import BlogCard from '../common/BlogCard';
import Pagination from '../common/Pagination';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { CatalogFilter, useCatalogStore } from "@/store/useCatalogStore";

export default function BlogNet({blogs, page, cardsPerPage}: BlogsNetProps ) {
    const isMobile = useResponsiveStore(state => state.isMobile);
    const isTablet = useResponsiveStore(state => state.isTablet);
    const targetRef = useRef<HTMLDivElement>(null);

    const filter = useCatalogStore(state => state.filter);
    const setAllLectures = useCatalogStore(state => state.setAllLectures);

    useEffect(() => {
        setAllLectures(blogs);
    }, [blogs, setAllLectures]);

    const [pageState, setPageState] = useState<{ page: number; filter: CatalogFilter }>({
        page: 0,
        filter: filter,
    });

    const currentPage = pageState.filter === filter ? pageState.page : 0;

    const filteredBlogs = useMemo(() => {
        if (filter === 'new') {
            return [...blogs].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
        if (filter === 'popular') {
            return [...blogs].sort((a, b) => b.viewsCount - a.viewsCount);
        }
        return blogs;
    }, [blogs, filter]);

    const pageCount = Math.ceil(filteredBlogs.length / cardsPerPage);

    const currentCards = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return filteredBlogs.slice(start, start + cardsPerPage);
    }, [currentPage, cardsPerPage, filteredBlogs]); 

    const handlePageChange = useCallback((selected: number) => {
        setPageState({ page: selected, filter });
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [filter]);

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