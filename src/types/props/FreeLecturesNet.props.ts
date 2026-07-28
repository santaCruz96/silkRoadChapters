import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FreeLecture } from "../interfaces/FreeLecture.interface";
import { Playlist } from "../interfaces/Playlist.interface";

export interface FreeLecturesNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: FreeLecture[] | Playlist[],
        page: string,
        cardsPerPage: number,
        playlistIsEmpty: boolean;
}