import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paid lecture",
    description: "Paid lecture",
};

export default function PaidLectureLayout({
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