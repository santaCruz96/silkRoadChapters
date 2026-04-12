import { ContentCardsProps } from "@/types/props/ContentCards.props";
import { useFullscreenImage } from "@/store/useFullscreenImageStore";
import Image from 'next/image';

export default function ContentCards({numberOfCards, images, image}: ContentCardsProps) {

    const { open } = useFullscreenImage();

    if (!images) return null;

    if (image && numberOfCards === 1) {
        return (
            <div 
                className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden
                    w-full h-46.25 sm:h-126.25 cursor-pointer"
                onClick={() => open(image)}
            >
                <Image src={image} alt="" fill className="object-cover" />
            </div>
        )
    }

    if (numberOfCards === 1) {
        return (
            <div 
                className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden
                    w-full h-46.25 sm:h-126.25 cursor-pointer"
                onClick={() => open(images[0].imageUrl)}
            >
                <Image src={images[0].imageUrl} alt="" fill className="object-cover" />
            </div>
        )
    }

    if (numberOfCards === 2) {
        return (
            <div className="flex gap-4">
                <div 
                    className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden
                        w-full h-46.25 sm:h-126.25 cursor-pointer"
                    onClick={() => open(images[0].imageUrl)}
                >
                    <Image src={images[0].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div 
                    className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden
                        w-full h-46.25 sm:h-126.25 cursor-pointer"
                    onClick={() => open(images[1].imageUrl)}
                >
                    <Image src={images[1].imageUrl} alt="" fill className="object-cover" />
                </div>
            </div>
        )
    }

    if (numberOfCards === 4) {
        return (
            <div className="grid grid-cols-3 gap-4 h-55 sm:h-148">
                <div className="relative col-span-2 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[0].imageUrl)}
                >
                    <Image src={images[0].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-1 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[1].imageUrl)}
                >
                    <Image src={images[1].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-1 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[2].imageUrl)}
                >
                    <Image src={images[2].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-2 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[3].imageUrl)}
                >
                    <Image src={images[3].imageUrl} alt="" fill className="object-cover" />
                </div>
            </div>
        )
    }

    if (numberOfCards === 5) {
        return (
            <div className="grid grid-cols-6 gap-4 h-55 sm:h-148">
                <div className="relative col-span-2 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[0].imageUrl)}
                >
                    <Image src={images[0].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-2 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[1].imageUrl)}
                >
                    <Image src={images[1].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-2 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[2].imageUrl)}
                >
                    <Image src={images[2].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-3 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[3].imageUrl)}
                >
                    <Image src={images[3].imageUrl} alt="" fill className="object-cover" />
                </div>
                <div className="relative col-span-3 rounded-xl sm:rounded-[30px]
                        overflow-hidden cursor-pointer"
                    onClick={() => open(images[4].imageUrl)}
                >
                    <Image src={images[4].imageUrl} alt="" fill className="object-cover" />
                </div>
            </div>
        )
    }

    return null;
}