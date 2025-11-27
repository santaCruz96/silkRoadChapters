import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal",
    description: "Legal",
};

export default function LegalLayout({
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