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

export interface Video {
    id: string,
    key: string,
    title: string,
    processingStatus: number,
    encodingProgress: number,
    lastWebhookAt: string | null,
    availableResolutions: string | null,
    lengthSeconds: number | null,
    thumbnailFileName: string | null,
    viewsCount: number,
    totalWatchTimeSeconds: number,
    metricsLastSyncedAt: string
}

export interface PaidLecture {
    id: string;
    titleRu: string;
    titleEn: string;
    shortDescriptionRu: string;
    shortDescriptionEn: string;
    longDescriptionRu: string;
    longDescriptionEn: string;
    isTopLecture: boolean;
    popularityCount: number;
    displayOrder: number;
    isPublishedRu: boolean;
    isPublishedEn: boolean;
    isPublished: boolean;
    publishedAt: string | null;
    coverImageUrl: string | null;
    categoryId: string;
    category: Category | null;
    videoId: string;
    video: Video | null;
    tags: Tag[];
    priceUsd: number;
    createdAt: string;
    updatedAt: string;
    likesCount: number;
    dislikesCount: number;
    details: Details[];
    contentBlocks: ContentBlock[];
}

export interface ApiResponse {
    items: PaidLecture[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

export interface PriceResponse {
    lectureId: string;
    titleRu: string;
    titleEn: string;
    priceUsd: number;
    exchangeRate: number;
    rateDate: string;
    rateSource: string;
    priceUzs: number;
    priceUzsFormatted: string;
}