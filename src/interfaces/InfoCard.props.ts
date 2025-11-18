import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IconName } from "@/icons/iconMap";

export interface InfoCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        size: string,
        icon: IconName,
        title: string,
        text: string
}