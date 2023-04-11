
export const About = () => {
  return(
    <main className="border-b border-gray-100 py-9 md:py-32 dark:border-zinc-600">
      <div>
        <h3 className="font-roboto text-lg pb-7 font-bold" id="about">About Me</h3>
        <div className="grid grid-col-1 md:grid-cols-3">
          <div className="grid-cols-1 md:col-span-2 md:mb-0 mb-14">
            <p className="font-roboto text-justify">
            I am originally from Brazil and currently based in the UK. I have had plenty of work experience, including hospitality and customer service, 
            but have always had a passion for technology. I decided to learn more and discovered the world of Frontend development. After studying on my 
            own for some time, I joined the Epicode bootcamp, which gave me the knowledge and confidence I needed. I consider myself responsible, patient, 
            and easy to learn. I am always looking forward to connecting with people and I love keeping a positive outlook on life and work. Now I am pursuing 
            an undergraduate degree in System Analysis and Development and am eager to develop my skills even more.
            </p>
          </div>
          <div className="grid-cols-1 mx-auto md:col-span-1 relative">   
            <img className="absolute w-48 bottom-3 right-3"  src="/assets/mypic.jpeg" alt="" />
            <div className="w-48 h-48  border border-zinc-400 "></div>
          </div>
        </div>
      </div>
    </main>
  )
}