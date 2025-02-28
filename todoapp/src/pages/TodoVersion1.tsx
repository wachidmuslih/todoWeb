import { Outlet } from 'react-router'
import TodoForm from '../components/v1/TodoForm'
import TodoList from '../components/v1/TodoList'
import { TodoProvider } from '../contexs/TodoContext'


export default function TodoVersion1() {
  return (
    <>
      <TodoProvider>
        <div className="flex flex-col justify-center items-center max-w-md  my-auto mx-auto mt-10 p-4">
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
      <Outlet />
    </>

  )
}