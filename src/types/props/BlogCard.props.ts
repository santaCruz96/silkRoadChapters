import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { IBlog } from "../interfaces/Blog.interface";

export interface BlogCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        lecture: IBlog,
        isActive?: boolean,
        isCarousel?: boolean,
        grid?: string
}