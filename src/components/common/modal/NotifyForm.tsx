'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '../Button';
import { usePush } from '@/store/usePushStore';
import { getSpecificLecture } from '@/lib/api/paidLectures';
import { subscribeToLecture } from '@/lib/api/notifySubscriptions';
import { validateNotifyForm, NotifyFormErrors } from '@/schemas/notify';
import { NotifyFormProps } from '@/types/props/NotifyForm.props';

export default function NotifyForm({ lectureId, onAvailable, onClose }: NotifyFormProps) {
    const t = useTranslations('Modal.notify');
    const tValid = useTranslations('Validation.notify');
    const tPush = useTranslations('Push');

    const addPush = usePush((state) => state.addPush);

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<NotifyFormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleAlreadyAvailable = async () => {
        try {
            const lecture = await getSpecificLecture(lectureId, true);
            onAvailable?.(lecture);
        } catch (error) {
            console.error('Failed to refresh lecture:', error);
        }

        addPush('info', tPush('lectureAvailable'));
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setServerError(null);

        const trimmedEmail = email.trim();

        const validationErrors = validateNotifyForm(trimmedEmail, {
            emailRequired: tValid('emailRequired'),
            emailValid: tValid('emailValid'),
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        const status = await subscribeToLecture(lectureId, trimmedEmail);

        setIsLoading(false);

        if (status === 'subscribed') {
            setEmail(trimmedEmail);
            setIsSubscribed(true);
            return;
        }

        if (status === 'invalidEmail') {
            setErrors({ email: tValid('emailValid') });
            return;
        }

        if (status === 'alreadyAvailable') {
            await handleAlreadyAvailable();
            return;
        }

        if (status === 'notFound') {
            setServerError(tValid('notFound'));
            return;
        }

        if (status === 'tooManyRequests') {
            setServerError(tValid('tooManyRequests'));
            return;
        }

        setServerError(tValid('serverError'));
    };

    const inputClass = `
        rounded-xl px-3 h-12 font-medium text-[12px] w-full
        shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)]
        placeholder:font-medium focus:outline-none
        ${errors.email ? 'bg-accent-alert placeholder:text-light text-light' :
        'bg-light placeholder:text-image text-dark'}
    `;

    const spanClass = `
        text-accent-alert text-[12px] px-1 italic leading-[160%]
    `;

    const handleAddEmail = () => {
        setEmail('');
        setErrors({});
        setServerError(null);
        setIsSubscribed(false);
    };

    if (isSubscribed) {
        return (
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-[18px] leading-none text-dark">
                        {t('successHeaderText')}
                    </h3>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        {t('text')}
                    </p>
                </div>
                {email && (
                    <input
                        type="email"
                        value={email}
                        readOnly
                        className={inputClass}
                        aria-label={t('email')}
                    />
                )}
                <div className="flex flex-col gap-4">
                    <Button
                        type="button"
                        color="dark"
                        size="full"
                        form="round"
                        icon="like"
                        hover="primary"
                        onClick={onClose}
                    >
                        {t('ok')}
                    </Button>
                    <Button
                        type="button"
                        color="light"
                        size="full"
                        form="round"
                        shadow
                        icon="mail"
                        hover="secondary"
                        onClick={handleAddEmail}
                    >
                        {t('addEmail')}
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-12">
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-[18px] leading-none text-dark">
                        {t('headerText')}
                    </h3>
                    <p className="font-normal text-[14px] leading-[160%] text-grey">
                        {t('text')}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors({});
                            setServerError(null);
                        }}
                        disabled={isLoading}
                        className={inputClass}
                        placeholder={t('email')}
                        autoComplete="off"
                    />
                    {errors.email && (
                        <span className={spanClass}>{errors.email}</span>
                    )}
                    {serverError && (
                        <span className={spanClass}>{serverError}</span>
                    )}
                </div>
                <Button
                    type="submit"
                    color="dark"
                    size="full"
                    form="round"
                    icon="mail"
                    hover={isLoading ? "" : "primary"}
                    disabled={isLoading}
                >
                    {t('subscribe')}
                </Button>
            </form>
            <p className="font-normal text-[14px] leading-[160%] text-grey">
                {t('agreement')}
            </p>
        </div>
    )
}
