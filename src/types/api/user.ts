export interface UserProfile {
    id: string,
    fullName: string | null,
    email: string,
    dateOfBirth: string | null,
    profileImageUrl: string | null,
    createdAt: string
}