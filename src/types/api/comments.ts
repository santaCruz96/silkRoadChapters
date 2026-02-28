export interface CommentData {
    entityId: string;
    entityType: number;
    content: string;
}

export interface Comment {
    id: string;
    publicationDate: string;
    content: string;
    userId: string;
    userFullName: string;
    parentCommentId: string | null;
    repliesCount: number;
    likesCount: number;
    dislikesCount: number;
}

export interface ApiResponse {
    items: Comment[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}