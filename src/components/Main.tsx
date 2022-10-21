import { Input } from './Input';
import styles from './Main.module.css';

export function Main() {
    return (
        <main className={styles.mainContainer}>
            <Input />
        </main>
    )
}