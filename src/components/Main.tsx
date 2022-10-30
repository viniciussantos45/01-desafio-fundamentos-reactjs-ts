import { useState } from 'react';
import { Todo } from '../contracts/Todos';
import { Input } from './Input';
import { ListTodos } from './ListTodos';
import styles from './Main.module.css';

export function Main() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function handleCreateTodo(titleTodo: string) {

        const data: Todo = {
            id: Math.random(),
            title: titleTodo,
            completed: false
        };

        setTodos([data, ...todos]);
    };

    function handleUpdateTodos(listTodos: Todo[]) {
        setTodos(listTodos);
    }

    return (
        <main className={styles.mainContainer}>
            <Input onSubmit={handleCreateTodo} />
            <ListTodos todos={todos} onUpdate={handleUpdateTodos} />
        </main>
    )
}