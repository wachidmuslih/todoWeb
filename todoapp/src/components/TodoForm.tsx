import React from 'react'
import { useTodoContext } from '../contexs/TodoContext';

const TodoForm: React.FC = () => {
    const { addTodo } = useTodoContext();
    const [title, setTitle] = React.useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title.trim()) {
        addTodo(title);
        setTitle('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
         <input type="text" placeholder="Add a todo" value={title} onChange={(e) => setTitle(e.target.value)} className="font-archivo bg-surface p-4 border-solid border-[1px] border-border rounded-lg focus:outline-none focus:border-primary focus:border-2 "/>
         <button type='submit' className="font-archivo font-semibold text-white bg-primary p-4 rounded-lg hover:bg-primary-hover">Add</button>
      </form>
    );
  };

export default TodoForm;