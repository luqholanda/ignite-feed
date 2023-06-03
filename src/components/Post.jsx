import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'

export function Post(props) {
    const publishedDateFormatted = format(props.publishedAt, 
        "d 'de' LLLL 'às' HH:mm'h'",
        { 
            locale: ptBR
        }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.authorAvatar} outline />
                    <div className={styles.authorInfo}>
                        <strong>{ props.author }</strong>
                        <span>{ props.role }</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map((postContent) => {
                    return (
                        <span key={postContent.id}>
                            { postContent.type == "paragraph" ? <p>{postContent.content}</p> : null }
                            { postContent.type == "link" ? <a href={postContent.href}>{postContent.content}</a> : null }
                            { postContent.break ? <br /> : null }
                        </span>
                    )
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment author="Lucas Branco" comment="Muito bom Devon, parabéns!! 👏👏" dateTime="2023-05-26T07:00:00" thumbsUp={20} />
                <Comment author="Lucas Branco" comment="Muito bom Devon, parabéns!! 👏👏" dateTime="2023-05-26T07:00:00" thumbsUp={10} />
                <Comment author="Lucas Branco" comment="Muito bom Devon, parabéns!! 👏👏" dateTime="2023-05-26T07:00:00" thumbsUp={5} />
            </div>
        </article>
    )
}