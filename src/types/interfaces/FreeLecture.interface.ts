export interface Tag {
    id: string;
    title: string;
}

export interface Image {
    id: string;
    contentBlockId: string;
    imageUrl: string;
    order: number;
    captionRu: string | null;
    captionEn: string | null;
}

export interface ContentBlock {
    id: string;
    entityId: string;
    entityType: number;
    order: number;
    textRu: string;
    textEn: string;
    textRightRu: string;
    textRightEn: string;
    layout: string; 
    images: Image[];
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Details {
    key: string;
    value: string;
}

export interface FreeLecture {
    id: string;
    order: number;
    titleRu: string;
    titleEn: string;
    shortDescriptionRu: string;
    shortDescriptionEn: string;
    longDescriptionRu: string;
    longDescriptionEn: string;
    releaseDate: string;
    youtubeId: string;
    isTopVideo: boolean;
    viewCount: number;
    coverImageUrl: string | null;
    categoryId: string;
    category: Category | null;
    tags: Tag[];
    createdAt: string;
    updatedAt: string;
    details: Details[];
    likesCount: number;
    dislikesCount: number;
    contentBlocks: ContentBlock[];
}

export interface ApiResponse {
    items: FreeLecture[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}