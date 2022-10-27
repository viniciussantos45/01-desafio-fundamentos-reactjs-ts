import { TodoProps } from '../contracts/Todos';
import styles from './TodoItem.module.css';
import { Check, Trash } from 'phosphor-react';


export function TodoItem({ content }: TodoProps) {
    // TODO: Add the logic to mark a todo as completed
    // TODO: Add the logic to remove a todo
    // TODO: Add the logic onChange to the checkbox

    return (
        <div className={styles.todo}>
            <div className={styles.todoContent}>
                <input type="checkbox" />
                <span>{<Check size={15} />}</span>
                <p>{content.title}</p>
            </div>
            <button className={styles.buttonDelete}>{<Trash size={25} />}</button>
        </div>
    )
}