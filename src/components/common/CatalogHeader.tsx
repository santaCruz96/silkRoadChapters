import { CatalogHeaderProps } from "@/interfaces/CatalogHeader.props";
import Button from "./Button";

export default function CatalogHeader({
    page,
}: CatalogHeaderProps) {

    const title: Record<string, string> = {
        freeLectures: 'Learn for Free',
        paidLectures: 'Stories from the Silk Road',
        blog: 'Stories from the Silk Road',
        account: 'Your Exploration Path'
    } 

    const text: Record<string, string> = {
        freeLectures: 'Discover the Silk Road through free talks by a researcher and traveler.',
        paidLectures: 'Explore reflections on the ancient routes — their history, culture, and the connections that bridge past and present.',
        blog: 'Explore reflections on the ancient routes — their history, culture, and the connections that bridge past and present.',
        account: 'All lectures you’ve unlocked — ready to revisit anytime, from any device.'
    } 

    return (
        <div className={`${page !== 'account' && 'flex items-start justify-between'}`}>
            <div 
                className={`flex flex-col gap-4
                    ${page !== 'account' && 'w-148'}`}
            >
                <h3 
                    className={`font-bold text-[36px] text-dark
                        ${page !== 'account' ? 'text-left' : 'text-center'}`}
                >
                    {title[page]}
                </h3>
                <p 
                    className={`font-medium text-[16px] leading-[160%] text-grey
                        ${page !== 'account' ? 'text-left' : 'text-center'}`}
                >
                    {text[page]}
                </p>
            </div>
            {page !== 'account' &&
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
    )
}