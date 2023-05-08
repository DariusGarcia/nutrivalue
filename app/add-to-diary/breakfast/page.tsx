import SelectMealMenu from '@/components/forms/'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='mx-auto max-w-3xl mt-4 lg:mt-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-xl'>Add to breakfast</h1>
        <div className='flex flex-row gap-2 mt-4'>
          <input
            type='text'
            className='rounded-md'
            placeholder='Search for recipes'
          />
          <button className=' h-12 p-2 rounded-md bg-orange-600 text-white'>
            Search
          </button>
        </div>
        <div className=''>
          <form action='submit' className=''>
            <div className='flex flex-col gap-8 bg-gray-100 p-4 my-4 rounded-md'>
              <div className='flex flex-row justify-between'>
                <h2 className='font-bold'>Meal Name</h2>
                <SelectMealMenu />
              </div>
              <div className='flex flex-row justify-between align-center'>
                <h2 className='font-bold'>Calories</h2>
                <div className='flex flex-row h-full gap-2'>
                  <input className='p-2 rounded-md w-28' />
                  <p className=''>cal</p>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <h2 className='font-bold'>Protein</h2>
                <div className='flex flex-row h-full gap-2'>
                  <input className='p-2 rounded-md w-28 mr-2' />
                  <p className='align-center'>g</p>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <h2 className='font-bold'>Carbs</h2>
                <div className='flex flex-row h-full gap-2'>
                  <input className='p-2 rounded-md w-28 mr-2' />
                  <p className='align-center'>g</p>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <h2 className='font-bold'>Fats</h2>
                <div className='flex flex-row h-full gap-2'>
                  <input className='p-2 rounded-md w-28 mr-2' />
                  <p className='align-center'>g</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center mt-8 gap-4'>
              <button className='border-2 border-orange-600 p-2 rounded-md w-36'>
                Cancel
              </button>
              <button className='bg-orange-600 text-white p-2 rounded-md w-36'>
                Add to diary
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
