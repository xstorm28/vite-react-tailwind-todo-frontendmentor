/* eslint-disable react/prop-types */

export  function TodoFilter({changeFilter, filter}) {
  return (
    <section className="container mx-auto  mt-5 ">
    <div className="rounded-md bg-white p-4 flex justify-center gap-4 dark:bg-slate-800 transition-all duration-1000">
      <button className={`${
         filter === "all" 
         ? "text-blue-700  hover:text-gray-400" 
         : "text-gray-400 hover:text-blue-700"}`}
         onClick={()=>changeFilter("all")}> All 
         </button>
      <button className={`${
         filter === "active" 
         ? "text-blue-700  hover:text-gray-400" 
         : "text-gray-400 hover:text-blue-700"}`} onClick={()=>changeFilter("active")}> Active
          </button>
      <button className={`${
         filter === "completed" 
         ? "text-blue-700  hover:text-gray-400" 
         : "text-gray-400 hover:text-blue-700"}`} 
         onClick={()=>changeFilter("completed")}> Completed
         </button>
    </div>
  </section>
  )
}
