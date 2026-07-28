export interface Playlist {
    id: string,
    titleRu: string,
    titleEn: string,
    shortDescriptionRu: string,
    shortDescriptionEn: string,
    coverImageUrl: string,
    contentType: number,
    displayOrder: number,
    isPublishedRu: boolean,
    isPublishedEn: boolean,
    itemsCount: number,
    createdAt: string,
    updatedAt: string,
    items: null
}

export interface ApiResponse {
    items: Playlist[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}