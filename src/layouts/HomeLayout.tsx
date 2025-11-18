import { JSX } from "react";
import { HomeLayoutProps } from "@/interfaces/HomeLayout.props";
import GeneralContainer from "./GeneralContainer";

export default function HomeLayout({children}: HomeLayoutProps): JSX.Element {
    return (
        <div className="sticky rounded-t-[80px] bg-background flex justify-center">
            <GeneralContainer indentTop="small">
                {children}
            </GeneralContainer>
        </div>
    )
}