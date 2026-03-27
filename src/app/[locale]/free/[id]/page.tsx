import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import FreeLectures from "@/components/sections/FreeLectures";
import Comments from "@/components/sections/Comments";
import { getFreeLectures, getSpecificLecture } from "@/lib/api/freeLectures";
import { getComments } from "@/lib/api/comments";
import { LikesResponse } from '@/types/api/likes';
import { getLikes } from '@/lib/api/likes';
import { getFavorites } from '@/lib/api/favorites';
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';
import { FreeLecture } from '@/types/interfaces/FreeLecture.interface';

const ENTITY_TYPE = 0;

export default async function FreeLectureContent({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;

    if (!id || id === "false") {
        notFound();
    }

    let specificLecture: FreeLecture;
    try {
        specificLecture = await getSpecificLecture(id);
    } catch {
        notFound();
    }

    const lectures = await getFreeLectures();
    const filteredLectures = lectures.filter(
        (lecture) => lecture.id !== specificLecture.id
    );
    const comments = await getComments(id, ENTITY_TYPE);
    
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
            <FreeLectures lectures={filteredLectures}/>
        </GeneralContainer>
    )
}