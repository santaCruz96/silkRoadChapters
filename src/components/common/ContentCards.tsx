import { ContentCardsProps } from "@/types/props/ContentCards.props";

export default function ContentCards({numberOfCards}: ContentCardsProps) {

    if (numberOfCards === 1) {
        return (
            <div className="rounded-[20px] sm:rounded-[30px] w-full h-[185px] sm:h-[505px] bg-image"></div>
        )
    }

    if (numberOfCards === 2) {
        return (
            <div className="flex gap-4">
                <div className="rounded-xl sm:rounded-[30px] w-full h-55 sm:h-[505px] bg-image"></div>
                <div className="rounded-xl sm:rounded-[30px] w-full h-55 sm:h-[505px] bg-image"></div>
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