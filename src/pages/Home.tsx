import React from 'react'

const Home = () => {
  return (
<>
  <div className='flex flex-col'>
    <div className="w-full h-auto md:mt-16">
      <img src="https://images4.alphacoders.com/134/1348242.jpeg" alt="" className="w-full h-auto"/>
      <div className="absolute inset-0 flex flex-col ml-36 mt-80 md:mt-72 w-1/2">
        <h1 className="text-white text-xl md:text-7xl font-bold">Delicious in Dungeon</h1>
        <p className="text-white md:text-4xl font-bold py-5">Dungeons, dragons… and delicious monster stew!?</p>
        <a href="#trailer">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 md:w-1/6">Watch Trailer</button>
        </a>
      </div>
    </div>

    <div className='w-full h-auto max-w-full flex flex-row align-middle justify-center py-10 bg-dungeon border-t-4 border-dungeon-dark' id="trailer">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/aXfVHMILKJg" title="Delicious in Dungeon | Official Trailer 2 | Netflix" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='border-4 border-dungeon-dark'></iframe>
    </div>

    <div className='w-full max-w-full flex flex-col md:flex-row items-center justify-evenly bg-dungeon-light p-5 border-t-4 border-dungeon-dark'>
      <img src="https://static.zerochan.net/Dungeon.Meshi.1024.3971909.webp" alt="" className='w-1/3 h-auto border-4 border-dungeon-dark'/>
      <div className='flex items-center md:items-start flex-col text-white md:w-1/3'>
        <h1 className='font-bold text-xl md:text-5xl py-2'>Food and Adventure!</h1>
        <p className='md:text-2xl'>Dungeons, dragons… and delicious monster stew!? Adventurers foray into a cursed buried kingdom to save their friend, cooking up a storm along the way.</p>
      </div>
    </div>
  </div>
</>
  )
}



export default Home