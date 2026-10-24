import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CountdownProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        timeLeft: number
}
