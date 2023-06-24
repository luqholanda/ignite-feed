export interface Comment {
    id: number;
    author?: string;
    thumbsUp?: number;
    content: string;
    publishedAt: Date;
}