import { JSX } from "react";
import GeneralContainer from "@/layouts/GeneralContainer";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";

export default function PaidLectures():JSX.Element {
    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 className="leading-[77px] font-bold text-[64px] tracking-[-0.01em] text-center text-dark">
                    Enter the Heart of the Silk Road
                </h1>
                <PaidLecturesNet
                    page="paidLectures"
                    cardsPerPage={8}
                />
            </div>
        </GeneralContainer>
    )
}