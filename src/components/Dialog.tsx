import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {BsGithub} from 'react-icons/bs'
import {MdWeb, MdOutlineClose} from 'react-icons/md'


interface Element{
  projectName: string;
  video: string;
  image: string;
  description: string;
  technologies:string[];
  githubUrl: string;
  demoUrl: string;
}


interface DialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  element?: Element;
}

export const DialogComponent =({isOpen, setIsOpen, element}: DialogProps) => {

  function closeModal() {
    setIsOpen(false)
  }

if(!element){
  return <div></div>;
}

return(
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
 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-800 dark:text-gray-200">
  <div className='flex justify-end'>
  <button onClick={closeModal} className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md">
       <MdOutlineClose className="inline-block mx-2 text-white"/>
     </button>  
  </div>
   <h3 className="text-xl font-roboto font-bold leading-6 text-gray-900 dark:text-gray-300">{element.projectName}</h3>
   <div className="my-3 shadow-lg">
    <img src={element.image} alt="" />
   </div>

   <div className="mt-6">
     <h4 className="font-lg">About the Project</h4>
     <p className="text-sm text-gray-500 text-justify">
       {element.description}
     </p>
   </div>
   <div className="mt-6">
     <h4>Technologies</h4>
     {element.technologies.map((tec: any, i: any)=> (
       <span className="inline-block font-roboto text-sm mr-3" key={i}>{tec}</span>  
     ))}
   </div>

   <div className="mt-6 flex justify-center">
     <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md px-4 py-2 mx-3">
       <a href={element.githubUrl} target="_blank"><BsGithub className="inline-block mx-2 text-white"/>code</a>
     </button>
     <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md px-4 py-2 mx-3">
       <a href={element.demoUrl} target="_blank"><MdWeb className="inline-block mx-2 text-white"/>demo</a>
     </button>
                
   </div>

 </Dialog.Panel>
  </Transition.Child>
</div>
</div>
  </Dialog>
</Transition>
)

}