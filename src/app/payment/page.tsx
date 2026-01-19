import GeneralContainer from "@/layouts/GeneralContainer";
import CurrencyConverter from "@/components/modules/CurrencyConverter";
import Square from "@/components/common/Square";
import Icon from "@/icons/Icon";
import Button from "@/components/common/Button";
import {useTranslations} from 'next-intl';

export default function Payment() {
    const t = useTranslations('Payment');

    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h1 
                        className="font-bold text-[40px] sm:text-[64px] leading-12 sm:leading-[76px]
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
                        </div>
                        <div className="flex flex-col gap-[7px] mt-16">
                            <h3 className="font-semibold text-[18px] leading-[21px] text-dark">
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
                        <div className="flex flex-col gap-[7px] mt-16">
                            <h3 className="font-semibold text-[18px] leading-[21px] text-dark">
                                {t('paymentSecurity.title')}
                            </h3>
                            <p className="font-normal text-[14px] leading-[160%] text-grey">
                                {t('paymentSecurity.text1')} <br />{t('paymentSecurity.text2')}                        
                            </p>
                        </div>
                    </div>
                    <CurrencyConverter/>
                    <div className="col-span-1 sm:col-span-4 lg:col-span-5 rounded-[20px] sm:rounded-[30px] p-4 pt-4 bg-light flex flex-col lg:flex-row gap-4
                        shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
                    >
                        <div className="rounded-[20px] w-full h-[296px] lg:w-[424px] lg:h-[239px] bg-image"></div>
                        <div className="flex flex-col gap-8 lg:gap-0 sm:justify-between">
                            <div className="flex flex-col gap-[7px]">
                                <h3 className="font-semibold text-[18px] leading-[21px] text-dark">
                                    Card_Title_Small
                                </h3>
                                <p className="font-normal text-[14px] leading-[160%] text-grey h-[65px] lg:h-auto">
                                    Card_Body                    
                                </p>
                            </div>
                            <div className="flex gap-[89px]">
                                <div className="flex items-center gap-2">
                                    <Icon className="fill-dark" name="eye"/>
                                    <p className="font-normal text-[16px] uppercase text-dark">
                                        454
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon className="fill-dark" name="like"/>
                                    <p className="font-normal text-[16px] uppercase text-dark">
                                        454
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-8 lg:col-span-3 rounded-[20px] sm:rounded-[30px] p-4 bg-accent-success flex flex-col gap-10.5 
                        shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
                    >
                        <Square>
                            <Icon className="fill-dark w-8 h-8" name="eye"/>
                        </Square>
                        <p className="font-semibold text-[32px] text-light">
                            302 753.85 UZS
                        </p>
                        <Button
                            color="light"
                            size="full"
                            form="round"
                            icon="card"
                        >
                            {t('purchaseButton')}
                        </Button>
                    </div>
                </div>
            </div>
        </GeneralContainer>
    )
}