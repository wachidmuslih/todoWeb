import { useState } from 'react'
import './App.css'
import TodoInput from './components/todoInput'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center gap-y-4 items-center h-screen">
        <TodoInput />
        <TodoList />
      </div>
    </>
  )
}

export default App
