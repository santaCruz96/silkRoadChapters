import GeneralContainer from "@/layouts/GeneralContainer";
import {useTranslations} from 'next-intl';

export default function TermsOfUse() {
    const t = useTranslations('TermsOfUse');

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16">
                <h1 className="font-bold text-[32px] sm:text-[60px] md:text-[64px] tracking-[-0.01em] 
                        leading-12 sm:leading-19 text-center text-dark"
                >
                    {t('title')}
                </h1>
                <div className="flex flex-col max-w-4xl gap-8 
                    text-[16px] leading-[160%]
                    [&_div]:flex [&_div]:flex-col [&_div]:gap-4
                    [&_h3]:font-bold [&_h3]:text-dark
                    [&_p]:font-medium [&_p]:text-grey
                    [&_li]:ml-6 [&_li]:font-medium [&_li]:text-grey"
                >
                    <div>
                        <div className="gap-0!">
                            <p><span className="font-bold">{t('date_bold')}</span> {t('date')}</p>
                            <p><span className="font-bold">{t('website_bold')}</span> <a href="http://silkroadchapters.uz/" className="underline underline-offset-2">http://silkroadchapters.uz/</a></p>
                            <p><span className="font-bold">{t('company_bold')}</span> Individual Entrepreneur “Silk Road Chapters”, owner Aukhadeeva Yuliya Olegovna</p>
                        </div>
                        <h3>{t('section1.title')}</h3>
                        <p>{t('section1.p1')}</p>
                    </div>
                    <div>
                        <h3>{t('section2.title')}</h3>
                        <p>{t('section2.p1')}</p>
                        <li>{t('section2.li1')}</li>
                        <li>{t('section2.li2')}</li>
                        <li>{t('section2.li3')}</li>
                        <p>{t('section2.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section3.title')}</h3>
                        <li>{t('section3.li1')}</li>
                        <li>{t('section3.li2')}</li>
                        <li>{t('section3.li3')}</li>
                        <li>{t('section3.li4')}</li>
                    </div>
                    <div>
                        <h3>{t('section4.title')}</h3>
                        <li>{t('section4.li1')}</li>
                        <li>{t('section4.li2')}</li>
                        <li>{t('section4.li3')}</li>
                    </div>
                    <div>
                        <h3>{t('section5.title')}</h3>
                        <li>{t('section5.li1')}</li>
                        <li>{t('section5.li2')}</li>
                        <li>{t('section5.li3')}</li>
                        <li>{t('section5.li4')}</li>
                        <li>{t('section5.li5')}</li>
                    </div>
                    <div>
                        <h3>{t('section6.title')}</h3>
                        <p>{t('section6.p1')}</p>
                        <li>{t('section6.li1')}</li>
                        <li>{t('section6.li2')}</li>
                        <li>{t('section6.li3')}</li>
                        <li>{t('section6.li4')}</li>
                        <li>{t('section6.p2')}</li>
                    </div>
                    <div>
                        <h3>{t('section7.title')}</h3>
                        <li>{t('section7.li1')}</li>
                        <li>{t('section7.li2')}</li>
                        <li>{t('section7.li3')}</li>
                    </div>
                    <div>
                        <h3>{t('section8.title')}</h3>
                        <li>{t('section8.li1')}</li>
                        <li>{t('section8.li2')}</li>
                        <li>{t('section8.li3')}</li>
                        <li className="ml-13!">{t('section8.li3_1')}</li>
                        <li className="ml-13!">{t('section8.li3_2')}</li>
                        <li className="ml-13!">{t('section8.li3_3')}</li>
                        <li>{t('section8.li4')}</li>
                        <li>{t('section8.li5')}</li>
                    </div>
                    <div>
                        <h3>{t('section9.title')}</h3>
                        <p>{t('section9.p1')}</p>
                    </div>
                    <div>
                        <h3>{t('section10.title')}</h3>
                        <p>{t('section10.p1')}</p>
                    </div>
                    <div>
                        <h3>{t('section11.title')}</h3>
                        <p>{t('section11.company')}</p>
                        <p><span className="font-bold">{t('section11.address_bold')}</span> {t('section11.address')}</p>
                        <p><span className="font-bold">{t('section11.tin_bold')}</span> 42411880270111</p>
                        <p><span className="font-bold">{t('section11.email_bold')}</span> <a href="mailto:info@src.education" className="underline underline-offset-2">info@src.education</a></p>
                        <p><span className="font-bold">{t('section11.phone_bold')}</span> +998971578959</p>
                    </div>
                </div>
            </div>
        </GeneralContainer>
    )
}