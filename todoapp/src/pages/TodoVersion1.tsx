import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { TodoProvider } from '../contexs/TodoContext'

const TodoVersion1 = () => {
  return (
    <>
    <TodoProvider>
        <div className="flex flex-col justify-center items-center max-w-md  my-auto mx-auto mt-10 p-4">
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  )
}

export default TodoVersion1