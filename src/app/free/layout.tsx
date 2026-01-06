import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free lecture",
    description: "Free lecture",
};

export default function FreeLectureLayout({
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