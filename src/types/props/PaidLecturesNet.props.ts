import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PaidLecture } from "../interfaces/PaidLecture.interface";
import { PurchasesLecture } from "../api/purchasesLecture";
import { Playlist } from "../interfaces/Playlist.interface";

export interface PaidLecturesNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: PaidLecture[] | Playlist[],
        page: string,
        cardsPerPage: number,
        purchasesLectures: PurchasesLecture[] | null,
        playlistIsEmpty: boolean;
}