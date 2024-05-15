import { Carousel } from "./Carousel"
let slides = [
  "/assets/holidays1.png",
  "/assets/holidays2.png",
  "/assets/holidays3.png",
  "/assets/holidays4.png",
  "/assets/holidays5.png",
  "/assets/holidays6.png",
  "/assets/holidays7.png",
  "/assets/holidays8.png",
]
let slides2 = [
  "/assets/aquelelugarfeliz1.png",
  "/assets/aquelelugarfeliz2.png",
  "/assets/aquelelugarfeliz3.png",
  "/assets/aquelelugarfeliz4.png",
  "/assets/aquelelugarfeliz5.png",
]

export const Experience = () => {
    return (
        <main className="border-b border-gray-100 py-9 md:py-32 dark:border-zinc-600">
          <div>
            <h3 className="font-roboto text-lg my-8 font-bold" id="experience">Experience</h3>
            <div className="mb-20">
            <div className="grid grid-col-1 md:grid-cols-3">
              <div className="grid-cols-1  md:col-span-1 relative">    
                <div >
                  <p className="font-bold">Freelance Wordpress Developer </p> 
                  <p className="text-pink-400 hover:text-zinc-400"><a href="https://aquelelugarfeliz.com/" target="_blank">Aquele Lugar Feliz</a></p>
                  <p>Dec 2023 - Present </p>
                </div>
                </div>
                <div className="grid-cols-1 md:col-span-2 md:mb-0 mb-14">
                  <p className="font-roboto text-justify">
                    Crafting engaging and informative content, ensuring smooth, up-to-date WordPress site operations using Elementor expertise, optimizing for SEO, boosting visibility, tracking performance, and creating a positive online space for our audience.</p>
                </div> 
            </div>
            <div className="w-[100%] m-auto pt-11">
                <Carousel slides={slides2}/>
            </div>
            </div>
            <div className="mb-2">
            <div className="grid grid-col-1 md:grid-cols-3">
              <div className="grid-cols-1  md:col-span-1 relative">    
                <div >
                  <p className="font-bold">System Developer Intern</p> 
                  <p>Cambridge Judge Business School</p>
                  <p>Aug 2023 - Oct 2023 </p>
                </div>
                </div>
                <div className="grid-cols-1 md:col-span-2 md:mb-0 mb-14">
                  <p className="font-roboto text-justify">
                  Worked on the migration of the CJBS annual leave and sickness system from SharePoint to React and TypeScript, rebuilding the system's layouts 
                  and styles. This transformation enhanced the user experience, making it more intuitive, while also addressing and resolving issues identified by key users.
                  </p>
                </div> 
            </div>
            <div className="w-[100%] m-auto pt-11">
                <Carousel slides={slides}/>
            </div>
            </div>

          </div>
      </main>
    )
}