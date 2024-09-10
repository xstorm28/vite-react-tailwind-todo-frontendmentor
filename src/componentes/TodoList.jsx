/* eslint-disable react/prop-types */
import {  } from "./TodoItem";
import { Droppable,Draggable } from "@hello-pangea/dnd";
import TodoItemU from "./TodoItemU";


export function TodoList({ todos,removeTodo, uptadeTodo }) {
  return (
    <Droppable droppableId="todos">
      {
        (droppableProvider) =>(
           <div ref={droppableProvider.innerRef} {...droppableProvider.droppableProps} className="mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4 dark:bg-slate-800 transition-all duration-1000"
           >
               {todos.map((todo,index) => (
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {
                    (draggableProvider) =>(
                      <TodoItemU todo={todo} removeTodo={removeTodo} uptadeTodo={uptadeTodo} ref={draggableProvider.innerRef} {...draggableProvider.dragHandleProps}{...draggableProvider.draggableProps}/>
                    )
                  }
                </Draggable>
                ))}
                {droppableProvider.placeholder}
             </div>
        )
      }
    </Droppable>
  );
}
