import { DragDropContext } from "@hello-pangea/dnd";
import { useState, useEffect} from "react"
import { Header } from "./componentes/Header"
import { TodoComputed } from "./componentes/TodoComputed"
import { TodoCreate } from "./componentes/TodoCreate"
import { TodoFilter } from "./componentes/TodoFilter"
import { TodoList } from "./componentes/TodoList"

const initialstateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};



export default function App() {
  const [todos, setTodos] = useState(initialstateTodos)

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
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

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};
  return (
    <div className="min-h-screen
      bg-gray-200
      bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain 
      bg-no-repeat
      transition-all duration-1000
      dark:bg-gray-900 
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
         md:bg-[url('./assets/images/bg-desktop-light.jpg')]
         md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
         ">
       <Header/>
       <main className="container mx-auto mt-8 px-4 md:max-w-xl">         
         <TodoCreate createTodo= {createTodo}/> 
         <DragDropContext onDragEnd={handleDragEnd}>
           <TodoList todos={filteredTodos()} removeTodo={removeTodo} uptadeTodo={uptadeTodo}/>   
         </DragDropContext>            
         <TodoComputed countTodo={countTodo} clearCompleted={clearCompleted}/>
         <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
        <footer className="text-center mt-11 dark:text-slate-400"> Drag and Drop to reorder list</footer>
    </div>

  )
}

