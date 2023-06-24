export interface PostContent {
    id: number;
    type: 'paragraph' | 'link';
    content: string;
    break?: boolean;
    href?: string;
}