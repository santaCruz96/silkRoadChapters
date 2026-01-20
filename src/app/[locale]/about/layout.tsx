import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About",
};

export default function AboutLayout({
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