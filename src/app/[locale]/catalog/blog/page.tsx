import GeneralContainer from "@/layouts/GeneralContainer";
import BlogNet from "@/components/modules/BlogNet";
import {useTranslations} from 'next-intl';

export default function BlogCatalog() {
    const t = useTranslations('Catalog.blog');

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="leading-12 sm:leading-[77px] font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    {t('headTitle')}
                </h1>
                <BlogNet
                    page="blog"
                    cardsPerPage={8}
                />
            </div>
        </GeneralContainer>
    )
}