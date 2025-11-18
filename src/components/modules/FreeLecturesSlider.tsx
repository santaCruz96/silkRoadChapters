import { JSX } from "react";
import LectureCard from "../common/FreeLectureCard";
import { LectureSliderProps } from "@/interfaces/LectureSlider.props";

export default function LectureSlider({ref}: LectureSliderProps): JSX.Element {
    return (
        <div ref={ref}> 
            <div className="flex select-none touch-pan-y touch-pinch-zoom">
                {Array.from({ length: 6 }).map((_, index) => (
                    <LectureCard key={index} size="small"/>
                ))}
            </div>
        </div>
    )
}