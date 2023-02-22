import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Project } from "./components/Project"
import { Contact } from "./components/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="dark:bg-zinc-800 dark:text-gray-300">
      <div className="px-10 lg:max-w-6xl mx-auto ">
      <BrowserRouter>
         <NavBar/>
         <Home/>
         <About/>
         <Project/>
         <Contact/>
      </BrowserRouter>

    </div>
    </div>

  )
}

export default App
