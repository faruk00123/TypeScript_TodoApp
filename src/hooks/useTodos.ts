import { useState } from "react"
import type { Todo } from "../types/todo"

type UseTodoReturn = {
    newTodos: Todo[];
    addTodo: (text: string) => void;
    delateTodo: (id: number) => void;
    checkboxBtn: (id: number) => void;
}

export const useTodos = (): UseTodoReturn => {
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