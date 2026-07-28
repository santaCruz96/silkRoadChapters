import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Blog } from "../interfaces/Blog.interface";
import { Playlist } from "../interfaces/Playlist.interface";

export interface BlogsNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        blogs: Blog[] | Playlist[],
        page: string,
        cardsPerPage: number,
        playlistIsEmpty: boolean;
}