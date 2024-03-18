import React from 'react'

const Characters = () => {
  return (
<>
  <div className='flex flex-col w-full md:mt-16 bg-dungeon-light text-white'>
    <div id="main" className='flex flex-row  items-center justify-evenly p-10 font-medium'>
        <a href="#main" className=' text-3xl hover:font-bold hover:bg-dungeon-super-light border-2 py-2 px-5 rounded-lg'>Main</a>
        <a href="#supporting" className=' text-3xl hover:font-bold hover:bg-dungeon-super-light border-2 py-2 px-5 rounded-lg'>Supporting</a>
    </div>
    <h1 className='mx-auto py-5  text-4xl font-bold'>Main Characters</h1>
    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src="https://inasianspaces.files.wordpress.com/2024/01/laios-tries-to-encourage-marcille-to-eat-monsters-delicious-in-dungeon-episode-1.png?w=1200" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Laios</h1>
            <p className='font-medium text-xl'>Laios is a very strong fighter and the leader of the party. He often uses the knowledge gained from cooking monsters to develop techniques to defeat them, and is a quick thinker who comes up with full plans on the fly.</p>
        </div>
    </div>

    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Marcille</h1>
            <p className='font-medium text-xl'>Marcille is intelligent, principled, and loyal to her friends. Despite this, she can also be very high-strung and has a difficult time dealing with things far outside her comfort zone (such as eating monsters).</p>
        </div>
        <img src="https://a.storyblok.com/f/178900/750x422/abd3f0d58d/dungeonmeshi_01_02.jpg/m/filters:quality(95)format(webp)" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src="https://static.animecorner.me/2023/12/1703852604-818.png" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Chilchuck</h1>
            <p className='font-medium text-xl'>Chilchuck is shrewd and practical, rarely taking jobs from adventurers unless he is paid in advance. This behavior was learned from his experiences of being exploited as a Half-foot.</p>
        </div>
    </div>

    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Senshi</h1>
            <p className='font-medium text-xl'>Senshi has a very traditional and obstinate personality. Since he has spent ten years learning how to eat monsters in the dungeon he can be very set in his ways, leading to clashes with other party members (especially Marcille and occasionally Chilchuck).</p>
        </div>
        <img src="https://pbs.twimg.com/media/GDAreVubYAE2SVW.jpg:large" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

    <h1 id="supporting" className='mx-auto py-10 text-white text-4xl font-bold'>Supporting Characters</h1>
    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src="https://inasianspaces.files.wordpress.com/2024/01/falin-touden-delicious-in-dungeon-episode-1.png?w=1024" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Falin</h1>
            <p className='font-medium text-xl'>Falin is a very kind person who doesn't want to hurt others. She extends this kindness even to the restless dead, casting wards on her party to avoid encounters instead of dispelling the ghosts altogether.</p>
        </div>
    </div>

    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Namari</h1>
            <p className='font-medium text-xl'>Before their failed fight against the Red Dragon, Namari seems impatient and brash. She seems to enjoy fighting, leaping at the chance to rough up the possessed body of a missing adventurer to get at the ghost holding him.</p>
        </div>
        <img src="https://preview.redd.it/namari-looks-so-pretty-in-the-trailer-v0-oay5wqvzp6sb1.jpg?width=1080&crop=smart&auto=webp&s=1229bf1526a22d5cc2351e730016ba3558e0d0b8" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

  </div>
</>
  )
}



export default Characters