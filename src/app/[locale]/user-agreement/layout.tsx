import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User agreement",
    description: "User agreement",
};

export default function UserAgreementLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center bg-background">
            {children}
        </div>
    );
}