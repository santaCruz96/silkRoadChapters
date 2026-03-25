'use server'

import { ApiResponse, Blog } from "@/types/interfaces/Blog.interface";
import { API_URL } from "@/config/constants";

export const getBlogs = async (): Promise<Blog[]> => {
    const resAllBlogs = await fetch(`${API_URL}/blogs`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!resAllBlogs.ok) {
        throw new Error(`Failed to fetch lectures: ${resAllBlogs.status}`);
    }

    const allBlogs = await resAllBlogs.json();

    const res = await fetch(`${API_URL}/blogs?pageSize=${allBlogs.totalCount}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: ApiResponse = await res.json();
    
    return data.items;
};

export const getSpecificLecture = async (id: string): Promise<Blog> => {
    const res = await fetch(`${API_URL}/blogs/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch lecture: ${res.status}`);
    }

    const data: Blog = await res.json();

    return data;
};