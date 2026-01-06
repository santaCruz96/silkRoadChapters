"use client";

import Icon from "@/icons/Icon";
import Button from "./Button";
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function SavedLecturesItem() {
    const isMobile = useResponsiveStore(state => state.isMobile);

    return (
        <div
            className="relative flex items-start justify-between w-82 sm:w-full border-t border-grey 
                py-8 last:border-b"
        >
            <div className="flex w-full sm:w-auto sm:h-full flex-col sm:flex-row gap-4">
                <div className="w-full h-[185px] sm:w-72 sm:h-40.5 bg-image rounded-xl"></div>
                <div className="flex sm:h-full flex-col-reverse sm:flex-col gap-4 sm:gap-0 justify-between">
                    <div className="flex flex-col gap-2.5">
                        <p className="font-semibold text-[18px] leading-[21px] text-dark">
                            Card_Title_Small
                        </p>
                        <p className="font-normal text-[14px] leading-[160%] text-grey">
                            Card_Body
                        </p>
                    </div>
                    <div className="flex gap-[89px]">
                        <div className="flex items-center gap-2">
                            <Icon className="fill-dark" name="eye"/>
                            <p className="font-normal text-[16px] uppercase text-dark">
                                454
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon className="fill-dark" name="like"/>
                            <p className="font-normal text-[16px] uppercase text-dark">
                                454
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-12 right-4 sm:static">
                <Button
                    color={isMobile ? "lightGreyDelete" : "red"}
                    size="sm"
                    form="square"
                    icon="trashBin"
                    iconSize="big"
                    shadow={!isMobile}
                    hover="delete"
                />
            </div>
        </div>
    )
}