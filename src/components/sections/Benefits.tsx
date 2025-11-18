import { JSX } from "react";
import InfoCard from "../common/InfoCard";

import { benefitsData } from "@/data/benefitsData"

export default function Benefits(): JSX.Element {

    return (
        <section className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    The Value We Bring
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    Experience, insight, and authenticity — the core of everything we do.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-8 gap-y-8 gap-x-4">
                {benefitsData.map(card => (
                    <InfoCard 
                        key={card.id}
                        size={card.size}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </section>
    )
}