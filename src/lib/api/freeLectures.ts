'use server'

import { ApiResponse, FreeLecture } from "@/types/interfaces/FreeLecture.interface";
import { API_URL } from "@/config/constants";
import { notFound } from "next/navigation";

export const getFreeLectures = async (): Promise<FreeLecture[]> => {
    const resAllLectures = await fetch(`${API_URL}/free-lectures`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!resAllLectures.ok) {
        throw new Error(`Failed to fetch lectures: ${resAllLectures.status}`);
    }

    const allLectures = await resAllLectures.json();

    const res = await fetch(`${API_URL}/free-lectures?pageSize=${allLectures.totalCount}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: ApiResponse = await res.json();
    
    return data.items;
};

export const getSpecificLecture = async (id: string): Promise<FreeLecture> => {
    const res = await fetch(`${API_URL}/free-lectures/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch lecture: ${res.status}`);
    }

    const data: FreeLecture = await res.json();

    return data;
};

export const getFreeLecturesPlaylist = async (id: string): Promise<FreeLecture[]> => {
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