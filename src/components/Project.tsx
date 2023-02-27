import { useState } from 'react'
import { DialogComponent } from "./Dialog"
import { projects } from "../services/data"


interface Element{
  projectName: string;
  video: string;
  image: string;
  description: string;
  technologies:string[];
  githubUrl: string;
  demoUrl: string;
}


export const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<Element>();



  function openModal(element: Element) {
    setValues(element)
    setIsOpen(true)
  }

  return(
   <section className="border-b border-gray-100 md:py-32 dark:border-zinc-600">
     <div>
       <h3 className="font-roboto text-lg pb-7 font-bold" id="projects">Projects</h3>
       <div className="relative grid gap-6 grid-cols-1 md:grid-cols-2">
          {projects.map((element: Element) => (
           <div className="relative group grid-cols-1 md:col-span-1 cursor-pointer" onClick={() => openModal(element)} key={element.projectName}>
             <div className="relative rounded-xl overflow-hidden">
               <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-90 transition-opacity"></div>
               <video className="rounded-xl hidden md:flex" src={element.video} autoPlay loop muted/>
               <img className='md:hidden' src={element.image} alt="" />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-4  md:transition-opacity md:duration-300 md:opacity-0 md:group-hover:opacity-100 z-10">
               <h3 className="text-white font-nunito text-3xl my-2">{element.projectName}</h3>
                {element.technologies.map((tec, i)=> (
                 <span className="bg-zinc-700 text-white font-nunito rounded-md md:px-4 px-1 py-1 mx-1 text-sm" key={i}>{tec}</span>  
                ))}
             </div>
              
           </div>
      ))}

            <DialogComponent element={values} isOpen={isOpen} setIsOpen={setIsOpen}/>
       </div>
     </div>
   </section>
  )
}

