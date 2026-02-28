export interface FavoriteItem {
    id: string;
    entityId: string;
    entityType: number;
    titleRu: string;
    titleEn: string;
    shortDescriptionRu: null | string;
    shortDescriptionEn: null | string;
    imageUrl: null | string;
    views: null | number;
    addedAt: string;
}