import FreeLectureCard from "../common/FreeLectureCard";
import { LectureSliderProps } from "@/interfaces/LectureSlider.props";

export default function FreeLecturesSlider({ref}: LectureSliderProps) {
    return (
        <div ref={ref}> 
            <div className="flex select-none touch-pan-y touch-pinch-zoom">
                {Array.from({ length: 6 }).map((_, index) => (
                    <FreeLectureCard 
                        key={index} 
                        cardId={index}
                        isCarousel
                    />
                ))}
            </div>
        </div>
    )
}