import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import FreeLectures from "@/components/sections/FreeLectures";
import Comments from "@/components/sections/Comments";
import { getFreeLectures, getSpecificLecture } from "@/lib/api/freeLectures";
import { getComments } from "@/lib/api/comments";

const ENTITY_TYPE = 0;
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';

export default async function FreeLectureContent({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const lectures = await getFreeLectures();
    const { id } = await params;
    const specificLecture = await getSpecificLecture(id);
    const comments = await getComments(id, ENTITY_TYPE);
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
            <FreeLectures lectures={lectures}/>
        </GeneralContainer>
    )
}