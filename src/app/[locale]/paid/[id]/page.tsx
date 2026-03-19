import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import Comments from "@/components/sections/Comments";
import PaidLectures from "@/components/sections/PaidLectures";
import { getPaidLectures, getPurchasesLecture, getSpecificLecture } from "@/lib/api/paidLectures";
import { getComments } from "@/lib/api/comments";
import { LikesResponse } from '@/types/api/likes';
import { PurchasesLecture } from '@/types/api/purchasesLecture';
import { getLikes } from '@/lib/api/likes';
import { getFavorites } from '@/lib/api/favorites';
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';

const ENTITY_TYPE = 1;

export default async function PaidLecture({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;

    const lectures = await getPaidLectures();
    const specificLecture = await getSpecificLecture(id);
    const comments = await getComments(id, ENTITY_TYPE);

    const cookieStore = await cookies();
    const isAuthenticated = !!cookieStore.get(TOKEN_COOKIE_NAME)?.value;

    let likeInfo: LikesResponse | null = null;
    let purchasesLectures: PurchasesLecture[] | null = null;
    let isFavorite = false;
    if (isAuthenticated) {
        likeInfo = await getLikes(id, ENTITY_TYPE);
        const favorites = await getFavorites();
        isFavorite = favorites.some((item) => item.entityId === specificLecture.id);
        purchasesLectures = await getPurchasesLecture();
    }

    return (
        <GeneralContainer>
            <Content 
                specificLecture={specificLecture} 
                isAuthenticated={isAuthenticated} 
                likeInfo={likeInfo}
                isFavoriteServer={isFavorite}
                isBought={purchasesLectures?.some(ul => ul.lectureId === specificLecture.id)}
            />
            <Comments 
                comments={comments} 
                id={id} 
                entityType={ENTITY_TYPE}
                isAuthenticated={isAuthenticated}
            />
            <PaidLectures lectures={lectures} purchasesLectures={purchasesLectures}/>
        </GeneralContainer>
    )
}