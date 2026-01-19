import { EmblaViewportRefType } from "embla-carousel-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LectureSliderProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        ref?: EmblaViewportRefType,
}