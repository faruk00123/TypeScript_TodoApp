import { useState } from "react"
import type { Todo } from "../types/todo"

export const useTodos = () => {
    const [newTodos, setNewTodos] = useState<Todo[]>([])
    
    const addTodo = (text: string)=> {
        const newTodo: Todo = {
            id: Date.now(),
            text,  
            completed: false
        }
        setNewTodos(prevTodos => [...prevTodos, newTodo])
    }

    const delateTodo = (id: number)=> {
        setNewTodos(newTodos.filter(todo => todo.id !== id))
    }
    const checkboxBtn = (id: number)=>{
        setNewTodos(newTodos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        }))
    }
    return { newTodos, addTodo, delateTodo, checkboxBtn }
}