import { ContentCardsProps } from "@/interfaces/ContentCards.props";

export default function ContentCards({numberOfCards}: ContentCardsProps) {

    if (numberOfCards === 1) {
        return (
            <div className="rounded-[30px] w-full h-[505px] bg-image"></div>
        )
    }

    if (numberOfCards === 2) {
        return (
            <div className="flex gap-4">
                <div className="rounded-[30px] w-full h-[505px] bg-image"></div>
                <div className="rounded-[30px] w-full h-[505px] bg-image"></div>
            </div>
        )
    }

    if (numberOfCards === 4) {
        return (
            <div className="grid grid-cols-3 gap-4 h-148">
                <div className="col-span-2 rounded-[30px] bg-image"></div>
                <div className="col-span-1 rounded-[30px] bg-image"></div>
                <div className="col-span-1 rounded-[30px] bg-image"></div>
                <div className="col-span-2 rounded-[30px] bg-image"></div>
            </div>
        )
    }

    if (numberOfCards === 5) {
        return (
            <div className="grid grid-cols-6 gap-4 h-148">
                <div className="col-span-2 rounded-[30px] bg-image"></div>
                <div className="col-span-2 rounded-[30px] bg-image"></div>
                <div className="col-span-2 rounded-[30px] bg-image"></div>
                <div className="col-span-3 rounded-[30px] bg-image"></div>
                <div className="col-span-3 rounded-[30px] bg-image"></div>
            </div>
        )
    }

    return null;
}