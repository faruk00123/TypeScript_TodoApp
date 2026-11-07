import { useState } from "react"
import type { todoFormEvent } from "./types/todo"
import { useTodos } from "./hooks/useTodos"

const App = () => {

  const [todos, setTodos] = useState<string>('')
  const {newTodos, addTodo, delateTodo, checkboxBtn} = useTodos()
  console.log(newTodos)

  const todoFormSubmit = (e: todoFormEvent)=>{
     e.preventDefault();

     if(todos.trim()){
      addTodo(todos.trim())
      setTodos('')
     }
  }
  

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
        
        <form onSubmit={todoFormSubmit} className="mb-6">
          <div className="flex gap-2 justify-center items-center">
            <input value={todos} onChange={(e) => setTodos(e.target.value)} type="text" placeholder="Add a new todo..." className="border flex-1 border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-500 text-sm text-white py-2.5 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Todo</button>
          </div>
        </form>

        {/* display todo */}
        <div className="space-y-2">
          {
            newTodos.map((todo) => (
              <div key={todo.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center justify-center">
                  <input type="checkbox" onClick={() => checkboxBtn(todo.id)} className="mr-2" />
                  <span className={todo.completed ? "line-through text-gray-500" : "text-gray-800"}>{todo.text}</span>
                </div>
                <button onClick={() => delateTodo(todo.id)} className="text-red-500 cursor-pointer hover:text-red-700">
                  Delete
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App