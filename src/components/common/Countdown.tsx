'use client';

import { Fragment } from "react";
import { useTranslations } from 'next-intl';
import { CountdownProps } from "@/types/props/Countdown.props";
import { splitTimeLeft } from "@/utils/date";

export default function Countdown({ timeLeft, className, ...props }: CountdownProps) {
    const t = useTranslations('PaidLectureCard.timer');

    const { days, hours, minutes, seconds } = splitTimeLeft(timeLeft);

    const units = [
        { key: 'days', value: days },
        { key: 'hours', value: hours },
        { key: 'minutes', value: minutes },
        { key: 'seconds', value: seconds },
    ] as const;

    return (
        <div className={`flex items-start gap-2 text-light ${className ?? ''}`} {...props}>
            {units.map((unit, index) => (
                <Fragment key={unit.key}>
                    {index > 0 && (
                        <span className="font-semibold text-[32px] leading-[1.2]">:</span>
                    )}
                    <div className="flex flex-col items-center gap-1 min-w-9">
                        <span className="font-semibold text-[32px] leading-[1.2] tabular-nums">
                            {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className="font-medium text-[12px] leading-none">
                            {t(unit.key)}
                        </span>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}
