import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
        pageCount: number;
        currentPage: number;
        onPageChange: (selected: number) => void;
}