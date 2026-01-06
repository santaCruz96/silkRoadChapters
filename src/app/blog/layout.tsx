import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog",
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center bg-background overflow-x-clip">
            {children}
        </div>
    );
}