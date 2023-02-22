import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Project } from "./components/Project"
import { Contact } from "./components/Contact"


function App() {

  return (
    <div className="dark:bg-zinc-800 dark:text-gray-300">
      <div className="px-10 lg:max-w-6xl mx-auto ">
       <NavBar/>
       <Home/>
       <About/>
       <Project/>
       <Contact/>
    </div>
    </div>

  )
}

export default App
