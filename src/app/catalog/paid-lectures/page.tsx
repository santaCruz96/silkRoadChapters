import GeneralContainer from "@/layouts/GeneralContainer";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import {useTranslations} from 'next-intl';

export default function PaidLecturesCatalog() {
    const t = useTranslations('Catalog.paidLectures');

    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 
                    className="leading-12 sm:leading-[77px] font-bold text-[40px] max-w-180
                        sm:text-[64px] tracking-[-0.01em] text-center text-dark"
                >
                    {t('headTitle')}
                </h1>
                <PaidLecturesNet
                    page="paidLectures"
                    cardsPerPage={8}
                />
            </div>
        </GeneralContainer>
    )
}