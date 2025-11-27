import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ",
    description: "FAQ",
};

export default function FAQLayout({
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