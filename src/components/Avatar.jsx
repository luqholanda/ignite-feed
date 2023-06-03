import styles from './Avatar.module.css'

export function Avatar(props) {
    return (
        <img className={
            `${styles.avatar} ${props.outline ? styles.outline : ""}`
        } 
        src={props.src} 
        style={{
            marginTop: `${props.top}px` ?? ""
        }} alt="" />
    )
}