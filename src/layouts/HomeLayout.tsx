import { HomeLayoutProps } from "@/interfaces/HomeLayout.props";

export default function HomeLayout({children}: HomeLayoutProps) {
    return (
        <div className="sticky rounded-t-[30px] sm:rounded-t-[80px] bg-background flex justify-center overflow-x-clip">
            <div 
                className="container mt-4 mb-30 sm:mt-20 sm:mb-40 w-[calc(100%-32px)]
                    md:w-[calc(100%-64px)] max-w-300 flex flex-col items-center gap-30 sm:gap-40"
            >
                {children}
            </div>
        </div>
    )
}