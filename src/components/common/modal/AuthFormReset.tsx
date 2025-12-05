import { useState } from "react";
import Button from "../Button";

export default function AuthFormReset() {
    const [isSended, setIsSended] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setIsSended(true);    
    };

    if (isSended) {
        return (
            <div className="flex flex-col gap-[121px]">
                <form action="#" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <input
                            type="password"
                            className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                                placeholder:font-medium placeholder:text-image focus:outline-none"
                            placeholder="New Password"
                        />
                        <input
                            type="password"
                            className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                                shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                                placeholder:font-medium placeholder:text-image focus:outline-none"
                            placeholder="Repeat your password"
                        />
                    </div>
                    <Button
                        type="submit"
                        color="dark"
                        size="full"
                        form="round"
                        icon="squareArrowRight"
                        hover="primary"    
                    >
                        Sign In
                    </Button>
                </form>
                <p className="font-normal text-[14px] leading-[160%] text-grey">
                    Enter your new password and confirm it below. Once submitted, you’ll be automatically signed in.
                </p>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-[197px]">
                <form action="#" className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="rounded-xl px-3 py-[22px] h-[60px] font-medium text-[12px] text-dark
                            shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)] bg-light 
                            placeholder:font-medium placeholder:text-image focus:outline-none"
                        placeholder="Email"
                    />
                    <Button
                        type="submit"
                        color="dark"
                        size="full"
                        form="round"
                        icon="multipleForward"
                        hover="primary"    
                    >
                        Send
                    </Button>
                </form>
                <p className="font-normal text-[14px] leading-[160%] text-grey">
                    We’ll send a recovery link to your email. Check your inbox and follow the instructions to reset your password.
                </p>
            </div>
        )
    }
}