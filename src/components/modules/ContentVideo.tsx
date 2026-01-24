import { ContentVideoProps } from "@/types/props/ContentVideo.props";
import Button from "../common/Button";
import { usePush } from "@/store/usePushStore";
import {useTranslations} from 'next-intl';

export default function ContentVideo({image}: ContentVideoProps) {
    const { addPush } = usePush();
    const t = useTranslations('Push');

    return (
        <div 
            className="relative rounded-[30px] w-full h-82 lg:h-169.25 
                bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${image})`}}
            onClick={() => addPush('info', t('video'))}
        >
            <div 
                className='cursor-pointer absolute flex items-center 
                    justify-center w-full h-full bg-black/20'
            >
                <Button
                    color="lightGrey"
                    size="sm"
                    form="square"
                    icon="lock"
                    iconSize="big"
                    hover="contentButton"
                />
            </div>
        </div>
    )
}