import GeneralContainer from "@/layouts/GeneralContainer";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import {getTranslations} from 'next-intl/server';
import { getPaidLectures } from "@/lib/api/paidLectures";

export default async function PaidLecturesCatalog() {
    const t = await getTranslations('Catalog.paidLectures');

    const lectures = await getPaidLectures();

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16 w-full">
                <h1 
                    className="leading-12 sm:leading-[77px] font-bold text-[40px] max-w-180
                        sm:text-[64px] tracking-[-0.01em] text-center text-dark"
                >
                    {t('headTitle')}
                </h1>
                <PaidLecturesNet
                    lectures={lectures}
                    page="paidLectures"
                    cardsPerPage={8}
                />
            </div>
        </GeneralContainer>
    )
}