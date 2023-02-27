import {FiMenu} from 'react-icons/fi'
import {VscColorMode} from 'react-icons/vsc'
import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

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
    <div className="flex w-full  py-5 border-b border-gray-100 font-roboto dark:border-zinc-600 z-50">
     <div className="container flex items-center mx-auto z-10 cursor-pointer">
      <div className='w-6 h-6 flex justify-center items-center' onClick={handleThemeSwitch}>
      <VscColorMode />
      </div>
     
      <div className="flex justify-end flex-1 md:hidden text-2xl">
       <FiMenu onClick={toggleMenu}/>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white w-48 py-2 mt-12 rounded-lg shadow-xl dark:bg-zinc-800 dark:text-gray-200 z-10">
          <HashLink smooth to="/#about" className="block px-4 py-2 text-zinc-800 hover:text-white hover:bg-zinc-500  dark:text-gray-300" onClick={() =>{setIsOpen(false)}}>
            About me
          </HashLink >
          <HashLink smooth to="/#projects" className="block px-4 py-2 text-zinc-800  hover:text-white hover:bg-zinc-500 dark:text-gray-300" onClick={() =>{setIsOpen(false)}}>
            Projects
          </HashLink >
          <HashLink smooth to="/#contact" className="block px-4 py-2 text-zinc-800  hover:text-white hover:bg-zinc-500 dark:text-gray-300" onClick={() =>{setIsOpen(false)}}>
            Contact
          </HashLink>
          <div className="block px-4 py-2 text-zinc-800  hover:text-white hover:bg-zinc-500 dark:text-gray-300" onClick={() =>{setIsOpen(false)}}>
            <a href="/docs/SimoneBackes-cv.pdf" target="_blank">Resume</a>
          </div>
        </div>
      )}
      <div className="items-end flex-1 hidden md:flex">
        <nav className="flex-1">
          <ul className="flex justify-end flex-1">
            <li className="px-5">
              <HashLink smooth to="/#about">About me</HashLink>
              </li>
            <li className="px-5">
            <HashLink smooth to="/#projects">Projects</HashLink>
            </li>
            <li className="px-5">
            <HashLink smooth to="/#contact">Contact</HashLink>
            </li>
            <li className="px-5">
             <span className="border-r border-zinc-800 dark:border-gray-300"></span>
            </li>
            <li className="px-5">
              <a href="/docs/SimoneBackes-Resume.pdf" target="_blank">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
     </div>
    </div>
</header>
)
}