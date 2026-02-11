import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Successful Register",
    description: "Successful Register",
};

export default function SuccessfulRegisterLayout({
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