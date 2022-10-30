import { TodoProps } from '../contracts/Todos';
import styles from './TodoItem.module.css';
import { Check, Trash } from 'phosphor-react';


export function TodoItem({ content, onComplete, onDelete }: TodoProps) {

    function handleMarkCompleted(event: React.ChangeEvent<HTMLInputElement>) {
        onComplete(Number(event.target.name), event.target.checked)
    }

    function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
        onDelete(content.id)
    }

    return (
        <div className={styles.todo}>
            <div className={styles.todoContent}>
                <input type="checkbox" onChange={handleMarkCompleted} name={content.id.toString()} checked={content.completed} />
                <span>{<Check size={15} />}</span>
                <p>{content.title}</p>
            </div>
            <button className={styles.buttonDelete} onClick={handleDelete}>{<Trash size={25} />}</button>
        </div>
    )
}