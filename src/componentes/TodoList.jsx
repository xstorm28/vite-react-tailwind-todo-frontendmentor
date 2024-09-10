/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos,removeTodo, uptadeTodo }) {
  return (
    <div className="mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4 dark:bg-slate-800 transition-all duration-1000">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} uptadeTodo={uptadeTodo}/>
      ))}
    </div>
  );
}
