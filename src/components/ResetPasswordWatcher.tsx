"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useModal } from "@/store/useModalStore";

export default function ResetPasswordWatcher() {
    const searchParams = useSearchParams();
    const { open } = useModal();

    const email = decodeURIComponent(searchParams.get("email") ?? "");
    const token = searchParams.get("token") ?? "";

    useEffect(() => {
        if (email && token) {
            open("resetPassword");
        }
    }, [email, open, token]);

    return null;
}