import { NavBar } from "./NavBar"
import { Banner } from "./Banner"
import { About } from "./About"
import { Project } from "./Project"
import { Contact } from "./Contact"
import { FloatingIcons } from "./FloatingIcons"
import { Footer } from "./Footer"
import { Experience } from "./Experience"


export const Home = () => {
  return(
    <div className="dark:bg-zinc-800 dark:text-gray-300">
   
    <FloatingIcons/>
   <div className="px-10 lg:max-w-6xl mx-auto ">
       <NavBar/>
       <Banner/>
       <About/>
       <Experience/>
       <Project/>
       <Contact/>
       <Footer/>
   </div>
  </div>
  )
}