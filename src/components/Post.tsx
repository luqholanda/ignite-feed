import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ChangeEvent, FormEvent, useState } from "react";
import { CommentProps } from "./props/comment/CommentProps";
import { PostProps } from "./props/post/PostProps";
import { PostContent } from "../model/post/PostContent";

export function Post(props: PostProps) {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState<CommentProps[]>([
    {
      comment: {
        id: 1,
        content: "Testando post inicial",
        publishedAt: new Date("2023/06/03 16:50:00"),
      }
    },
  ]);

  const publishedDateFormatted = format(props.post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(props.post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    const id = comments.length + 1;
    const newComment: CommentProps = {
      comment: {
        id: id,
        content: newCommentText,
        publishedAt: new Date()
      }
    };

    const commentsWithNewOne: CommentProps[] = [...comments];
    commentsWithNewOne.push(newComment);
    commentsWithNewOne.sort((a: CommentProps, b: CommentProps) => b.comment.publishedAt.getTime() - a.comment.publishedAt.getTime());

    setComments(commentsWithNewOne);
    setNewCommentText("");
  };

  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(e.target.value);
    e.target.setCustomValidity("");
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(data => {
      return data.comment.id !== id
    }));
  }

  const handleNewCommentInvalid = (e: any) => {
    e.target.setCustomValidity("Este campo é obrigatório!");
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.post.author.avatarUrl} outline />
          <div className={styles.authorInfo}>
            <strong>{props.post.author.name}</strong>
            <span>{props.post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={props.post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.post.content.map((postContent: PostContent) => {
          return (
            <span key={postContent.id}>
              {postContent.type == "paragraph" ? <p>{postContent.content}</p> : null}
              {postContent.type == "link" ? <a href={postContent.href}>{postContent.content}</a> : null}
              {postContent.break ? <br /> : null}
            </span>
          );
        })}
      </div>

      <form onSubmit={handleCreateNewComment } className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" placeholder="Deixe um comentário" value={newCommentText} onChange={handleNewCommentChange} onInvalid={handleNewCommentInvalid} required />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment: CommentProps) => {
          return (
            <Comment 
                key={comment.comment.id}
                comment={
                  {
                    id: comment.comment.id,
                    author: "Lucas Branco",
                    content: comment.comment.content,
                    publishedAt: comment.comment.publishedAt,
                    thumbsUp: 20
                  }
                }
                onDeleteComment={() => handleDeleteComment(comment.comment.id) }
            />
          )
        })}
      </div>
    </article>
  );
}
