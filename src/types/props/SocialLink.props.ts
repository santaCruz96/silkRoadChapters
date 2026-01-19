import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

import { IconName } from "@/icons/iconMap";

export interface SocialLinkProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        location: string,
        route: string,
        iconName: IconName
}