import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Public offer",
    description: "Public offer",
};

export default function PublicOfferLayout({
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