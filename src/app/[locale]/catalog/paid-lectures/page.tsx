import { cookies } from 'next/headers';
import GeneralContainer from "@/layouts/GeneralContainer";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import { getTranslations } from 'next-intl/server';
import { getPaidLectures, getPurchasesLecture, getPaidLecturesPlaylist } from "@/lib/api/paidLectures";
import { getPlaylists } from "@/lib/api/playlists";
import { Playlist } from "@/types/interfaces/Playlist.interface";
import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';
import { PurchasesLecture } from '@/types/api/purchasesLecture';

type Props = {
    searchParams: Promise<{ tab?: string; playlist?: string }>;
};

export default async function PaidLecturesCatalog({ searchParams }: Props) {
    const t = await getTranslations('Catalog.paidLectures');
    const { tab, playlist } = await searchParams;
    const isPlaylists = tab === 'playlists';

    const [data, playlists] = await Promise.all([
        playlist
            ? getPaidLecturesPlaylist(playlist)
            : isPlaylists
                ? getPlaylists(1)
                : getPaidLectures(),
        !playlist && !isPlaylists ? getPlaylists(1) : Promise.resolve(null),
    ]);

    const playlistIsEmpty = playlist
        ? false 
        : isPlaylists
            ? (data as Playlist[]).length === 0
            : (playlists ?? []).length === 0;

    const cookieStore = await cookies();
    const isAuthenticated = !!cookieStore.get(TOKEN_COOKIE_NAME)?.value;

    let purchasesLectures: PurchasesLecture[] | null = null;

    if (isAuthenticated) {
        purchasesLectures = await getPurchasesLecture();
    }

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16 w-full">
                <h1 
                    className="leading-12 sm:leading-19.25 font-bold text-[40px] max-w-180
                        sm:text-[64px] tracking-[-0.01em] text-center text-dark"
                >
                    {t('headTitle')}
                </h1>
                <PaidLecturesNet
                    lectures={data}
                    page="paidLectures"
                    playlistIsEmpty={playlistIsEmpty}
                    cardsPerPage={8}
                    purchasesLectures={purchasesLectures}
                />
            </div>
        </GeneralContainer>
    )
}