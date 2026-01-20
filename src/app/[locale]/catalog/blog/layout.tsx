import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catalog Blog",
    description: "Catalog Blog",
};

export default function CatalogBlogLayout({
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