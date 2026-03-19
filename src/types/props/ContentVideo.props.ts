import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FreeLecture } from "../interfaces/FreeLecture.interface";
import { PaidLecture } from "../interfaces/PaidLecture.interface";
import { Blog } from "../interfaces/Blog.interface";

export interface ContentVideoProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lecture: FreeLecture | PaidLecture | Blog;
        isAuthenticated: boolean;
        isBought?: boolean;
}