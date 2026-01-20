import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Lectures",
    description: "Free Lectures",
};

export default function CatalogFreeLayout({
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