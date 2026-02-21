import { redirect } from "next/navigation";

interface Props {
    searchParams: Promise<{ email?: string; token?: string }>;
}

export default async function ResetPasswordRedirect({ searchParams }: Props) {
    const { email, token } = await searchParams;

    const params = new URLSearchParams({
        ...(email && { email }),
        ...(token && { token }),
    });

    redirect(`/?${params.toString()}`);
}