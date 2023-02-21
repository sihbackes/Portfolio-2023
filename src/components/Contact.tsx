import {BsGithub, BsLinkedin} from 'react-icons/bs'

export const Contact = () => {
  return(
    <main className="border-b border-gray-100 py-9 md:py-32">
      <div>
      <h3 className="font-roboto text-lg pb-7 font-bold">Contact</h3>
      <div>
        <p className='font-roboto'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-zinc-700 text-white font-nunito rounded-md px-4 py-2 mr-5">
            <BsGithub className="inline-block mx-2 text-white"/>GitHub
          </button>
          <button className="bg-zinc-700 text-white font-nunito rounded-md px-4 py-2">
            <BsLinkedin className="inline-block mx-2 text-white"/> Linkedin
          </button>
                     
        </div>
      </div>

      </div>
    </main>
  )
}