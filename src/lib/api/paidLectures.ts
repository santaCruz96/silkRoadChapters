'use server'

import { ApiResponse, PaidLecture } from "@/types/interfaces/PaidLecture.interface";
import { PurchasesLecture } from "@/types/api/purchasesLecture";
import { PlaybackResponse, PlaybackResult } from "@/types/api/playback";
import { API_URL } from "@/config/constants";
import { fetchWithAuth } from "./apiClient";
import { notFound } from "next/navigation";

export const getPaidLectures = async (): Promise<PaidLecture[]> => {
    const resAllLectures = await fetch(`${API_URL}/premium-lectures?includeAnnouncements=true`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!resAllLectures.ok) {
        throw new Error(`Failed to fetch lectures: ${resAllLectures.status}`);
    }

    const allLectures = await resAllLectures.json();

    const res = await fetch(`${API_URL}/premium-lectures?includeAnnouncements=true&pageSize=${allLectures.totalCount}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: ApiResponse = await res.json();
    
    return data.items.map((lecture) => ({
        ...lecture,
        serverTime: lecture.serverTime ?? data.serverTime,
    }));
};

export const getSpecificLecture = async (id: string, includeAnnouncements = false): Promise<PaidLecture> => {
    const query = includeAnnouncements ? '?includeAnnouncements=true' : '';
    const url = `/premium-lectures/${id}${query}`;
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res: Response;

    try {
        res = await fetchWithAuth(url, options);
    } catch {
        res = await fetch(`${API_URL}${url}`, options);
    }

    if (!res.ok) {
        throw new Error(`Failed to fetch lecture: ${res.status}`);
    }

    const data: PaidLecture = await res.json();

    return data;
};

export const getPlayback = async (id: string): Promise<PlaybackResult> => {
    try {
        const response = await fetchWithAuth(`/premium-lectures/${id}/playback`);

        if (response.ok) {
            const { embedUrl }: PlaybackResponse = await response.json();
            return { status: 'ok', embedUrl };
        }

        if (response.status === 401) return { status: 'unauthorized' };
        if (response.status === 403) return { status: 'noAccess' };

        return { status: 'error' };
    } catch {
        return { status: 'unauthorized' };
    }
};

export const checkoutPrice = async (id: string) => {
    const response = await fetchWithAuth(`/premium-lectures/${id}/checkout-price`);
        
    if (!response.ok) {
        throw new Error('Failed to fetch price');
    }
    
    return response.json();
}

export const getPurchasesLecture = async(): Promise<PurchasesLecture[]> => {
    const response = await fetchWithAuth(`/user/profile/purchases`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch lectures: ${response.status}`);
    }

    const data: PurchasesLecture[] = await response.json();
    
    return data;
}

export const getPaidLecturesPlaylist = async (id: string): Promise<PaidLecture[]> => {
    const resAllLectures = await fetch(`${API_URL}/playlists/${id}/items`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!resAllLectures.ok) {
        console.log(`Failed to fetch lectures: ${resAllLectures.status}`)
        notFound();
    }

    const allLectures = await resAllLectures.json();

    const res = await fetch(`${API_URL}/playlists/${id}/items?pageSize=${allLectures.totalCount}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: ApiResponse = await res.json();
    
    return data.items;
};