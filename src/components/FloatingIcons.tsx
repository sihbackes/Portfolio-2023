import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'

export const FloatingIcons = () => {
  return(
    <div className="fixed px-10 bottom-24  text-zinc-600 dark:text-gray-300 hidden lg:flex animate-pulse">
     <ul>
       <li><HiOutlineChevronDoubleDown className='m-2 text-xl mb-6'/></li>
       <li><a href="https://github.com/sihbackes" target="_blank"><BsGithub className='m-2 text-2xl mb-6 hover:text-zinc-400'/></a></li>
       <li><HiOutlineChevronDoubleDown className='m-2 text-xl mb-6'/></li>
       <li><a href="https://www.linkedin.com/in/simone-backes/" target="_blank"><BsLinkedin className='m-2 text-xl hover:text-zinc-400'/></a></li>
     </ul>
    </div>
  )
}