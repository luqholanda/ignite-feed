import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilSimpleLine } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

            <div className={styles.profile}>
                <Avatar src='https://github.com/luqholanda.png' top={-32} outline />
                <strong>Lucas Holanda</strong>
                <span>Fullstack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Edite seu Perfil
                </a>
            </footer>
        </aside>
    )
}