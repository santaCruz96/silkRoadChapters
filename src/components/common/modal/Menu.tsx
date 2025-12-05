import MenuItem from '../MenuItem';
import SocialLink from '../SocialLink';

import { links } from '@/data/links.data';
import { socialLinks } from '@/data/socialLinks.data';

export default function Menu() {
    return (
        <>
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
                    Follow us:
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