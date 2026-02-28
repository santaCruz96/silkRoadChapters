export interface UserProfile {
    id: string,
    fullName: string | null,
    email: string,
    dateOfBirth: string | null,
    profileImageUrl: string | null,
    createdAt: string
}

export interface UserProfileFavorites {
    id: string,
    entityId: string,
    entityType: number,
    titleRu: string,
    titleEn: string,
    shortDescriptionRu: string,
    shortDescriptionEn: string,
    imageUrl: string,
    views: number,
    addedAt: string
}