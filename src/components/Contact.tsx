import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


export const Contact = () => {
  return(
    <section className="border-b border-gray-100 py-9 md:py-32 dark:border-zinc-600 relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 hidden md:flex bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-3 w-72 h-72 hidden md:flex bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 right-48 w-72 h-72 hidden md:flex bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-0 left-15 w-48 h-48 md:hidden bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-3  w-32 h-48 md:hidden bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-8 w-48 h-56 md:hidden bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className='relative'>
      <h3 className="font-roboto text-lg pb-7 font-bold" id="contact">Contact</h3>
      <div>
        <div>
          <p className='font-roboto flex justify-center'>
           Let's have a chat! Want to work together or have any questions? Send me an email or connect on LinkedIn.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md md:px-4 px-2  py-2 md:mx-5 mx-1 text-sm">
            <a href="https://github.com/sihbackes" target="_blank"><BsGithub className="inline-block mx-2 text-white"/>GitHub</a> 
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md md:px-4 px-2  py-2 md:mx-5 mx-1 text-sm">
            <a href="https://www.linkedin.com/in/simone-backes/" target="_blank"><BsLinkedin className="inline-block mx-2 text-white "/> Linkedin</a>
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md md:px-4 px-2 py-2 md:mx-5 mx-1 text-sm">
            <a href="mailto:simonebackesv@gmail.com"><MdEmail className="inline-block mx-2 text-white"/> Email</a>
          </button>

                     
        </div>
      </div>
      </div>
    </section>
  )
}