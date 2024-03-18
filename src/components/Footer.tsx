import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full flex flex-col-reverse md:flex-row items-center justify-evenly text-white bg-dungeon py-10 border-t-4 border-dungeon-dark'>
        <div className='flex flex-col items-center'>
          <img src="https://i.postimg.cc/xfjDz2r0/logo-1.png" className="h-44" alt="DinD Logo" />
        </div>  

        <div className='flex flex-col items-center'>
          <div className='flex flex-row py-5 items-center'>
            <a href="https://kiowesmith21.github.io/" target='_blank'>
            <FontAwesomeIcon className='fa-3x pr-2' icon={faGlobe} />
            </a>
            <a href="https://kiowesmith21.github.io/" target='_blank'>
            <p className='text-3xl hover:font-bold'>Portfolio Page</p>
            </a>
          </div>
          <div className='flex flex-row py-5 items-center'>
            <div className='flex flex-row items-center justify-between'>
              <a href="https://github.com/kiowesmith21" target='_blank'>
              <FontAwesomeIcon className='fa-3x px-2' icon={faGithub} />
              </a>
              <a href="https://github.com/kiowesmith21" target='_blank'>
              <p className='text-3xl hover:font-bold'>Github</p>
              </a>
            </div>
            <div className='flex flex-row items-center justify-between ml-5'>
              <a href="https://www.linkedin.com/in/kiowe-smith/" target="_blank">
              <FontAwesomeIcon className='fa-3x px-2' icon={faLinkedin} />
              </a>
              <a href="https://www.linkedin.com/in/kiowe-smith/" target="_blank">
              <p className='text-3xl hover:font-bold'>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer