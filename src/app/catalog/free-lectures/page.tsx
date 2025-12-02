import GeneralContainer from "@/layouts/GeneralContainer";
import FreeLecturesNet from "@/components/modules/FreeLecturesNet";

export default function FreeLecturesCatalog() {
    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 className="leading-[77px] font-bold text-[64px] tracking-[-0.01em] text-center text-dark">
                    Study, Explore... Repeat!
                </h1>
                <FreeLecturesNet
                    page="freeLectures"
                    cardsPerPage={14}
                />
            </div>
        </GeneralContainer>
    )
}