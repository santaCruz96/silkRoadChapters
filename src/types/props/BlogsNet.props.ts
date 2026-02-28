import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Blog } from "../interfaces/Blog.interface";

export interface BlogsNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        blogs: Blog[],
        page: string,
        cardsPerPage: number
}