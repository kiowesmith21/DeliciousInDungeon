import React from 'react'
import RECIPES from '../constants/constants';
import { Link } from 'react-router-dom';
import { useDishContext } from '../config/DishContext';

const Recipes = () => {

  const { updateDish } = useDishContext();

  function handleClick(newName: string, newDesc: string, newRecipe: string, newImage: string) {
    updateDish(newName, newDesc, newRecipe, newImage)
  }

  return (
    <>
  <div className='flex flex-col w-full md:mt-16 bg-dungeon-light  text-white'>
    <h1 className='mx-auto py-10 text-4xl font-bold'>Recipes</h1>
    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src={RECIPES.KAKIAGE.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>{RECIPES.KAKIAGE.NAME}</h1>
            <p className='font-medium text-xl pb-5'>{RECIPES.KAKIAGE.DESCRIPTION}</p>
            <Link to="/dish" className='font-medium text-xl hover:font-bold'>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(RECIPES.KAKIAGE.NAME, RECIPES.KAKIAGE.DESCRIPTION, RECIPES.KAKIAGE.RECIPE, RECIPES.KAKIAGE.IMAGE)}>View Recipe</button>
            </Link>
        </div>
    </div>

    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
          <h1 className='text-3xl font-bold pb-5'>{RECIPES.ROASTBASILISK.NAME}</h1>
          <p className='font-medium text-xl pb-5'>{RECIPES.ROASTBASILISK.DESCRIPTION}</p>
          <Link to="/dish" className='font-medium text-xl hover:font-bold'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(RECIPES.ROASTBASILISK.NAME, RECIPES.ROASTBASILISK.DESCRIPTION, RECIPES.ROASTBASILISK.RECIPE, RECIPES.ROASTBASILISK.IMAGE)}>View Recipe</button>
          </Link>
        </div>
        <img src={RECIPES.ROASTBASILISK.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src={RECIPES.BASILISKOMELET.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>{RECIPES.BASILISKOMELET.NAME}</h1>
            <p className='font-medium text-xl pb-5'>{RECIPES.BASILISKOMELET.DESCRIPTION}</p>
            <Link to="/dish" className='font-medium text-xl hover:font-bold'>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(RECIPES.BASILISKOMELET.NAME, RECIPES.BASILISKOMELET.DESCRIPTION, RECIPES.BASILISKOMELET.RECIPE, RECIPES.BASILISKOMELET.IMAGE)}>View Recipe</button>
            </Link>
        </div>
    </div>

    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
          <h1 className='text-3xl font-bold pb-5'>{RECIPES.SCORPIONHOTPOT.NAME}</h1>
          <p className='font-medium text-xl pb-5'>{RECIPES.SCORPIONHOTPOT.DESCRIPTION}</p>
          <Link to="/dish" className='font-medium text-xl hover:font-bold'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(RECIPES.SCORPIONHOTPOT.NAME, RECIPES.SCORPIONHOTPOT.DESCRIPTION, RECIPES.SCORPIONHOTPOT.RECIPE, RECIPES.SCORPIONHOTPOT.IMAGE)}>View Recipe</button>
          </Link>
        </div>
        <img src={RECIPES.SCORPIONHOTPOT.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src={RECIPES.LIVINGARMORSTIRFRY.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>{RECIPES.LIVINGARMORSTIRFRY.NAME}</h1>
            <p className='font-medium text-xl pb-5'>{RECIPES.LIVINGARMORSTIRFRY.DESCRIPTION}</p>
            <Link to="/dish" className='font-medium text-xl hover:font-bold'>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(RECIPES.LIVINGARMORSTIRFRY.NAME, RECIPES.LIVINGARMORSTIRFRY.DESCRIPTION, RECIPES.LIVINGARMORSTIRFRY.RECIPE, RECIPES.LIVINGARMORSTIRFRY.IMAGE)}>View Recipe</button>
            </Link>
        </div>
    </div>

    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
          <h1 className='text-3xl font-bold pb-5'>{RECIPES.BOILEDMIMIC.NAME}</h1>
          <p className='font-medium text-xl pb-5'>{RECIPES.BOILEDMIMIC.DESCRIPTION}</p>
          <Link to="/dish" className='font-medium text-xl hover:font-bold'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(RECIPES.BOILEDMIMIC.NAME, RECIPES.BOILEDMIMIC.DESCRIPTION, RECIPES.BOILEDMIMIC.RECIPE, RECIPES.BOILEDMIMIC.IMAGE)}>View Recipe</button>
          </Link>
        </div>
        <img src={RECIPES.BOILEDMIMIC.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

  </div>
</>
  )
}

export default Recipes