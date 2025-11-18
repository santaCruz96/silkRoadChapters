import { JSX } from "react";

export default function Instagram(): JSX.Element {
    return (
        <section className="flex flex-col gap-16 items-center w-full">
            <div className="flex flex-col w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    Follow Us Along the Silk Road
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    Discover how the Silk Road looks through the lenses of our community — follow us on Instagram 
                    <a 
                        href="https://www.instagram.com/silk_road_chapters/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > @silk_road_chapters 
                    </a>             
                </p>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full h-110 rounded-[20px] bg-image"></div>
                    <div className="w-full h-72 rounded-[20px] bg-image"></div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full h-72 rounded-[20px] bg-image"></div>
                    <div className="w-full h-[439px] rounded-[20px] bg-image"></div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full h-110 rounded-[20px] bg-image"></div>
                    <div className="w-full h-72 rounded-[20px] bg-image"></div>
                </div>
            </div>
        </section>
    )
}