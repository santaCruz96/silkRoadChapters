import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface MenuItemProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        route: string,
        label: string
}