import Square from "./Square";

export default function ReviewCard() {
    return (
        <div className="flex flex-col rounded-[20px] p-4 bg-light gap-4 w-110
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <p className="italic font-normal text-[16px] leading-[150%] text-grey h-[252px]">
                Review_Text
            </p>
            <div className="flex justify-between">
                <p className="font-semibold text-[18px] leading-[150%] text-dark">
                    Review_Name
                </p>
                <Square/>
            </div>
        </div>
    )
}