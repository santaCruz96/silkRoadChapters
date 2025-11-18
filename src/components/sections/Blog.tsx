import { JSX } from "react";
import BlogSlider from "../modules/BlogSlider";

export default function Blog(): JSX.Element {
    return (
        <section className="flex flex-col gap-16 items-center">
            <div className="flex flex-col w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    Stories from the Silk Road
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    Explore reflections on the ancient routes — their history, culture, <br />and the connections that bridge past and present.                
                </p>
            </div>
            <BlogSlider/>
        </section>
    )
}