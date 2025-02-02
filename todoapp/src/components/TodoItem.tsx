import React from 'react'
import { Todo, useTodoContext } from '../contexs/TodoContext'
import { IconTrash } from '@tabler/icons-react';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { toggleTodo, deleteTodo } = useTodoContext();

    return (
        <>
            <div className="flex justify-between items-center p-4 bg-gray-50 border-[1px] border-[#EEEEEE] border-solid rounded-lg hover:bg-gray-100 w-[400px] ">
                <div
                    onClick={() => toggleTodo(todo.id)}
                    className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {todo.title}
                </div>
                <button onClick={() => deleteTodo(todo.id)} className="text-red-500 flex items-center gap-x-2">
                    <IconTrash size={20} color="#fb2c36" />
                </button>
            </div>
        </>
    )
}


export default TodoItem