import { Comment } from "../../../model/comment/Comment";

export interface CommentProps {
    comment: Comment;
    onDeleteComment?: (id: number) => void;
}