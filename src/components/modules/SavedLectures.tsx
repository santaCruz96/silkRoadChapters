import SavedLecturesItem from "../common/SavedLecturesItem";
import {useTranslations} from 'next-intl';

export default function SavedLectures(){
    const t = useTranslations('SavedLectures');

    return (
        <section className="flex flex-col items-center gap-16 w-full">
            <div className="flex flex-col gap-4 w-full sm:w-148">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    {t('title')}
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    {t('text')}
                </p>
            </div>
            <div className="flex flex-col items-center w-full">
                {Array.from({ length: 4 }).map((_, index) => (
                    <SavedLecturesItem key={index}/>
                ))}
            </div>
        </section>
    )
}