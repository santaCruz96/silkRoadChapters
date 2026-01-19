"use client";

import { useState, ChangeEvent } from 'react';
import {useTranslations} from 'next-intl';

interface TextAreaProps {
    maxLength?: number;
    value?: string;
    onChange?: (value: string) => void;
}

export default function TextArea ({
    maxLength = 400,
    value: controlledValue,
    onChange,
}: TextAreaProps) {
    const t = useTranslations('Comments');
    const isControlled = onChange !== undefined;
    const [internalValue, setInternalValue] = useState('');

    const currentValue = isControlled ? controlledValue ?? '' : internalValue;
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        if (isControlled) {
            onChange?.(newValue);
        } else {
            setInternalValue(newValue);
        }
    };

    return (
        <div className="relative w-full h-55 lg:w-4xl lg:h-36">
            <textarea
                value={currentValue}
                onChange={handleChange}
                placeholder={t('placeholder')}
                maxLength={maxLength}
                className={`absolute inset-0 w-full h-full resize-none border border-image
                    rounded-xl p-4 pb-8 bg-stroke text-dark placeholder:italic placeholder:font-normal
                    placeholder:text-[16px] placeholder:leading-[150%] placeholder:text-grey focus:outline-none
                    focus:placeholder:text-transparent
                `}
            />
            <span
                className="absolute bottom-4 right-4 italic font-normal text-[16px] leading-[150%] text-grey"
                aria-live="polite"
            >
                {currentValue.length}/{maxLength}
            </span>
        </div>
    );
};