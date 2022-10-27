import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Todo } from '../contracts/Todos';
import styles from './Input.module.css';

export type InputProps = {
    onSubmit: (titleTodo: string) => void;
}

export function Input({ onSubmit }: InputProps) {
    const [newTodo, setNewTodo] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onSubmit(newTodo);
        setNewTodo('');
    }

    // TODO: Add validation to the input

    function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodo(event.target.value);
    }

    return (
        <div className={styles.inputGroup}>
            <input className={styles.inputText} type="text" placeholder='Adicione uma nova tarefa' value={newTodo} onChange={handleChangeInput} />
            <button className={styles.buttonSubmit} type="submit" onClick={handleSubmit}>Criar {<PlusCircle size={20} />}</button>
        </div>
    )
}