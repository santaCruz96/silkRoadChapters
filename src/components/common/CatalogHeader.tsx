import { CatalogHeaderProps } from "@/interfaces/CatalogHeader.props";
import Button from "./Button";
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function CatalogHeader({
    page,
}: CatalogHeaderProps) {

    const isMobile = useResponsiveStore(state => state.isMobile);

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
        <div 
            className={`${page !== 'account' && 
                'flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-0'
            }`}>
            <div 
                className={`flex flex-col gap-4 items-center lg:items-start
                    ${page !== 'account' && 'w-full sm:w-148'}`}
            >
                <h3 
                    className={`font-bold text-[36px] text-dark
                        ${page !== 'account' ? 'text-center lg:text-left' : 'text-center'}`}
                >
                    {title[page]}
                </h3>
                <p 
                    className={`font-medium text-[16px] leading-[160%] text-grey
                        ${page !== 'account' ? 'text-center lg:text-left' : 'text-center'}`}
                >
                    {text[page]}
                </p>
            </div>
            {page !== 'account' &&
                <div className="flex gap-4 w-full sm:w-auto">
                    <Button
                        color="dark"
                        size={isMobile ? "full" : "lg"}
                        form="round"
                        hover="primary"
                    >
                        Newest
                    </Button>
                    <Button
                        color="light"
                        size={isMobile ? "full" : "lg"}
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