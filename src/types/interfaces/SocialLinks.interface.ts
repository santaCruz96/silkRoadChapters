import { IconName } from "@/icons/iconMap";

interface ISocialLinkItem {
    id: number;
    route: string;
    iconName: IconName;
}

export interface ISocialLinks {
    menu: ISocialLinkItem[];
    footer: ISocialLinkItem[];
}