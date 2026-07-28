import GeneralContainer from "@/layouts/GeneralContainer";
import FreeLecturesNet from "@/components/modules/FreeLecturesNet";
import { getTranslations } from 'next-intl/server';
import { getFreeLectures, getFreeLecturesPlaylist } from "@/lib/api/freeLectures";
import { getPlaylists } from "@/lib/api/playlists";
import { Playlist } from "@/types/interfaces/Playlist.interface";

type Props = {
    searchParams: Promise<{ tab?: string; playlist?: string }>;
};

export default async function FreeLecturesCatalog({ searchParams }: Props) {
    const t = await getTranslations('Catalog.freeLectures');
    const { tab, playlist } = await searchParams;
    const isPlaylists = tab === 'playlists';

    const [data, playlists] = await Promise.all([
        playlist
            ? getFreeLecturesPlaylist(playlist)
            : isPlaylists
                ? getPlaylists(0)
                : getFreeLectures(),
        !playlist && !isPlaylists ? getPlaylists(0) : Promise.resolve(null),
    ]);

    const playlistIsEmpty = playlist
        ? false 
        : isPlaylists
            ? (data as Playlist[]).length === 0
            : (playlists ?? []).length === 0;

    return (
        <GeneralContainer>
            <div className="flex flex-col items-center gap-16 w-full">
                <h1 className="leading-12 sm:leading-19.25 font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] text-center text-dark">
                    {t('headTitle')}
                </h1>
                <FreeLecturesNet
                    lectures={data}
                    playlistIsEmpty={playlistIsEmpty}
                    page="freeLectures"
                    cardsPerPage={14}
                />
            </div>
        </GeneralContainer>
    )
}