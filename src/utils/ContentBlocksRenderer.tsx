import { useLocale } from "next-intl";
import ContentCards from "@/components/common/ContentCards";
import { ContentBlock } from "@/types/interfaces/FreeLecture.interface";

function renderContentBlock(block: ContentBlock, locale: string) {
    const text = locale === "ru" ? block.textRu : block.textEn;
    const textRight = locale === "ru" ? block.textRightRu : block.textRightEn;

    switch (block.layout) {
        case "TextOnly":
        return (
            <p
                key={block.id}
                className="font-medium text-[24px] leading-[160%] text-grey"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );

        case "TwoColumnText":
        return (
            <div key={block.id} className="flex flex-col sm:flex-row gap-4">
            <p
                className="w-full font-medium text-[16px] leading-[160%] text-grey"
                dangerouslySetInnerHTML={{ __html: text }}
            />
            <p
                className="w-full font-medium text-[16px] leading-[160%] text-grey"
                dangerouslySetInnerHTML={{ __html: textRight }}
            />
            </div>
        );

        case "SingleImage":
        return <ContentCards key={block.id} numberOfCards={1} images={block.images} />;

        case "TwoImages":
        return <ContentCards key={block.id} numberOfCards={2} images={block.images} />;

        case "Gallery":
        if (block.images.length === 4) {
            return <ContentCards key={block.id} numberOfCards={4} images={block.images} />;
        }
        if (block.images.length === 5) {
            return <ContentCards key={block.id} numberOfCards={5} images={block.images} />;
        }
        return null;

        default:
        return null;
    }
}

export default function ContentBlocksRenderer({ blocks }: { blocks: ContentBlock[] }) {
    const locale = useLocale();

    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="flex flex-col gap-8">
            {blocks
                .sort((a, b) => a.order - b.order)
                .map((block) => renderContentBlock(block, locale))}
        </div>
    );
}