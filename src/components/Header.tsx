import logo from '../assets/logo.png';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src={logo} alt="Todo list" />
        </header>
    )
}