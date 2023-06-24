import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <section className={styles.header}>
            <img src={igniteLogo} />
            <h1>Ignite Feed</h1>
        </section>
    )
}