import { ContentCardsProps } from "@/types/props/ContentCards.props";
import { useFullscreenImage } from "@/store/useFullscreenImageStore";

export default function ContentCards({numberOfCards, images, image}: ContentCardsProps) {

    const { open } = useFullscreenImage();

    if (!images) return null;

    if (image && numberOfCards === 1) {
        return (
            <div 
                className="rounded-[20px] sm:rounded-[30px] w-full h-46.25 sm:h-126.25 
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                style={{ backgroundImage: `url(${image})`}}
                onClick={() => open(image)}
            />
        )
    }

    if (numberOfCards === 1) {
        return (
            <div 
                className="rounded-[20px] sm:rounded-[30px] w-full h-46.25 sm:h-126.25 
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                style={{ backgroundImage: `url(${images[0].imageUrl})`}}
                onClick={() => open(images[0].imageUrl)}
            />
        )
    }

    if (numberOfCards === 2) {
        return (
            <div className="flex gap-4">
                <div 
                    className="rounded-[20px] sm:rounded-[30px] w-full h-46.25 sm:h-126.25  
                        bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[0].imageUrl})`}}
                    onClick={() => open(images[0].imageUrl)}
                />
                <div 
                    className="rounded-[20px] sm:rounded-[30px] w-full h-46.25 sm:h-126.25  
                        bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[1].imageUrl})`}}
                    onClick={() => open(images[1].imageUrl)}
                />
            </div>
        )
    }

    if (numberOfCards === 4) {
        return (
            <div className="grid grid-cols-3 gap-4 h-55 sm:h-148">
                <div className="col-span-2 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[0].imageUrl})`}}
                    onClick={() => open(images[0].imageUrl)}
                />
                <div className="col-span-1 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[1].imageUrl})`}}
                    onClick={() => open(images[1].imageUrl)}
                />
                <div className="col-span-1 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[2].imageUrl})`}}
                    onClick={() => open(images[2].imageUrl)}
                />
                <div className="col-span-2 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[3].imageUrl})`}}
                    onClick={() => open(images[3].imageUrl)}
                />
            </div>
        )
    }

    if (numberOfCards === 5) {
        return (
            <div className="grid grid-cols-6 gap-4 h-55 sm:h-148">
                <div className="col-span-2 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[0].imageUrl})`}}
                    onClick={() => open(images[0].imageUrl)}
                />
                <div className="col-span-2 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[1].imageUrl})`}}
                    onClick={() => open(images[1].imageUrl)}
                />
                <div className="col-span-2 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[2].imageUrl})`}}
                    onClick={() => open(images[2].imageUrl)}
                />
                <div className="col-span-3 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[3].imageUrl})`}}
                    onClick={() => open(images[3].imageUrl)}
                />
                <div className="col-span-3 rounded-xl sm:rounded-[30px]
                    bg-cover bg-center bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${images[4].imageUrl})`}}
                    onClick={() => open(images[4].imageUrl)}
                />
            </div>
        )
    }

    return null;
}