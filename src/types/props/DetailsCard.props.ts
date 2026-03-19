import { DetailedHTMLProps, HTMLAttributes } from "react";
import { LikesResponse } from "../api/likes";

export interface DetailsCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        entityType: number;
        isAuthenticated: boolean;
        likeInfo?: LikesResponse | null;
        isFavoriteServer: boolean;
        isBought?: boolean;
}