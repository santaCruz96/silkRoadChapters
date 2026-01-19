import Button from "./Button";
import Icon from "@/icons/Icon";
import { DetailsCardProps } from "@/types/props/DetailsCard.props";
import {useTranslations} from 'next-intl';

export default function DeatailsCard({isPaid = false}: DetailsCardProps) {
    const t = useTranslations('DeatailsCard');

    return (
        <div className="flex flex-col rounded-[20px] p-4 bg-light w-full lg:w-72 self-start
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <div className="flex w-full justify-between">
                <div className="flex gap-3">
                    <Button
                        color="lightGrey"
                        size="sm"
                        form="square"
                        icon="like"
                        iconSize="big"
                        hover="contentButton"
                    />
                    <Button
                        color="lightGrey"
                        size="sm"
                        form="square"
                        icon="bookmark"
                        iconSize="big"
                        hover="contentButton"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <Icon className="fill-dark" name="eye"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            454
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Icon className="fill-dark" name="like"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            454
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-4">
                {isPaid && 
                    <div className="flex flex-col gap-[7px] py-4 border-b border-stroke">
                        <p className="font-normal text-[14px] leading-[160%] text-grey">
                            {t('price')}
                        </p>
                        <p className="font-semibold text-[32px] leading-[38px] text-dark">
                            $0.00
                        </p>
                    </div>
                }
                <div className="flex flex-col gap-[7px] py-4 border-b border-stroke">
                    <p className="font-semibold text-[18px] leading-[22px] text-dark">
                        {t('location')}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        Details_Card_Text
                    </p>
                </div>
                <div className="flex flex-col gap-[7px] py-4 border-b border-stroke">
                    <p className="font-semibold text-[18px] leading-[22px] text-dark">
                        {t('travelPoint')}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        Details_Card_Text
                    </p>
                </div>
                <div className="flex flex-col gap-[7px] py-4">
                    <p className="font-semibold text-[18px] leading-[22px] text-dark">
                        {t('year')}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        Details_Card_Text
                    </p>
                </div>
            </div>
            <Button
                color="dark"
                size="full"
                form="round"
                icon="squareForward"
                hover="headerPrimary"
            >
                {t('shareButton')}
            </Button>
        </div>
    )
}