export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

export type TodoProps = {
    content: Todo;
    onComplete: (id: number, isComplete: boolean) => void;
    onDelete: (id: number) => void;
}

export type ListTodosProps = {
    todos: Todo[];
    onUpdate: (updatedTodos: Todo[]) => void;
    onUpdateDeleteds: (id: number) => void;
}