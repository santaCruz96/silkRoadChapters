import { JSX } from "react";
import Link from "next/link"
import Logo from "../components/common/Logo";
import Icon from "@/icons/Icon";

export default function Footer(): JSX.Element {
    return (
        <footer className="max-w-300 mx-auto flex flex-col">
            <div 
                className="w-full bg-dark rounded-[20px]
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] z-50"
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
                            <a 
                                href={'#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="fill-light" name={"telegram"}/>
                            </a>
                            <a 
                                href={'#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="fill-light" name={"youtube"}/>
                            </a>
                            <a 
                                href={'#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="fill-light" name={"instagram"}/>
                            </a>
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