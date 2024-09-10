/* eslint-disable react/prop-types */
import { Cross } from "./Icons/IconCross";
import { IconCheck } from "./Icons/IconCheck";

export  function TodoItem({todo,removeTodo,uptadeTodo}) {
  const {id,title, completed} = todo
  return (
          <article className="flex gap-4 border-b border-b-gray-400 ">
            <button
               onClick={() => uptadeTodo(id)}
               className ={`w-5 h-5 flex-none rounded-full border-2 ${
                completed 
                  ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  : "inline-block"
                   }`}
                   >
                    {completed && <IconCheck/>}
            </button>
            <p className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
              <Cross/>
            </button>
          </article>
  )
}
