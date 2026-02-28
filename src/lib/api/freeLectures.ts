'use server'

import { ApiResponse, FreeLecture } from "@/types/interfaces/FreeLecture.interface";
import { API_URL } from "@/config/constants";

export const getFreeLectures = async (): Promise<FreeLecture[]> => {
    const res = await fetch(`${API_URL}/free-lectures`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch lectures: ${res.status}`);
    }

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