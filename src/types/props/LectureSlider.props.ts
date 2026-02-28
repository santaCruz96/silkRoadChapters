import { EmblaViewportRefType } from "embla-carousel-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FreeLecture } from "../interfaces/FreeLecture.interface";

export interface LectureSliderProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        ref?: EmblaViewportRefType,
        lectures: FreeLecture[]
}