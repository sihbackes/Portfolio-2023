import { Carousel } from "./Carousel"

export const Experience = () => {
    return (
        <main className="border-b border-gray-100 py-9 md:py-32 dark:border-zinc-600">
          <div>
            <h3 className="font-roboto text-lg pb-7 font-bold" id="experience">Experience</h3>
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
                <Carousel/>
            </div>
          </div>
      </main>
    )
}