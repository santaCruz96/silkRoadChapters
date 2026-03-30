import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getSpecificLecture } from "@/lib/api/paidLectures";

export async function generateMetadata(
{
    params
}: {
    params: Promise<{ locale: string; id: string }>;
}
): Promise<Metadata> {
    const { locale, id } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    if (!id || id === "false") {
        notFound();
    }

    try {
        const lecture = await getSpecificLecture(id);
        const titleText =
            locale === "ru"
                ? (lecture.titleRu ?? lecture.titleEn ?? "Бесплатная лекция")
                : (lecture.titleEn ?? lecture.titleRu ?? "Free lecture");

        return { title: titleText + ' | Silk Road Chapters' };
    } catch {
        notFound();
    }
};

export default function PaidLectureLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    notFound();
    return (
        <div className="flex justify-center bg-background overflow-x-clip">
            {children}
        </div>
    );
}