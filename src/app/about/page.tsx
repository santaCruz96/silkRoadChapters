import GeneralContainer from "@/layouts/GeneralContainer";
import AboutAuthor from "@/components/sections/AboutAuthor";
import BlogSlider from "@/components/modules/BlogSlider";

export default function About() {
    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16 w-full">
                <h1 className="leading-12 sm:leading-[77px] font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    Author’s Welcome
                </h1>
                <AboutAuthor/>
            </div>
            <div className="flex flex-col gap-16 items-center w-full">
                <div className="flex flex-col sm:w-148 items-center">
                    <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                        In Focus
                    </h3>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                        Portraits, travels, and fleeting moments that tell my story.               
                    </p>
                </div>
                <BlogSlider/>
            </div>
        </GeneralContainer>
    )
}