import { GeneralContainerProps } from "@/interfaces/GeneralContainer.props";

export default function GeneralContainer({
    children, 
    indentTop = 'big'
}: GeneralContainerProps) {
    
    const containerIndentTop: Record<string, string> = {
        big: 'mt-64',
        medium: 'mt-42',
        small: 'mt-20'
    }

    return (
        <div className={`container ${containerIndentTop[indentTop]} mb-40 max-w-300 flex flex-col items-center gap-40`}>
            {children}
        </div>
    )
}