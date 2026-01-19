import MenuItem from '../MenuItem';
import SocialLink from '../SocialLink';
import Button from '../Button';
import Search from '@/components/modules/Search/Search';
import { useLocaleStore } from '@/store/useLocaleStore';
import {useTranslations} from 'next-intl';

import { useLinks } from '@/data/links.data';
import { socialLinks } from '@/data/socialLinks.data';

export default function Menu() {
    const links = useLinks();
    const {locale, setLocale} = useLocaleStore();
    const t = useTranslations('Modal.menu');

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'ru' : 'en');
    };

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
            <div className='sm:hidden w-full border-b border-stroke py-4'>
                <Search menu/>
            </div>
            <div className='flex flex-col'>
                {links.map((link) => (
                    <MenuItem
                        key={link.id}
                        route={link.route}
                        label={link.label}
                    />
                ))}
            </div>
            <div className='flex flex-col gap-2 mt-17'>
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
                </div>
            </div>
        </>
    )
}