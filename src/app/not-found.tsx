import Button from "@/components/common/Button"
import GeneralContainer from "@/layouts/GeneralContainer"
import Image from "next/image"

export default function NotFoundPage() {
    return (
        <div className="flex justify-center bg-background">
            <GeneralContainer indentTop="medium">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-4 font-bold text-[64px] leading-[76px] tracking-[-0.01em] text-center text-dark">
                        Oops... Lost your way?
                    </h1>
                    <p className="mb-16 font-medium text-[16px] leading-[160%] text-center text-grey">
                        Don’t worry — let’s get you back on the right path.
                    </p>
                    <Image
                        src="/notFoundPic.png"
                        alt="Not Found"
                        width={291}
                        height={410}
                        loading="eager"
                        className="mb-16 w-[291px] h-[410px]"
                    />
                    <Button
                        color="dark"
                        size="xl"
                        form="round"
                        icon="squareArrowLeft"
                        hover="primary"
                    >
                        Return
                    </Button>
                </div>
            </GeneralContainer>
        </div>
    )
}