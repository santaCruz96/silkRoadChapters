import GeneralContainer from "@/layouts/GeneralContainer";
import AboutAuthor from "@/components/sections/AboutAuthor";
import AboutAuthorSlider from "@/components/modules/AboutAuthorSlider";
import {useTranslations} from 'next-intl';

export default function About() {
    const t = useTranslations('AboutAuthor');

    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 className="leading-12 sm:leading-[77px] font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    {t('greetings')}
                </h1>
                <AboutAuthor/>
            </div>
            <div className="flex flex-col gap-16 items-center w-full">
                <div className="flex flex-col sm:w-148 items-center">
                    <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                        {t('slider_title')}
                    </h3>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                        {t('slider_text')}               
                    </p>
                </div>
                <AboutAuthorSlider/>
            </div>
        </GeneralContainer>
    )
}