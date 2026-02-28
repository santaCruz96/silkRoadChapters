import SavedLecturesItem from "../common/SavedLecturesItem";
import {getTranslations} from 'next-intl/server';
import { getSavedLectures } from "@/lib/api/userProfile";
import { UserProfileFavorites } from "@/types/api/user";

export default async function SavedLectures(){
    const t = await getTranslations('SavedLectures');

    const savedLectures = await getSavedLectures();

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
                {savedLectures.map((lecture: UserProfileFavorites, id: string) => (
                    <SavedLecturesItem savedLecture={lecture} key={id}/>
                ))}
            </div>
        </section>
    )
}