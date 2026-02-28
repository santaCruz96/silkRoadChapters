import FreeLectureCard from "../common/FreeLectureCard";
import { LectureSliderProps } from "@/types/props/LectureSlider.props";

export default function FreeLecturesSlider({lectures, ref}: LectureSliderProps) {
    return (
        <div ref={ref}> 
            <div className="flex select-none touch-pan-y touch-pinch-zoom">
                {lectures.map((lecture) => (
                    <FreeLectureCard 
                        key={lecture.id} 
                        lecture={lecture}
                        isCarousel
                    />
                ))}
            </div>
        </div>
    )
}