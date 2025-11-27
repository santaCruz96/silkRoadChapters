import { JSX } from "react";
import GeneralContainer from "@/layouts/GeneralContainer";
import BlogNet from "@/components/modules/BlogNet";

export default function FreeLectures():JSX.Element {
    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 className="leading-[77px] font-bold text-[64px] tracking-[-0.01em] text-center text-dark">
                    Adding New Layers
                </h1>
                <BlogNet
                    page="blog"
                    cardsPerPage={8}
                />
            </div>
        </GeneralContainer>
    )
}