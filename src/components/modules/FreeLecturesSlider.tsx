import { JSX } from "react";
import FreeLectureCard from "../common/FreeLectureCard";
import { LectureSliderProps } from "@/interfaces/LectureSlider.props";

export default function LectureSlider({ref}: LectureSliderProps): JSX.Element {
    return (
        <div ref={ref}> 
            <div className="flex select-none touch-pan-y touch-pinch-zoom">
                {Array.from({ length: 6 }).map((_, index) => (
                    <FreeLectureCard key={index} isCarousel/>
                ))}
            </div>
        </div>
    )
}