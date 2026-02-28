import GeneralContainer from "@/layouts/GeneralContainer";
import BlogNet from "@/components/modules/BlogNet";
import { getTranslations } from "next-intl/server";
import { getBlogs } from "@/lib/api/blogs";

export default async function BlogCatalog() {
    const t = await getTranslations('Catalog.blog');
    const blogs = await getBlogs();

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="leading-12 sm:leading-[77px] font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    {t('headTitle')}
                </h1>
                <BlogNet
                    blogs={blogs}
                    page="blog"
                    cardsPerPage={8}
                />
            </div>
        </GeneralContainer>
    )
}