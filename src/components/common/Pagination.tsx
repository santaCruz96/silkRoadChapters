import ReactPaginate from 'react-paginate';
import { PaginationProps } from "@/interfaces/Pagination.props";

export default function Pagination({
    pageCount,
    currentPage,
    onPageChange,
}: PaginationProps) {
    
    const handlePageClick = ({ selected }: { selected: number }) => {
        onPageChange(selected);
    };

    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            previousLinkClassName="hidden"
            nextLinkClassName="hidden"
            breakLabel="..."
            breakClassName="cursor-default flex w-15 h-15 justify-center py-[19px]
                font-semibold text-[18px] text-center pointer-events-none"
            containerClassName="flex justify-center gap-4"
            pageClassName="cursor-pointer w-15 h-15 bg-light rounded-xl hover:bg-light transition
                transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:-translate-y-0.5 
                hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_rgba(0,0,0,0.12)]"
            pageLinkClassName="w-full h-full flex items-center justify-center font-semibold text-[18px] text-center"
            activeClassName="pointer-events-none"
            activeLinkClassName="rounded-xl bg-dark text-light"
        />
    )
}