"use client";

import { iconComponentMap, IconName } from './iconMap'; 

type IconProps = {
    name: IconName; 
    className?: string;
};

export default function Icon({ 
    name, 
    className, 
    ...props 
}: IconProps) {
    const IconComponent = iconComponentMap[name];

    if (!IconComponent) {
        console.warn(`Icon with name "${name}" not found in iconMap.`);
        return <svg className={className} {...props} />;
    }

    return <IconComponent className={className} {...props} />;
}