'use client';

import { useEffect, useRef } from "react";
import { usePush } from "@/store/usePushStore";
import { useTranslations } from 'next-intl';

const COOKIE_NAME = 'cookie_notice_shown';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; 

export default function CookiePushTrigger() {
    const addPush = usePush((state) => state.addPush);
    const isCalled = useRef(false);
    const tPush = useTranslations('Push');

    useEffect(() => {
        if (isCalled.current) return;
        isCalled.current = true;

        const hasCookie = document.cookie
            .split('; ')
            .some((item) => item.startsWith(`${COOKIE_NAME}=`));

        if (hasCookie) return;

        addPush('cookie', tPush('cookie'));

        document.cookie = [
            `${COOKIE_NAME}=1`,
            'Path=/',
            `Max-Age=${COOKIE_MAX_AGE}`,
            'SameSite=Lax',
            process.env.NODE_ENV === 'production' ? 'Secure' : '',
        ]
            .filter(Boolean)
            .join('; ');
    }, [addPush, tPush]);

    return null;
}