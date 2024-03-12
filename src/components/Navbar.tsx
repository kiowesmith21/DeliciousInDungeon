import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
    <nav className="fixed w-full z-20 top-0 start-0 bg-dungeon-light border-5px border-y-4 border-dungeon-dark">
        <div className="max-w-screen-xl  justify-between flex flex-wrap items-center mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
            </Link>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                    <Link to="/characters" className="block py-2 px-3 text-white md:hover:font-bold md:p-0 ">Characters</Link> 
                </li>
                <li>
                    <Link to="/monsters" className="block py-2 px-3 text-white md:hover:font-bold md:p-0 ">Monsters</Link> 
                </li>
                <li>
                    <Link to="/recipes" className="block py-2 px-3 text-white md:hover:font-bold md:p-0 ">Recipes</Link> 
                </li>
                <li>
                    <Link to="/games" className="block py-2 px-3 text-white md:hover:font-bold md:p-0 ">Games</Link> 
                </li>
                </ul>
            </div>
        </div>
    </nav>
</>
  )
}

export default Navbar