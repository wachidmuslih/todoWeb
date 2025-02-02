import React, { createContext, ReactNode } from "react";

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

type TodoContextType = {
    todos: Todo[];
    addTodo: (title: string) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

// Create context
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider
const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = (title: string) => {
        setTodos([...todos, { id: Date.now(), title, completed: false }]);
    }
    
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

// Custom Hook untuk menggunakan Context
export const useTodoContext = () => {
    const context = React.useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within TodoProvider');
    }
    return context;
}