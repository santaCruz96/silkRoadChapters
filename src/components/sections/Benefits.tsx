import InfoCard from "../common/InfoCard";
import {useTranslations} from 'next-intl';

import { useBenefitsData } from "@/data/benefits.data"

export default function Benefits() {
    const benefitsData = useBenefitsData();
    const t = useTranslations('Benefits');

    return (
        <section className="flex flex-col gap-12 sm:gap-16">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    {t('title')}
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    {t('text')}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-y-8 gap-x-4">
                {benefitsData.map(card => (
                    <InfoCard 
                        key={card.id}
                        size={card.size}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </section>
    )
}