import FreeLectureCard from "../common/FreeLectureCard";
import { LectureSliderProps } from "@/types/props/LectureSlider.props";

import { useFreeLectures } from "@/data/freeLectures.data";

export default function FreeLecturesSlider({ref}: LectureSliderProps) {
    const freeLectures = useFreeLectures();
    
    return (
        <div ref={ref}> 
            <div className="flex select-none touch-pan-y touch-pinch-zoom">
                {freeLectures.map((lecture) => (
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