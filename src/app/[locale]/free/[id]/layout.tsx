import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getSpecificLecture } from "@/lib/api/freeLectures";

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

    const lecture = await getSpecificLecture(id);

    const title =
        locale === "ru"
            ? (lecture.titleRu ?? lecture.titleEn ?? "Бесплатная лекция")
            : (lecture.titleEn ?? lecture.titleRu ?? "Free lecture");

    return {
        title
    }
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