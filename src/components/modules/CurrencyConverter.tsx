import Input from "../common/Input";
import Icon from "@/icons/Icon";
import {useTranslations} from 'next-intl';

export default function CurrencyConverter() {
    const t = useTranslations('Payment');

    return (
        <div 
            className="col-span-1 sm:col-span-4 lg:col-span-2 rounded-[20px] sm:rounded-[30px] py-8 px-4 pt-4 bg-light
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] 
                flex flex-col sm:justify-between lg:justify-start"
        >
            <div className="flex flex-col gap-[7px]">
                <h3 className="font-semibold text-[18px] leading-[21px] text-dark">
                    {t('converterTitle')}
                </h3>
                <p className="font-normal text-[14px] leading-[160%] text-grey">
                    October 20, 2025.                           
                </p>
            </div>
            <div className="relative flex pr-6 flex-col mt-13.5 gap-4">
                <Input
                    className="px-3 py-[19px] border border-stroke font-extrabold text-[18px] 
                        text-dark rounded-xl h-[60px] bg-background focus:outline-none"
                    name="exchange"
                    type="text"
                    value="1.00 USD"
                    readOnly
                />
                <Input
                    className="px-3 py-[19px] border border-stroke font-extrabold text-[18px] 
                        text-dark rounded-xl h-[60px] bg-background focus:outline-none"
                    name="exchange"
                    type="text"
                    value="12 133.03 UZS"
                    readOnly
                />
                <Icon className="absolute fill-dark right-4 bottom-[60px]" name="equals"/>
            </div>
        </div>
    )
}