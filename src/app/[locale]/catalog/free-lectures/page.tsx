import GeneralContainer from "@/layouts/GeneralContainer";
import FreeLecturesNet from "@/components/modules/FreeLecturesNet";
import {useTranslations} from 'next-intl';

export default function FreeLecturesCatalog() {
    const t = useTranslations('Catalog.freeLectures');
    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 className="leading-12 sm:leading-[77px] font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    {t('headTitle')}
                </h1>
                <FreeLecturesNet
                    page="freeLectures"
                    cardsPerPage={14}
                />
            </div>
        </GeneralContainer>
    )
}