import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import Comments from "@/components/sections/Comments";
import Blogs from "@/components/sections/Blog";
import { getBlogs, getSpecificLecture } from "@/lib/api/blogs";
import { getComments } from "@/lib/api/comments";

const ENTITY_TYPE = 2;
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';

export default async function BlogContent({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const blogs = await getBlogs();
    const { id } = await params;
    const specificLecture = await getSpecificLecture(id);
    const comments = await getComments(id, ENTITY_TYPE)
    const cookieStore = await cookies();
    const isAuthenticated = !!cookieStore.get(TOKEN_COOKIE_NAME)?.value;

    return (
        <GeneralContainer>
            <Content specificLecture={specificLecture} isAuthenticated={isAuthenticated}/>
            <Comments 
                comments={comments} 
                id={id} 
                entityType={ENTITY_TYPE}
                isAuthenticated={isAuthenticated}
            />
            <Blogs blogs={blogs}/>
        </GeneralContainer>
    )
}