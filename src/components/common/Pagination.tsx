import ReactPaginate from 'react-paginate';
import { PaginationProps } from "@/types/props/Pagination.props";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import Icon from '@/icons/Icon';

export default function Pagination({
    pageCount,
    currentPage,
    onPageChange,
}: PaginationProps) {
    
    const isMobile = useResponsiveStore(state => state.isMobile);

    const handlePageClick = ({ selected }: { selected: number }) => {
        onPageChange(selected);
    };

    const right = () => {
        return (
            <Icon name="arrowRight" className="stroke-dark fill-transparent w-8 h-8"/>
        )
    }

    const left = () => {
        return (
            <Icon name="arrowLeft" className="stroke-dark fill-transparent w-8 h-8"/>
        )
    }

    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={isMobile ? 0 : 3}
            marginPagesDisplayed={isMobile ? 0 : 1}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            previousClassName="flex items-center justify-center w-15 h-15 bg-light rounded-xl 
                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] sm:hidden"
            nextClassName="flex items-center justify-center w-15 h-15 bg-light rounded-xl 
                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] sm:hidden"
            previousLinkClassName="sm:hidden"
            nextLinkClassName="sm:hidden"
            previousLabel={left()}
            nextLabel={right()}
            breakLabel="..."
            breakClassName="cursor-default flex w-15 h-15 justify-center py-[19px]
                font-semibold text-[18px] text-center pointer-events-none"
            containerClassName="flex justify-between sm:justify-center gap-4"
            pageClassName="cursor-pointer w-15 h-15 bg-light rounded-xl hover:bg-light transition
                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)]
                transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:-translate-y-0.5 
                hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_rgba(0,0,0,0.12)]"
            pageLinkClassName="w-full h-full flex items-center justify-center font-semibold text-[18px] text-center"
            activeClassName="pointer-events-none"
            activeLinkClassName="rounded-xl bg-dark text-light"
        />
    )
}