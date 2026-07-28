'use server'

import { ApiResponse, Playlist } from "@/types/interfaces/Playlist.interface";
import { API_URL } from "@/config/constants";

export const getPlaylists = async (contentType: number | string): Promise<Playlist[]> => {
    const resAllPlaylists = await fetch(`${API_URL}/playlists?contentType=${contentType}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!resAllPlaylists.ok) {
        throw new Error(`Failed to fetch playlists: ${resAllPlaylists.status}`);
    }

    const allPlaylists = await resAllPlaylists.json();

    const res = await fetch(`${API_URL}/playlists?contentType=${contentType}&pageSize=${allPlaylists.totalCount}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: ApiResponse = await res.json();
    
    return data.items;
};

export const getSpecificPlaylist = async (id: string): Promise<Playlist> => {
    const res = await fetch(`${API_URL}/playlists/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch playlist: ${res.status}`);
    }

    const data: Playlist = await res.json();

    return data;
};