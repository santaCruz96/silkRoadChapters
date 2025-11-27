import { JSX } from "react";
import Icon from "@/icons/Icon";
import Button from "./Button";

export default function SavedLecturesItem():JSX.Element {
    return (
        <div
            className="flex items-start justify-between w-full border-t border-grey 
                py-8 last:border-b"
        >
            <div className="flex gap-4 h-full">
                <div className="w-72 h-40.5 bg-image rounded-xl"></div>
                <div className="flex h-full flex-col justify-between">
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
            <Button
                color="red"
                size="xs"
                form="square"
                icon="trashBin"
                shadow
                hover="delete"
            />
        </div>
    )
}