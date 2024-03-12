import React from 'react'
import RECIPES from '../constants/constants';

const Recipes = () => {



  return (
    <>
  <div className='flex flex-col w-full mt-16 bg-dungeon text-white'>
    <h1 className='mx-auto py-10 text-4xl font-bold'>Recipes</h1>
    <div className='max-w-full flex flex-row items-center justify-evenly p-10'>
        <img src={RECIPES.KAKIAGE.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>{RECIPES.KAKIAGE.NAME}</h1>
            <p className='font-medium text-xl pb-5'>{RECIPES.KAKIAGE.DESCRIPTION}</p>
            <a href="/dish" className='font-medium text-xl hover:font-bold'>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2">View Recipe</button>
            </a>
        </div>
    </div>

    <div className='max-w-full flex flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center w-1/4'>
          <h1 className='text-3xl font-bold pb-5'>{RECIPES.ROASTBASILISK.NAME}</h1>
          <p className='font-medium text-xl pb-5'>{RECIPES.ROASTBASILISK.DESCRIPTION}</p>
          <a href="/dish" className='font-medium text-xl hover:font-bold'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2">View Recipe</button>
          </a>
        </div>
        <img src={RECIPES.ROASTBASILISK.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

  </div>
</>
  )
}

export default Recipes