import { redirect } from "next/navigation";

interface Props {
    searchParams: { email?: string; token?: string };
}

export default function ResetPasswordRedirect({ searchParams }: Props) {
    const params = new URLSearchParams({
        ...(searchParams.email && { email: searchParams.email }),
        ...(searchParams.token && { token: searchParams.token }),
    });

    redirect(`/?${params.toString()}`);
}