import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './contexs/TodoContext'

function App() {

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

export default App
