import ReviewsCarousel from "../modules/ReviewsCarousel";
import {useTranslations} from 'next-intl';

export default function Reviews()  {
    const t = useTranslations('Reviews');

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col max-w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    {t('title')}
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    {t('text')}             
                </p>
            </div>
            <ReviewsCarousel/>
        </section>
    )
}