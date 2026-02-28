import MenuItem from '../MenuItem';
import SocialLink from '../SocialLink';
import Button from '../Button';
import { usePush } from "@/store/usePushStore";
import { useLocaleStore } from '@/store/useLocaleStore';
import { useTranslations } from 'next-intl';

import { useLinks } from '@/data/links.data';
import { socialLinks } from '@/data/socialLinks.data';

export default function Menu() {
    const { addPush, pushes } = usePush();
    
    const links = useLinks();
    const {locale, setLocale} = useLocaleStore();
    
    const t = useTranslations('Modal.menu');
    const tPush = useTranslations('Push');

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'ru' : 'en');
    };

    const handleEmail = () => {
        navigator.clipboard.writeText('info@src.education')
        if (pushes.length < 1) addPush('success', tPush('emailCopy'))
    }

    return (
        <>  
            <div className='sm:hidden w-full border-t border-b border-stroke pl-2'>
                <Button
                    color="empty"
                    size="sm"   
                    form="round"
                    onClick={toggleLanguage}
                >
                    {t('language')}
                </Button>
            </div>
            {/* <div className='sm:hidden w-full border-b border-stroke py-4'>
                <Search menu/>
            </div> */}
            <div className='flex flex-col mt-16 sm:mt-auto'>
                {links.map((link) => (
                    <MenuItem
                        key={link.id}
                        route={link.route}
                        label={link.label}
                    />
                ))}
            </div>
            <div className='flex flex-col gap-2 mt-16 sm:mt-17'>
                <p className='font-normal text-[14px] leading-[160%] text-grey'>
                    {t('followUs')}
                </p>
                <div className='flex gap-4'>
                    {socialLinks.menu.map((link) => (
                        <SocialLink
                            key={link.id}
                            location='menu'
                            route={link.route}
                            iconName={link.iconName}
                        />
                    ))}
                    <Button
                        color="empty"
                        size="xs"
                        form="square"
                        icon="mail"
                        onClick={handleEmail}
                    />
                </div>
            </div>
        </>
    )
}