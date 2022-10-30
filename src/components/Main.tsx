import { useEffect, useState } from 'react';
import { Todo } from '../contracts/Todos';
import { Input } from './Input';
import { ListTodos } from './ListTodos';
import styles from './Main.module.css';

let loaded = false;

export function Main() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        loadStorage();
    }, [])

    function handleCreateTodo(titleTodo: string) {

        const data: Todo = {
            id: Math.random(),
            title: titleTodo,
            completed: false
        };

        setTodos([data, ...todos]);
        updateStorage([data, ...todos]);
    };

    function handleUpdateTodos(listTodos: Todo[]) {
        updateStorage(listTodos)
        setTodos(listTodos);
    }

    function handleDeleteTodo(id: number) {
        updateStorage(todos.filter(todo => todo.id !== id));
        setTodos((current) => current.filter(todo => todo.id !== id));
    }

    function loadStorage() {
        const storage = window.localStorage.getItem('todos');

        if (storage) {
            setTodos(JSON.parse(storage));
        }
    }

    function updateStorage(allTodos: Todo[]) {
        window.localStorage.setItem('todos', JSON.stringify(allTodos));
    }

    return (
        <main className={styles.mainContainer}>
            <Input onSubmit={handleCreateTodo} />
            <ListTodos todos={todos} onUpdate={handleUpdateTodos} onUpdateDeleteds={handleDeleteTodo} />
        </main>
    )
}