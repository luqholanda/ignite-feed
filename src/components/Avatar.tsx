import styles from './Avatar.module.css'
import { AvatarProps } from './props/avatar/AvatarProps'

export function Avatar({ outline, top, style, ...props}: AvatarProps) {
    return (
        <img className={
            `${styles.avatar} ${outline ? styles.outline : ""}`
        } 
        style={{
            marginTop: `${top ?? 0}px`,
            ...style
        }} alt=""
        { ...props }
        />
    )
}