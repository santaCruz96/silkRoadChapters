import GeneralContainer from "@/layouts/GeneralContainer";
import {useTranslations} from 'next-intl';

export default function PublicOffer() {
    const t = useTranslations('PublicOffer');

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16">
                <h1 className="font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] 
                        leading-12 sm:leading-[76px] text-center text-dark"
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
                        <p>{t('date')}</p>
                    </div>
                    <div>
                        <h3>{t('section1.title')}</h3>
                        <p>{t('section1.p1_1')} <span className="font-bold">{t('section1.p1_bold')}</span> {t('section1.p1_2')}</p>
                        <p>{t('section1.p2_1')} <a href="http://silkroadchapters.uz/" className="underline underline-offset-2">{t('section1.p2_link')}</a> {t('section1.p2_2')}</p>   
                        <p>{t('section1.p3')}</p>
                        <li>{t('section1.li1')}</li>
                        <li>{t('section1.li2')}</li>
                        <li>{t('section1.li3')}</li>
                        <p>{t('section1.p4')}</p>
                    </div>
                    <div>
                        <h3>{t('section2.title')}</h3>
                        <p>{t('section2.p1')}</p>
                        <li>{t('section2.li1')}</li>
                        <li>{t('section2.li2')}</li>
                        <li>{t('section2.li3')}</li>
                        <p>{t('section2.p2')}</p>
                        <p>{t('section2.p3')}</p>
                    </div>
                    <div>
                        <h3>{t('section3.title')}</h3>
                        <p>{t('section3.p1')}</p>
                        <li>{t('section3.li1')}</li>
                        <li>{t('section3.li2')}</li>
                        <li>{t('section3.li3')}</li>
                        <p>{t('section3.p2')}</p>
                        <li>{t('section3.li4')}</li>
                        <li>{t('section3.li5')}</li>
                        <li>{t('section3.li6')}</li>
                        <p>{t('section3.p3')}</p>
                        <li>{t('section3.li7')}</li>
                        <li>{t('section3.li8')}</li>
                    </div>
                    <div>
                        <h3>{t('section4.title')}</h3>
                        <p>{t('section4.p1')}</p>
                        <p>{t('section4.p2')}</p>
                        <li>{t('section4.li1')}</li>
                        <li>{t('section4.li2')}</li>
                        <li>{t('section4.li3')}</li>
                    </div>
                    <div>
                        <h3>{t('section5.title')}</h3>
                        <p>{t('section5.p1')}</p>
                        <p>{t('section5.p2')}</p>
                        <p>{t('section5.p3')}</p>
                        <p>{t('section5.p4')}</p>
                        <p>{t('section5.p5')}</p>
                    </div>
                    <div>
                        <h3>{t('section6.title')}</h3>
                        <p>{t('section6.p1')}</p>
                        <li>{t('section6.li1')}</li>
                        <li>{t('section6.li2')}</li>
                        <li>{t('section6.li3')}</li>
                        <li>{t('section6.li4')}</li>
                        <p>{t('section6.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section7.title')}</h3>
                        <p>{t('section7.p1')}</p>
                        <p>{t('section7.p2')}</p>
                        <p>{t('section7.p3')}</p>
                    </div>
                    <div>
                        <h3>{t('section8.title')}</h3>
                        <p>{t('section8.p1')}</p>
                        <p>{t('section8.p2')}</p>
                        <p>{t('section8.p3')}</p>
                    </div>
                    <div>
                        <h3>{t('section9.title')}</h3>
                        <p>{t('section9.p1')}</p>
                        <p>{t('section9.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section10.title')}</h3>
                        <p>{t('section10.p1')}</p>
                        <p>{t('section10.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section11.title')}</h3>
                        <p>{t('section11.p1')}</p>
                        <p>{t('section11.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section12.title')}</h3>
                        <p>{t('section12.p1')}</p>
                        <p>{t('section12.p2')}</p>
                        <p>{t('section12.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section13.title')}</h3>
                        <p>{t('section13.p1')}</p>
                        <p>{t('section13.p2')}</p>
                    </div>
                    <div>
                        <h3>{t('section14.title')}</h3>
                        <p>{t('section14.p1')}</p>
                    </div>
                    <div>
                        <h3>{t('section15.title')}</h3>
                        <p><span className="font-bold">{t('section15.company_bold')}</span> {t('section15.company')}</p>
                        <p><span className="font-bold">{t('section15.tin_bold')}</span> 42411880270111</p>
                        <p><span className="font-bold">{t('section15.address_bold')}</span> {t('section15.address')}</p>
                        <p><span className="font-bold">{t('section15.phone_bold')}</span> +998971578959</p>
                        <p><span className="font-bold">{t('section15.email_bold')}</span> <a href="mailto:info@src.education" className="underline underline-offset-2">info@src.education</a></p>
                    </div>
                </div>
            </div>
        </GeneralContainer>
    )
}