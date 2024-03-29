import React from 'react'
import RECIPES from '../constants/constants';
import { useDishContext } from '../config/DishContext';

const Dish = () => {

    const { name, description, recipe, image } = useDishContext()

  return (
    <>
    <div className='flex flex-col w-full md:mt-16 bg-dungeon-light text-white'>
      <h1 className='mx-auto py-10 text-xl md:text-4xl font-bold'>{name}</h1>
      <p className='font-medium text-xl pb-5 px-5 md:w-5/6 mx-auto'>{description}</p>
      <div className='max-w-full flex flex-col md:flex-row items-center justify-evenly p-10'>
          <img src={image} alt="" 
          className='border-4 border-dungeon-dark w-1/2'/>
          <div className='flex flex-col items-center md:w-1/4'>
            <h1 className='mx-auto py-10 text-4xl font-bold underline'>Recipe</h1>
            <p className='font-medium text-xl pb-5'>{recipe}</p>    
          </div>
      </div>
    </div>
  </>
  )
}

export default Dish