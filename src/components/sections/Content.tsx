"use client";

import { usePathname } from 'next/navigation';
import DeatailsCard from "../common/DetailsCard";
import ContentCards from "../common/ContentCards";

export default function Content() {
    const pathname = usePathname();

    const isPaid = pathname.includes('/paid')
    const isBlog = pathname.includes('/blog')

    return (
        <section className="flex flex-col gap-16 w-full">
            <h1 className="font-bold text-[64px] tracking-[-0.01em] text-center text-dark">
                Stories from the Silk Road
            </h1>
            {!isBlog && <div className="rounded-[30px] w-full h-[677px] bg-image"></div>}
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-16 flex-1">
                    {!isBlog && 
                        <div className="flex gap-4">
                            <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                                Body_Text
                            </p>
                            <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                                Body_Text
                            </p>
                        </div>
                    }
                    <ContentCards numberOfCards={1}/>
                    <p className="font-medium text-[24px] leading-[160%] text-grey">
                        Body_Text_Medium
                    </p>
                    <div className="flex gap-4">
                        <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                            Body_Text
                        </p>
                        <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                            Body_Text
                        </p>
                    </div>
                    <ContentCards numberOfCards={5}/>
                    <p className="font-medium text-[24px] leading-[160%] text-grey">
                        Body_Text_Medium
                    </p>
                    <ContentCards numberOfCards={4}/>
                    <div className="flex gap-4">
                        <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                            Body_Text
                        </p>
                        <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                            Body_Text
                        </p>
                    </div>
                    <ContentCards numberOfCards={2}/>
                </div>
                <DeatailsCard isPaid={isPaid}/>
            </div>
        </section>
    )
}