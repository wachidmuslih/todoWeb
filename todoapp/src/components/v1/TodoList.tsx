import React, { useMemo } from "react";
import { useTodoContext } from "../../contexs/TodoContext";
import TodoItem from "./TodoItem";


const TodoList: React.FC = () => {
    const { todos } = useTodoContext();

    // Memoize todo list
    const renderedTodos = useMemo(() => {
        return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
    }, [todos]);
    return (
        <div>
            <div className="text-center text-2xl font-bold text-gray-800 mb-4">Todo List</div>
            <div className="flex flex-col gap-4">
                {todos.length ? renderedTodos : <div className="text-center text-gray-400">No todos</div>}
            </div>
        </div>
    );
};


    
export default TodoList;