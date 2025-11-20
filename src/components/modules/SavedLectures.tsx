import { JSX } from "react";

export default function SavedLectures(): JSX.Element {
    return (
        <section className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 w-148">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    Saved for Later
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    A collection of lectures, stories, and materials you’ve marked to return to — your own Silk Road of inspiration.
                </p>
            </div>
            <div className="flex flex-col">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-start justify-between w-full"
                    >
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}