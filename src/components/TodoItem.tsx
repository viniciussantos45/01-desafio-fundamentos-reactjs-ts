import { TodoProps } from '../contracts/Todos';
import styles from './Todo.module.css';
import { Trash } from 'phosphor-react';


export function TodoItem({ content }: TodoProps) {
    return (
        <div className={styles.todo}>
            <div className={styles.todoContent}>
                <input type="checkbox" />
                <p>{content.title}</p>
            </div>
            <button className={styles.buttonDelete}>{<Trash />}</button>
        </div>
    )
}