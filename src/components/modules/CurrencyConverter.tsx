import Input from "../common/Input";
import Icon from "@/icons/Icon";
import { PriceResponse } from "@/types/interfaces/PaidLecture.interface";
import { getLocale } from "next-intl/server";
import { getTranslations } from 'next-intl/server';
import { formatDate } from "@/utils/date";

export interface CurrencyConverterProps {
    priceInfo: PriceResponse;
}

export default async function CurrencyConverter({priceInfo}: CurrencyConverterProps) {
    const locale = await getLocale();
    const t = await getTranslations('Payment');

    return (
        <div 
            className="col-span-1 sm:col-span-4 lg:col-span-2 rounded-[20px] sm:rounded-[30px] py-8 px-4 pt-4 bg-light
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] 
                flex flex-col sm:justify-between lg:justify-start"
        >
            <div className="flex flex-col gap-1.75">
                <h3 className="font-semibold text-[18px] leading-5.25 text-dark">
                    {t('converterTitle')}
                </h3>
                <p className="font-normal text-[14px] leading-[160%] text-grey">
                    {formatDate(priceInfo.rateDate, locale)}                         
                </p>
            </div>
            <div className="relative flex pr-6 flex-col mt-13.5 gap-4">
                <Input
                    className="px-3 py-4.75 border border-stroke font-extrabold text-[18px] 
                        text-dark rounded-xl h-15 bg-background focus:outline-none"
                    name="exchange"
                    type="text"
                    value="1.00 USD"
                    readOnly
                />
                <Input
                    className="px-3 py-4.75 border border-stroke font-extrabold text-[18px] 
                        text-dark rounded-xl h-15 bg-background focus:outline-none"
                    name="exchange"
                    type="text"
                    value={`${priceInfo.exchangeRate} UZS`}
                    readOnly
                />
                <Icon className="absolute fill-dark right-4 bottom-15" name="equals"/>
            </div>
        </div>
    )
}