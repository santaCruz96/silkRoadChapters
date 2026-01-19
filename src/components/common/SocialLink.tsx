import Icon from "@/icons/Icon"
import { SocialLinkProps } from "@/types/props/SocialLink.props"

export default function SocialLink({location, route, iconName}: SocialLinkProps) {

    const isLocation: Record<string, string> = {
        menu: 'fill-dark',
        footer: 'fill-light'
    }

    return (
        <a 
            href={route}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className={isLocation[location]} name={iconName}/>
        </a>
    )
}