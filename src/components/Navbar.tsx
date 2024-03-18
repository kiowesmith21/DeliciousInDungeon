import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
    <nav className="md:fixed w-full z-20 top-0 start-0 bg-dungeon border-5px border-y-4 border-dungeon-dark">
        <div className="max-w-screen-xl  justify-between flex flex-col md:flex-row flex-wrap items-center mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://i.postimg.cc/xfjDz2r0/logo-1.png" className="h-12" alt="DinD Logo" />
            </Link>
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col items-center px-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                    <Link to="/characters" className="block text-2xl md:text-base py-1 md:py-2 px-3 text-white md:hover:font-bold md:p-0 ">Characters</Link> 
                </li>
                <li>
                    <Link to="/monsters" className="block text-2xl md:text-base md:py-2 px-3 text-white md:hover:font-bold md:p-0 ">Monsters</Link> 
                </li>
                <li>
                    <Link to="/recipes" className="block text-2xl md:text-base py-1 md:py-2 px-3 text-white md:hover:font-bold md:p-0 ">Recipes</Link> 
                </li>
                <li>
                    <Link to="/games" className="block text-2xl md:text-base md:py-2 px-3 text-white md:hover:font-bold md:p-0 ">Games</Link> 
                </li>
                </ul>
            </div>
        </div>
    </nav>
</>
  )
}

export default Navbar