export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

export type TodoProps = {
    content: Todo;
}

export type ListTodosProps = {
    todos: Todo[];
}