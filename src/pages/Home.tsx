import React from 'react'

const Home = () => {
  return (
<>
  <div className='flex flex-col'>
    <div className="w-full h-auto mt-16">
      <img src="https://images4.alphacoders.com/134/1348242.jpeg" alt="" className="w-full h-auto"/>
      <div className="absolute inset-0 flex flex-col ml-36 mt-72 w-1/2">
        <h1 className="text-white text-7xl font-bold">Delicious in Dungeon</h1>
        <p className="text-white text-4xl font-bold py-5">One sentence hook, get ready for an adventure!</p>
        <a href="#trailer">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-1/6">Watch Trailer</button>
        </a>
      </div>
    </div>

    <div className='w-full h-auto max-w-full flex flex-row align-middle justify-center md:h-[480px] py-10' id="trailer">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/aXfVHMILKJg" title="Delicious in Dungeon | Official Trailer 2 | Netflix" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>

    <div className='w-full h-auto max-w-full flex flex-row'>
      <img src="https://static.zerochan.net/Dungeon.Meshi.1024.3971909.webp" alt="" className='w-1/6 h-auto'/>
      <div className='flex flex-col'>
        <h1>Embrace Food!</h1>
        <p>bunch of nonsense</p>
      </div>
    </div>
  </div>
</>
  )
}



export default Home