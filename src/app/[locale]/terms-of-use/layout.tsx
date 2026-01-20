import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of use",
    description: "Terms of use",
};

export default function TermsOfUseLayout({
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