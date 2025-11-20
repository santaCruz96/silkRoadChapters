import { JSX } from "react";
import { PaidLecturesNetProps } from "@/interfaces/PaidLecturesNet.props";
import Button from "../common/Button";
import PaidLectureCard from "../common/PaidLectureCard";

export default function PaidLecturesNet({page}: PaidLecturesNetProps ): JSX.Element {

    const title: Record<string, string> = {
        catalog: 'Stories from the Silk Road',
        account: 'Your Exploration Path'
    } 

    const text: Record<string, string> = {
        catalog: 'Explore reflections on the ancient routes — their history, culture, and the connections that bridge past and present.',
        account: 'All lectures you’ve unlocked — ready to revisit anytime, from any device.'
    } 

    return (
        <section className="flex flex-col gap-16 w-full">
            <div className={`${page === 'catalog' && 'flex items-start justify-between'}`}>
                <div 
                    className={`flex flex-col gap-4
                        ${page === 'catalog' && 'w-148'}`}
                >
                    <h3 
                        className={`font-bold text-[36px] text-dark
                            ${page === 'catalog' ? 'text-left' : 'text-center'}`}
                    >
                        {title[page]}
                    </h3>
                    <p 
                        className={`font-medium text-[16px] leading-[160%] text-grey
                            ${page === 'catalog' ? 'text-left' : 'text-center'}`}
                    >
                        {text[page]}
                    </p>
                </div>
                {page === 'catalog' &&
                    <div className="flex gap-4">
                        <Button
                            color="dark"
                            size="lg"
                            form="round"
                            hover="primary"
                        >
                            Newest
                        </Button>
                        <Button
                            color="light"
                            size="lg"
                            form="round"
                            hover="secondary"
                            shadow
                        >
                            Popular
                        </Button>
                    </div>
                }
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-8">
                {Array.from({ length: 4 }).map((_, index) => (
                    <PaidLectureCard 
                        key={index} 
                        isActive
                        isBought={page === 'account'}
                    />
                ))}
            </div>
        </section>
    )
}