import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paid Lectures",
    description: "Paid Lectures",
};

export default function CatalogPaidLayout({
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