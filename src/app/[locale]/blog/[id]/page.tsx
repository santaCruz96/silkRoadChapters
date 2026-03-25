import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import Comments from "@/components/sections/Comments";
import Blogs from "@/components/sections/Blog";
import { getBlogs, getSpecificLecture } from "@/lib/api/blogs";
import { getComments } from "@/lib/api/comments";
import { LikesResponse } from '@/types/api/likes';
import { getLikes } from '@/lib/api/likes';
import { getFavorites } from '@/lib/api/favorites';
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';

const ENTITY_TYPE = 2;

export default async function BlogContent({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;

    const blogs = await getBlogs();
    const specificLecture = await getSpecificLecture(id);
    const filteredBlogs = blogs.filter(
        (blog) => blog.id !== specificLecture.id
    );
    const comments = await getComments(id, ENTITY_TYPE)
    
    const cookieStore = await cookies();
    const isAuthenticated = !!cookieStore.get(TOKEN_COOKIE_NAME)?.value;
    
    let likeInfo: LikesResponse | null = null;
    let isFavorite = false;
    if (isAuthenticated) {
        likeInfo = await getLikes(id, ENTITY_TYPE);
        const favorites = await getFavorites();
        isFavorite = favorites.some((item) => item.entityId === specificLecture.id);
    }

    return (
        <GeneralContainer>
            <Content 
                specificLecture={specificLecture} 
                isAuthenticated={isAuthenticated}
                likeInfo={likeInfo}
                isFavoriteServer={isFavorite}
            />
            <Comments 
                comments={comments} 
                id={id} 
                entityType={ENTITY_TYPE}
                isAuthenticated={isAuthenticated}
            />
            <Blogs blogs={filteredBlogs}/>
        </GeneralContainer>
    )
}