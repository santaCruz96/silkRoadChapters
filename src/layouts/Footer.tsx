import Link from "next/link"
import Logo from "../components/common/Logo";
import SocialLink from "@/components/common/SocialLink";

import { socialLinks } from "@/data/socialLinks.data";

export default function Footer() {
    return (
        <footer className="max-w-300 mx-auto flex flex-col">
            <div 
                className="w-full bg-dark rounded-[20px]
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] z-10"
            >
                <div className="container relative mx-auto p-8 flex justify-between items-center">
                    <div className="flex items-center gap-[37px] font-bold text-[12px] text-light">
                        <Link href={'/legal'}>Privacy Policy</Link>
                        <Link href={'/legal'}>Terms of Use</Link>
                    </div>
                    <Link
                        className="absolute left-1/2 -translate-x-1/2"
                        href={'/'}
                    >
                        <Logo color="light"/>
                    </Link>
                    <div className="flex gap-20.5 items-center">
                        <Link className="font-bold text-[12px] text-light" href={'#'}>Public Offer</Link>
                        <div className="flex gap-4.5">
                            {socialLinks.footer.map((link) => (
                                <SocialLink
                                    key={link.id}
                                    location='footer'
                                    route={link.route}
                                    iconName={link.iconName}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <p className="my-8 font-medium text-[16px] leading-[150%] text-center text-grey">
                    © 2025 Silk Road Chapters. All rights reserved.
            </p>
        </footer>
    )
}