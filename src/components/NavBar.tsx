import {FiMenu} from 'react-icons/fi'
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

return(
<header>
    <div className="flex w-full px-3 md:px-20 py-5 border-b border-gray-100 font-roboto">
     <div className="container flex items-center mx-auto">
      <div className="flex justify-end flex-1 md:hidden text-2xl">
       <FiMenu onClick={toggleMenu}/>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white w-48 py-2 mt-12 rounded-lg shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 border-b border-gray-100"
          >
            About me
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 border-b border-gray-100"
          >
            Projects
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 border-b border-gray-100"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 "
          >
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
             <span className="border-r border-zinc-800"></span>
            </li>
            <li className="px-5">
            <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
     </div>
    </div>
    {/* <div>
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMenu}
      >
        <FiMenu/>
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white w-48 py-2 mt-12 rounded-lg shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </div> */}
    
</header>
)
}