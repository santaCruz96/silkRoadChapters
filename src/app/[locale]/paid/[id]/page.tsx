import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import Comments from "@/components/sections/Comments";
import PaidLectures from "@/components/sections/PaidLectures";
import { getPaidLectures, getSpecificLecture } from "@/lib/api/paidLectures";
import { getComments } from "@/lib/api/comments";

const ENTITY_TYPE = 1;
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';

export default async function PaidLecture({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const lectures = await getPaidLectures();
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
            <PaidLectures lectures={lectures}/>
        </GeneralContainer>
    )
}