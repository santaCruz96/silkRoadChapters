import { BlogCardProps } from "@/types/props/BlogCard.props";
import Image from 'next/image';
import Icon from "@/icons/Icon";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function BlogCard({
    blog, 
    isActive, 
    isCarousel, 
    grid, 
    ...props
}: BlogCardProps) {

    const detailsMap = Object.fromEntries(
        (blog?.details || []).map(({ key, value }) => [key, value])
    );

    const locale = useLocale();
    const currentLocale = locale === 'ru' ? 'Ru' : 'En';
    const title = locale === 'ru' ? blog.titleRu : blog.titleEn;

    const location = detailsMap[`location${currentLocale}`] || '';

    const size = () => {
        if (isCarousel) {
            return 'w-72 h-[459px] mx-2 rounded-[20px] lg:h-[505px] lg:w-4xl lg:rounded-[30px] lg:-mx-7'
        } else {
            return 'w-full h-[523px] lg:h-full rounded-[20px]'
        }
    }

    const fontSize = () => {
        if (isCarousel) {
            return 'text-[32px]'
        } else {
            return 'text-[24px]'
        }
    }

    return (
        <Link 
            href={isActive ? `/blog/${blog.id}` : ``}
            className={`flex-[0_0_auto] ${grid}`} 
            {...props}
        >
            <div 
                className={`relative card__selector min-h-83.25 ${size()} overflow-hidden
                    flex flex-col select-none py-8 px-4 lg:p-8 cursor-pointer`}
            >   
                <div className="absolute top-0 left-0 w-full h-full transition z-10
                    duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[rgba(0,0,0,0.1)]"
                />
                <Image src={blog.imageLink} alt="" fill priority className="object-cover" />
                {isActive && 
                    <div className="flex flex-col justify-between h-full z-10 pointer-events-none">
                        <p className={`font-semibold ${fontSize()} text-light`}>{title}</p>
                        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                            {location ? 
                                <div className="flex items-center gap-2">
                                    <Icon name="mapPoint" className="fill-light"/>
                                    <p className="italic font-normal text-[16px] capitalize text-light">{location}</p>
                                </div>
                                :
                                <div className="flex items-center gap-2"/>
                            }
                            <div className="flex items-center gap-2">
                                <Icon name="eye" className="fill-light"/>
                                <p className="font-normal text-[16px] uppercase text-light">{blog.viewsCount}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Link>
    )
}