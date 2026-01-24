import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Successful Payment",
    description: "Successful Payment",
};

export default function SuccessfulPaymentLayout({
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