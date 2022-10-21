import { PlusCircle } from 'phosphor-react';
import styles from './Input.module.css';

export function Input() {
    return (
        <div className={styles.inputGroup}>
            <input className={styles.inputText} type="text" placeholder='Adicione uma nova tarefa' />
            <button className={styles.buttonSubmit} type="submit">Criar {<PlusCircle size={20} />}</button>
        </div>
    )
}