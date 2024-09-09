

import { Cross } from "./componentes/Icons/Cross"
import { Moon } from "./componentes/Icons/Moon"


export default function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
         <div className="flex justify-between">
           <h1 className="uppercase  text-white text-4xl font-bold tracking-[0.3em]"> todo </h1>
           <button> 
            <Moon fill="#000"/>
           </button>
         </div>
        <form className=" flex overflow-hidden rounded-md bg-white py-4 gap-4 items-center px-4 mt-9">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
           type="text"
           placeholder="Create a new task"
           className="w-full text-gray-400 outline-none"/>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-5">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="  flex gap-4  border-b-gray-400 border-b">
            <button className=" rounded-full border-2 w-5 h-5 inline-block"></button>
            
            <p className="text-gray-600 grow">Complete Online JavaScript Curse in bluuweb</p>

            <button className="flex-none">
              <Cross/>
            </button>
          </article>
          <article className="  flex gap-4  border-b-gray-400 border-b">
            <button className=" rounded-full border-2 w-5 h-5 inline-block"></button>
            
            <p className="text-gray-600 grow">Complete Online JavaScript Curse in bluuweb</p>

            <button className="flex-none">
              <Cross/>
            </button>
          </article>
          <article className="  flex gap-4  border-b-gray-400 border-b">
            <button className=" rounded-full border-2 w-5 h-5 inline-block"></button>
            
            <p className="text-gray-600 grow">Complete Online JavaScript Curse in bluuweb</p>

            <button className="flex-none">
              <Cross/>
            </button>
          </article>
          

          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-400"> 5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

        <section className="container mx-auto px-4 mt-5 ">
          <div className="rounded-md bg-white p-4 flex justify-center gap-4">
            <button className="text-blue-700"> All </button>
            <button className="hover:text-blue-700"> Active </button>
            <button className="hover:text-blue-700"> Completed</button>
          </div>
        </section>

        <p className="text-center mt-11"> Drag and Drop to reorder list</p>
    </div>

  )
}

