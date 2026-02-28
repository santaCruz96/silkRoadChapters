import GeneralContainer from "@/layouts/GeneralContainer";
import FreeLecturesNet from "@/components/modules/FreeLecturesNet";
import { getTranslations } from 'next-intl/server';
import { getFreeLectures } from "@/lib/api/freeLectures";

export default async function FreeLecturesCatalog() {
    const lectures = await getFreeLectures();

    const t = await getTranslations('Catalog.freeLectures');
    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="leading-12 sm:leading-[77px] font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    {t('headTitle')}
                </h1>
                <FreeLecturesNet
                    lectures={lectures}
                    page="freeLectures"
                    cardsPerPage={14}
                />
            </div>
        </GeneralContainer>
    )
}