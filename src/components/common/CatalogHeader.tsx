import { CatalogHeaderProps } from "@/types/props/CatalogHeader.props";
import Button from "./Button";
import Search from "../modules/Search/Search";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import {useTranslations} from 'next-intl';

export default function CatalogHeader({
    page,
}: CatalogHeaderProps) {
    const t = useTranslations('Catalog');

    const isMobile = useResponsiveStore(state => state.isMobile);

    const title: Record<string, string> = {
        freeLectures: t('freeLectures.title'),
        paidLectures: t('paidLectures.title'),
        blog: t('blog.title'),
        account: t('account.title'),
    } 

    const text: Record<string, string> = {
        freeLectures: t('freeLectures.text'),
        paidLectures: t('paidLectures.text'),
        blog: t('blog.text'),
        account: t('account.text'),
    } 

    return (
        <div 
            className={`${page !== 'account' && 
                'flex flex-col justify-center items-center md:flex-row md:items-start md:justify-between gap-12 md:gap-0'
            }`}
        >
            <div 
                className={`flex flex-col gap-4 items-center md:items-start
                    ${page !== 'account' && 'w-full sm:w-148'}`}
            >
                <h3 
                    className={`font-bold text-[36px] text-dark
                        ${page !== 'account' ? 'text-center md:text-left' : 'text-center'}`}
                >
                    {title[page]}
                </h3>
                <p 
                    className={`font-medium text-[16px] leading-[160%] text-grey
                        ${page !== 'account' ? 'text-center md:text-left' : 'text-center'}`}
                >
                    {text[page]}
                </p>
                {page !== 'account' &&
                    <div className="flex gap-4 w-full sm:w-auto mt-8 sm:mt-4">
                        <Button
                            color="dark"
                            size={isMobile ? "full" : "lg"}
                            form="round"
                            hover="primary"
                        >
                            {t('newButton')}
                        </Button>
                        <Button
                            color="light"
                            size={isMobile ? "full" : "lg"}
                            form="round"
                            hover="secondary"
                            shadow
                        >
                            {t('popularButton')}
                        </Button>
                    </div>
                }
            </div>
            {page !== 'account' &&
                <div className="flex items-end h-full w-full sm:w-auto">
                    <Search/>
                </div>
            }
        </div>
    )
}