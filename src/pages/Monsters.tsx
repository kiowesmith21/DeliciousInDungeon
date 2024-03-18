import React from 'react'
import { Link } from 'react-router-dom'
import RECIPES, { MONSTERS } from '../constants/constants';
import { useDishContext } from '../config/DishContext';

const Monsters = () => {

  const { updateDish } = useDishContext();

  function handleClick(newName: string, newDesc: string, newRecipe: string, newImage: string) {
    updateDish(newName, newDesc, newRecipe, newImage)
  }

  return (
    <>
  <div className='flex flex-col w-full md:mt-16 bg-dungeon-light text-white'>
    <h1 className='mx-auto py-10 text-4xl font-bold'>Monsters</h1>
    <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
        <img src={MONSTERS.BIGBAT.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>{MONSTERS.BIGBAT.NAME}</h1>
            <p className='font-medium text-xl pb-5'>{MONSTERS.BIGBAT.DESCRIPTION}</p>
            <p className='font-medium text-xl underline'>Used In: </p> <Link to="/dish" className='font-medium text-xl hover:font-bold' onClick={() => handleClick(RECIPES.KAKIAGE.NAME, RECIPES.KAKIAGE.DESCRIPTION, RECIPES.KAKIAGE.RECIPE, RECIPES.KAKIAGE.IMAGE)}>{RECIPES.KAKIAGE.NAME}</Link>
        </div>
    </div>
    <div className='max-w-full flex flex-col-reverse md:flex-row items-center justify-evenly p-10'>
        <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='text-3xl font-bold pb-5'>{MONSTERS.BASILISK.NAME}</h1>
            <p className='font-medium text-xl pb-5'>{MONSTERS.BASILISK.DESCRIPTION}</p>
            <p className='font-medium text-xl underline'>Used In: </p> <Link to="/dish" className='font-medium text-xl hover:font-bold' onClick={() => handleClick(RECIPES.ROASTBASILISK.NAME, RECIPES.ROASTBASILISK.DESCRIPTION, RECIPES.ROASTBASILISK.RECIPE, RECIPES.ROASTBASILISK.IMAGE)}>{RECIPES.ROASTBASILISK.NAME}</Link>
        </div>
        <img src={MONSTERS.BASILISK.IMAGE} alt="" 
        className='border-4 border-dungeon-dark w-1/2'/>
    </div>

  </div>
</>
  )
}

export default Monsters