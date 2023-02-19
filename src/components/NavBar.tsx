import {FiMenu} from 'react-icons/fi'

export const NavBar = () => {
return(
<header>
    <div className="flex w-full px-3 md:px-20 py-5 border-b border-gray-100">
     <div className="container flex items-center mx-auto">
      <div className="flex justify-end flex-1 md:hidden text-2xl">
       <FiMenu/>
      </div>
      <div className="items-end flex-1 hidden md:flex">
        <nav className="flex-1">
          <ul className="flex justify-end flex-1">
            <li className="px-5">
              <a href="#">About me</a>
              </li>
            <li className="px-5">
              <a href="#" >Experience</a>
            </li>
            <li className="px-5">
              <a href="#" >Projects</a>
            </li>
          </ul>
        </nav>
      </div>
     </div>
    </div>
</header>
)
}