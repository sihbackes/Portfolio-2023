import {FiMenu} from 'react-icons/fi'
import {VscColorMode} from 'react-icons/vsc'
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [theme, setTheme] = useState("light")
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=> {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);


  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light": "dark")
  }

return(
<header>
    <div className="flex w-full px-3 md:px-20 py-5 border-b border-gray-100 font-roboto dark:border-zinc-600">
     <div className="container flex items-center mx-auto">
      <VscColorMode onClick={handleThemeSwitch}/>
      <div className="flex justify-end flex-1 md:hidden text-2xl">
       <FiMenu onClick={toggleMenu}/>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white w-48 py-2 mt-12 rounded-lg shadow-xl dark:bg-zinc-800 dark:text-gray-200">
          <a href="#" className="block px-4 py-2 text-zinc-800 border-b border-gray-100 hover:text-white hover:bg-zinc-500">
            About me
          </a>
          <a href="#" className="block px-4 py-2 text-zinc-800 border-b border-gray-100 hover:text-white hover:bg-zinc-500">
            Projects
          </a>
          <a href="#" className="block px-4 py-2 text-zinc-800 border-b border-gray-100 hover:text-white hover:bg-zinc-500">
            Contact
          </a>
          <a href="#" className="block px-4 py-2 text-zinc-800 hover:text-white hover:bg-zinc-500">
            Resume
          </a>
        </div>
      )}
      <div className="items-end flex-1 hidden md:flex">
        <nav className="flex-1">
          <ul className="flex justify-end flex-1">
            <li className="px-5">
              <a href="#">About me</a>
              </li>
            <li className="px-5">
              <a href="#" >Projects</a>
            </li>
            <li className="px-5">
              <a href="#">Contact</a>
            </li>
            <li className="px-5">
             <span className="border-r border-zinc-800 dark:border-gray-300"></span>
            </li>
            <li className="px-5">
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
     </div>
    </div>
</header>
)
}