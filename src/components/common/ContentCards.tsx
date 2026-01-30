import { ContentCardsProps } from "@/types/props/ContentCards.props";
import { useFullscreenImage } from "@/store/useFullscreenImageStore";

export default function ContentCards({numberOfCards, images}: ContentCardsProps) {

    const { open } = useFullscreenImage();

    if (!images) return null;

    if (numberOfCards === 1) {
        return (
            <div 
                className="rounded-[20px] sm:rounded-[30px] w-full h-[185px] sm:h-[505px] 
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                style={{ backgroundImage: `url(${images[1]})`}}
                onClick={() => open(images[1])}
            />
        )
    }

    if (numberOfCards === 2) {
        return (
            <div className="flex gap-4">
                {images[2].map((image, index) => (
                    <div 
                        key={index}
                        className="rounded-[20px] sm:rounded-[30px] w-full h-[185px] sm:h-[505px] 
                            bg-cover bg-center bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: `url(${image})`}}
                        onClick={() => open(image)}
                    />
                ))}
            </div>
        )
    }

    if (numberOfCards === 4) {
        return (
            <div className="grid grid-cols-3 gap-4 h-55 sm:h-148">
                <div className="col-span-2 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-1 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-1 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-2 rounded-xl sm:rounded-[30px] bg-image"></div>
            </div>
        )
    }

    if (numberOfCards === 5) {
        return (
            <div className="grid grid-cols-6 gap-4 h-55 sm:h-148">
                <div className="col-span-2 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-2 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-2 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-3 rounded-xl sm:rounded-[30px] bg-image"></div>
                <div className="col-span-3 rounded-xl sm:rounded-[30px] bg-image"></div>
            </div>
        )
    }

    return null;
}