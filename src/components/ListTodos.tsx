import { ListTodosProps } from '../contracts/Todos';
import { TodoItem } from './TodoItem';
import list from '../assets/list.png'
import styles from './ListTodos.module.css';
import { useState } from 'react';

export function ListTodos({ todos, onUpdate }: ListTodosProps) {
    const [totalCompleted, setTotalCompleted] = useState(0);

    function handleCompletedTodo(id: number, isComplete: boolean) {
        if (isComplete) {
            setTotalCompleted(totalCompleted + 1);
        } else {
            setTotalCompleted(totalCompleted - 1);
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.groupIndicators}>
                <div className={styles.indicator}>
                    <span className={styles.titleIndicator}>Tarefas criadas</span>
                    <span className={styles.indicatorQty}>{todos.length}</span>
                </div>
                <div className={styles.indicator}>
                    <span className={styles.titleIndicator}>Concluídas</span>
                    <span className={styles.indicatorQty}>{totalCompleted} de {todos.length}</span>
                </div>
            </div>

            <div className={styles.groupTodos}>
                {todos.length === 0 && (
                    <div className={styles.emptyTodos}>
                        <img src={list} />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus intens a fazer</p>
                    </div>
                )}

                {todos.length > 0 && (
                    <div className={styles.listTodos}>
                        {todos.map(todo => (
                            <TodoItem key={todo.id} content={todo} onComplete={handleCompletedTodo} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}