import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import {getTranslations} from 'next-intl/server';
import { getPaidLectures, getPurchasesLecture  } from "@/lib/api/paidLectures";
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';
import { PurchasesLecture } from '@/types/api/purchasesLecture';

export default async function PaidLecturesCatalog() {
    const t = await getTranslations('Catalog.paidLectures');

    const lectures = await getPaidLectures();
    const cookieStore = await cookies();
    const isAuthenticated = !!cookieStore.get(TOKEN_COOKIE_NAME)?.value;

    let purchasesLectures: PurchasesLecture[] | null = null;

    if (isAuthenticated) {
        purchasesLectures = await getPurchasesLecture();
    }

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
                    purchasesLectures={purchasesLectures}
                />
            </div>
        </GeneralContainer>
    )
}