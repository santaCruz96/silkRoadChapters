import GeneralContainer from "@/layouts/GeneralContainer";
import InfoCard from "@/components/common/InfoCard";
import {useTranslations} from 'next-intl';

export default function FAQ() {
    const t = useTranslations('FAQ');

    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16">
                <h1 
                    className="font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] leading-12 
                        sm:leading-[77px] text-center text-dark"
                >
                    {t('headTitle')}
                </h1>
                <div className="flex flex-col sm:flex-col-reverse lg:flex-col gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-y-8 slgm:gap-y-0 gap-x-4">
                        <InfoCard 
                            size="col-span-1 lg:col-span-3"
                            icon="card"
                            title={t('1.title')}
                            text={t('1.text')}
                        />
                        <InfoCard 
                            size="col-span-1 lg:col-span-3"
                            icon="light"
                            title={t('2.title')}
                            text={t('2.text')}
                        />
                        <InfoCard 
                            size="col-span-1 lg:col-span-2"
                            icon="starsMinimalistic"
                            title={t('3.title')}
                            text={t('3.text')}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-0 gap-x-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
                            <InfoCard 
                                size="col-span-1"
                                icon="clappeBoard"
                                title={t('4.title')}
                                text={t('4.text')}
                            />
                            <InfoCard 
                                size="col-span-1"
                                icon="smile"
                                title={t('5.title')}
                                text={t('5.text')}
                            />
                            <InfoCard 
                                size="col-span-1 lg:col-span-2"
                                icon="calendar"
                                title={t('6.title')}
                                text={t('6.text')}
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
                            <InfoCard 
                                size="col-span-1 lg:col-span-2"
                                icon="earth"
                                title={t('7.title')}
                                text={t('7.text')}
                            />
                            <InfoCard 
                                size="col-span-1"
                                icon="dialog"
                                title={t('8.title')}
                                text={t('8.text')}
                            />
                            <InfoCard 
                                size="col-span-1"
                                icon="bookBookmark"
                                title={t('9.title')}
                                text={t('9.text')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GeneralContainer>
    )
}