import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


export const Contact = () => {
  return(
    <section className="border-b border-gray-100 py-9 md:py-32 dark:border-zinc-600 relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 right-48 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className='relative'>
      <h3 className="font-roboto text-lg pb-7 font-bold" id="contact">Contact</h3>
      <div>
        <div>
          <p className='font-roboto flex justify-center'>
           Let's have a chat! Want to work together or have any questions? Send me an email or connect on LinkedIn.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md px-4 py-2 mx-5">
            <a href="https://github.com/sihbackes" target="_blank"><BsGithub className="inline-block mx-2 text-white"/>GitHub</a> 
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md px-4 py-2 mx-5">
            <a href="https://www.linkedin.com/in/simone-backes/" target="_blank"><BsLinkedin className="inline-block mx-2 text-white"/> Linkedin</a>
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-nunito rounded-md px-4 py-2 mx-5">
            <a href="mailto:simonebackesv@gmail.com"><MdEmail className="inline-block mx-2 text-white"/> Email</a>
          </button>

                     
        </div>
      </div>
      </div>
    </section>
  )
}