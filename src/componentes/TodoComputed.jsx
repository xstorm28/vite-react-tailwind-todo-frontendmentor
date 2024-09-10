/* eslint-disable react/prop-types */

export  function TodoComputed({countTodo,clearCompleted}) {
  return (
    <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-slate-800 transition-all duration-1000">
            <span className="text-gray-400"> {countTodo} items left</span>
            <button  onClick={clearCompleted} className="text-gray-400">Clear Completed</button>
          </section>
  )
}
