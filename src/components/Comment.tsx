import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { CommentProps } from "./props/comment/CommentProps";

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const publishedDateFormatted = format(props.comment.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(props.comment.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/luqholanda.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.comment.author}</strong>
              <time title={publishedDateFormatted} dateTime={props.comment.publishedAt.toString()}>
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button title="Deletar comentário" onClick={() => props.onDeleteComment!(props.comment.id)}>
              <Trash size={24} />
            </button>
          </header>

          <p>{props.comment.content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
