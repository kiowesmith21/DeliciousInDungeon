import React from 'react'
import { Link } from 'react-router-dom'
import RECIPES from '../constants/constants';

const Monsters = () => {
  return (
    <>
  <div className='flex flex-col w-full mt-16 bg-dungeon text-white'>
    <h1 className='mx-auto py-10 text-4xl font-bold'>Monsters</h1>
    <div className='max-w-full flex flex-row items-center justify-evenly p-10'>
        <img src="https://i.ytimg.com/vi/W0lmuyjFTYE/maxresdefault.jpg" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Big Bat</h1>
            <p className='font-medium text-xl pb-5'>Big Bats resemble normal bats, but are much larger, about the height of a Tall-man. Their bones are a particular marvel, being light yet strong.</p>
            <p className='font-medium text-xl underline'>Used In: </p> <a href="/dish" className='font-medium text-xl hover:font-bold'>{RECIPES.KAKIAGE.NAME}</a>
        </div>
    </div>
    <div className='max-w-full flex flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>Basilisk</h1>
            <p className='font-medium text-xl pb-5'>Basilisks appear to be chickens with a snake for a tail. However, the snake's portion is actually though to be the head, since if a Basilisk is cut in half, the part with the snake head lives longer. The dividing line between head and tail is a point of contention.</p>
            <p className='font-medium text-xl underline'>Used In: </p> <a href="/recipes" className='font-medium text-xl hover:font-bold'>Recipe</a>
        </div>
        <img src="https://i.ytimg.com/vi/pbzf7-Sa3E8/maxresdefault.jpg" alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

  </div>
</>
  )
}

export default Monsters