import { PlusCircle } from 'phosphor-react';
import { InvalidEvent, useState } from 'react';
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

    function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('O comentário não pode ser vazio')
    }

    function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodo(event.target.value);
    }

    const enabledButtonSubmit = newTodo.length === 0

    return (
        <form className={styles.inputGroup} onSubmit={handleSubmit}>
            <input
                className={styles.inputText}
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={newTodo}
                onChange={handleChangeInput}
                onInvalid={handleNewTodoInvalid}
                required
            />
            <button
                type="submit"
                className={styles.buttonSubmit}
                disabled={enabledButtonSubmit}
            >
                Criar {<PlusCircle size={20} />}
            </button>
        </form>
    )
}