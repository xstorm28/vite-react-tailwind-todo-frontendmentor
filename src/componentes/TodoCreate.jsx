/* eslint-disable react/prop-types */
import { useState } from "react";


export  function TodoCreate({createTodo}) {

  const [title, setTitle] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!title.trim()){
      return setTitle("")
    }
    createTodo(title)
    setTitle("")

    
  }
  return (
    <form  onSubmit={handleSubmit} className="transition-all duration-1000 dark:bg-slate-800 flex overflow-hidden rounded-md bg-white py-4 gap-4 items-center px-4 mt-9">
     <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
     <input
     type="text"
     placeholder="Create a new task"
     className="w-full text-gray-400 outline-none dark:bg-slate-800 transition-all duration-1000"
     value={title}
     onChange={(e)=> setTitle(e.target.value)}
     />
  </form>
  )
}
