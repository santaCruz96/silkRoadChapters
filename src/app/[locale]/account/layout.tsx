import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Account",
    description: "Account",
};

export default function AccountLayout({
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