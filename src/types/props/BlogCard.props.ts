import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { Blog } from "../interfaces/Blog.interface";

export interface BlogCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        blog: Blog,
        isActive?: boolean,
        isCarousel?: boolean,
        grid?: string
}