import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Payment",
    description: "Payment",
};

export default function PaymentLayout({
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