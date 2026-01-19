import { GeneralContainerProps } from "@/types/props/GeneralContainer.props";

export default function GeneralContainer({
    children, 
    indentTop = 'big'
}: GeneralContainerProps) {
    
    const containerIndentTop: Record<string, string> = {
        big: 'mt-30 sm:mt-64',
        medium: 'mt-42',
        small: 'mt-4 sm:mt-20'
    }

    return (
        <div className={`container ${containerIndentTop[indentTop]} mb-30 sm:mb-40 w-[calc(100%-32px)]
            md:w-[calc(100%-64px)] max-w-300 flex flex-col items-center gap-30 sm:gap-40`}
        >
            {children}
        </div>
    )
}