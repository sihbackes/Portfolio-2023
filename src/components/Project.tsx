import { projects } from "../services/data"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {BsGithub} from 'react-icons/bs'
import {MdWeb, MdOutlineClose} from 'react-icons/md'

export const Project = () => {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return(
   <section className="border-b border-gray-100 md:py-32">
     <div>
       <h3 className="font-roboto text-lg pb-7 font-bold">Projects</h3>
       <div className="relative grid gap-6 grid-cols-1 md:grid-cols-2">
          {projects.map((element) => (
           <div className="relative group grid-cols-1 md:col-span-1 cursor-pointer" onClick={openModal}>
             <div className="relative rounded-xl overflow-hidden">
               <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
               <video className="rounded-xl" src={element.video} autoPlay loop muted/>
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-4  transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
               <h3 className="text-white font-nunito text-3xl my-2">{element.projectName}</h3>
                {element.technologies.map((tec)=> (
                 <span className="inline-block text-zinc-900s bg-slate-50 font-roboto text-sm  mx-1 px-3 rounded-full">{tec}</span>  
                ))}
             </div>
               <Transition appear show={isOpen} as={Fragment}>
                 <Dialog as="div" className="relative z-10" onClose={closeModal}>
                   <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                     >
                     <div className="fixed inset-0 bg-black bg-opacity-25" />
                   </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4 text-center">
                 <Transition.Child
                   as={Fragment}
                   enter="ease-out duration-300"
                   enterFrom="opacity-0 scale-95"
                   enterTo="opacity-100 scale-100"
                   leave="ease-in duration-200"
                   leaveFrom="opacity-100 scale-100"
                   leaveTo="opacity-0 scale-95"
                  >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <h3 className="text-xl font-roboto font-bold leading-6 text-gray-900">{element.projectName}</h3>
                  <div className="my-3 shadow-lg">
                  <video className="rounded-xl" src={element.video} />
                  </div>

                  <div className="mt-6">
                    <h4 className="font-lg">About the Project</h4>
                    <p className="text-sm text-gray-500 text-justify">
                      {element.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4>Technologies</h4>
                    {element.technologies.map((tec)=> (
                      <span className="inline-block font-roboto text-sm mr-3 ">{tec}</span>  
                    ))}
                  </div>

                  <div className="mt-6 flex justify-around">
                    <button className="bg-zinc-700 text-white font-nunito rounded-md px-4 py-2">
                      <BsGithub className="inline-block mx-2 text-white"/>code
                    </button>
                    <button className="bg-zinc-700 text-white font-nunito rounded-md px-4 py-2">
                      <MdWeb className="inline-block mx-2 text-white"/> demo
                    </button>
                    <button onClick={closeModal} className="bg-zinc-700 text-white font-nunito rounded-md px-4 py-2">
                      <MdOutlineClose className="inline-block mx-2 text-white"/> close
                    </button>                  
                  </div>

                </Dialog.Panel>
                 </Transition.Child>
               </div>
              </div>
                 </Dialog>
               </Transition>
           </div>
      ))}
       </div>
     </div>
   </section>
  )
}

