import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useEffect, useState } from 'react';
import { convertMonthToText } from '../util/month';
import { Avatar } from './Avatar';

export function Comment(props) {
    const [dateTimeText, setDateTimeText] = useState("");
    const [dateTimeTitle, setDateTimeTitle] = useState("");

    useEffect(() => {
        if (props.dateTime !== undefined) {
            let commentDate = new Date(props.dateTime);
            let time = parseInt(Math.abs(new Date(commentDate) - new Date()) / 36e5);

            if(time < 0) {
                setDateTimeText(`Alguns minutos atrás`);
            } else if(time < 24) {
                setDateTimeText(`A certa de ${time}h atrás`);
            } else if(time > 24) {
                time = parseInt(time/24);
                time = time < 0 ? 1 : time;
                const plural = time > 1 ? "s" : "";
                setDateTimeText(`A certa de ${time} dia${plural} atrás`);
            }

            const titleDate = commentDate.getDate();
            const titmeMonth = convertMonthToText(commentDate.getMonth());
            const titleHours = commentDate.getHours().toString().padStart(2, "0");
            const titleMinutes = commentDate.getMinutes().toString().padStart(2, "0");

            setDateTimeTitle(`${titleDate} de ${titmeMonth} as ${titleHours}:${titleMinutes}`);
        }
    }, []);

    return (
        <div className={styles.comment}>

            <Avatar src="https://github.com/luqholanda.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{ props.author }</strong>
                            <time title={dateTimeTitle} dateTime={props.dateTime}>{ dateTimeText }</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ props.comment }</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>{props.thumbsUp}</span>
                    </button> 
                </footer>
            </div>
        </div>
    )
}