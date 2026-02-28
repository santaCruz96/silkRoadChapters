import GeneralContainer from "@/layouts/GeneralContainer";
import CurrencyConverter from "@/components/modules/CurrencyConverter";
import PaymentLectureCard from "@/components/modules/PaymentLectureCard";
import FinalCost from "@/components/modules/FinalCost";
import Square from "@/components/common/Square";
import Icon from "@/icons/Icon";
import {getTranslations} from 'next-intl/server';
import { getSpecificLecture, checkoutPrice } from "@/lib/api/paidLectures";

export default async function Payment({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const t = await getTranslations('Payment');

    const { id } = await params;
    const priceInfo = await checkoutPrice(id);
    const specificLecture = await getSpecificLecture(id);

    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h1 
                        className="font-bold text-[40px] sm:text-[64px] leading-12 sm:leading-19
                            tracking-[-0.01em] text-center text-dark"
                    >
                        {t('title')}
                    </h1>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                        {t('text')}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-y-8 gap-x-4">
                    <div 
                        className="col-span-1 sm:col-span-4 lg:col-span-3 rounded-[20px] sm:rounded-[30px] py-8 px-4 pt-4 bg-light
                            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
                    >   
                        <div className="flex gap-3">
                            <Square>
                                <Icon className="fill-dark w-8 h-8" name="visa"/>
                            </Square>
                            <Square>
                                <Icon className="fill-dark w-8 h-8" name="mastercard"/>
                            </Square>
                            <Square>
                                <Icon className="fill-dark w-8 h-8" name="humo"/>
                            </Square>
                            <Square>
                                <Icon className="fill-dark w-8 h-8" name="uzcard"/>
                            </Square>
                        </div>
                        <div className="flex flex-col gap-1.75 mt-16">
                            <h3 className="font-semibold text-[18px] leading-5.25 text-dark">
                                {t('currencyConversion.title')}
                            </h3>
                            <p className="font-normal text-[14px] leading-[160%] text-grey">
                                {t('currencyConversion.text1')} <br />{t('currencyConversion.text2')}
                            </p>
                        </div>
                    </div> 
                    <div 
                        className="col-span-1 sm:col-span-4 lg:col-span-3 rounded-[20px] sm:rounded-[30px] py-8 px-4 pt-4 bg-light
                            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
                    >
                        <Square>
                            <Icon className="fill-dark w-8 h-8" name="shieldCheck"/>
                        </Square>
                        <div className="flex flex-col gap-1.75 mt-16">
                            <h3 className="font-semibold text-[18px] leading-5.25 text-dark">
                                {t('paymentSecurity.title')}
                            </h3>
                            <p className="font-normal text-[14px] leading-[160%] text-grey">
                                {t('paymentSecurity.text1')} <br />{t('paymentSecurity.text2')}                        
                            </p>
                        </div>
                    </div>
                    <CurrencyConverter priceInfo={priceInfo}/>
                    <PaymentLectureCard specificLecture={specificLecture}/>
                    <FinalCost priceInfo={priceInfo}/>
                </div>
            </div>
        </GeneralContainer>
    )
}