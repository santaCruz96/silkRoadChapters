export interface IBlog {
    id: number,
    title: string,
    location: string,
    images: string[]
}

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
    title: string;
}

export interface Details {
    key: string;
    value: string;
}

export interface Blog {
    id: string;
    titleRu: string;
    titleEn: string;
    shortDescriptionRu: string;
    shortDescriptionEn: string;
    longDescriptionRu: string;
    longDescriptionEn: string;
    releaseDate: string; 
    imageLink: string;
    viewsCount: number;
    isPublishedRu: boolean;
    isPublishedEn: boolean;
    categoryId: string;
    category: Category | null;
    tags: Tag[];
    createdAt: string; 
    updatedAt: string; 
    likesCount: number;
    dislikesCount: number;
    details: Details[];
    contentBlocks: ContentBlock[];
}

export interface ApiResponse {
    items: Blog[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}