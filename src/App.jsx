import { useState } from "react"
import { Header } from "./componentes/Header"
import { TodoComputed } from "./componentes/TodoComputed"
import { TodoCreate } from "./componentes/TodoCreate"
import { TodoFilter } from "./componentes/TodoFilter"
import { TodoList } from "./componentes/TodoList"

const initialstateTodos = [
  {id:1, title:"Go to the gym", completed: true},
  {id:2, title:"Study", completed: false},
  {id:3, title:"workout", completed: false},
  {id:4, title:"10 minutes medi", completed: false},
  {id:5, title:"pickup groceries", completed: false},
]
export default function App() {
  const [todos, setTodos] = useState(initialstateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id : Date.now(),
      title: title.trim(),
      completed : false,
    }
    setTodos([...todos, newTodo])
  }

  const uptadeTodo = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const removeTodo = (id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  }
  
  const countTodo = todos.filter((todo)=> !todo.completed).length
  const clearCompleted = () =>{
    setTodos(todos.filter((todo)=> !todo.completed))
  }

  const [filter, setFilter] = useState("all")
  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () =>{
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo)=> todo.completed)
      default:
        return todos;
    }
  }
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 ">
       <Header/>
       <main className="container mx-auto mt-8 px-4 ">         
         <TodoCreate createTodo= {createTodo}/>             
         <TodoList todos={filteredTodos()} removeTodo={removeTodo} uptadeTodo={uptadeTodo}/>   
         <TodoComputed countTodo={countTodo} clearCompleted={clearCompleted}/>
         <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
        <footer className="text-center mt-11 dark:text-slate-400"> Drag and Drop to reorder list</footer>
    </div>

  )
}

