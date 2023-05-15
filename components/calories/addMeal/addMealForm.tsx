// @ts-nocheck
import React from 'react'
import SelectMealMenu from '@/components/forms'
import { useState } from 'react'
import Stats from '@/components/calories/stats'

export default function MealForm() {
  const initialState = {
    category: 'Select the type of meal',
    mealName: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  }
  const [meal, setMeal] = useState({
    initialState,
  })
  const backendURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { name, value } = e.target
    setMeal((prevMeal) => ({
      ...prevMeal,
      [name]: value,
    }))
  }

  function handleSelectedChange(option: string) {
    setMeal((prevMeal) => ({
      ...prevMeal,
      category: option,
    }))
  }
  console.log({ mealState: meal })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('user'))?.token || '{}'

    try {
      const response = await fetch(`${backendURL}api/meals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
        body: JSON.stringify({
          category: meal.category,
          mealName: meal.mealName,
          calories: meal.calories,
          protein: meal.protein,
          carbs: meal.carbs,
          fats: meal.fats,
        }),
      })

      if (response.ok) {
        console.log('Meal added successfully')
        setMeal(initialState)
      } else {
        console.log('Failed to add meal')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
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
        <form onSubmit={handleSubmit} className=''>
          <div className='flex flex-col gap-8 bg-gray-100 p-4 my-4 rounded-md'>
            <div className='flex flex-row justify-between'>
              <h2 className='font-bold'>Meal Type</h2>
              <SelectMealMenu onChangeSelected={handleSelectedChange} />
            </div>
            <div className='flex flex-row justify-between align-center'>
              <h2 className='font-bold'>Meal Name</h2>
              <div className='flex flex-row h-full gap-2'>
                <input
                  className='p-2 rounded-md w-36'
                  name='mealName'
                  type='string'
                  value={meal.mealName}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className='flex flex-row justify-between align-center'>
              <h2 className='font-bold'>Calories</h2>
              <div className='flex flex-row h-full gap-2'>
                <input
                  className='p-2 rounded-md w-28 mr-1'
                  name='calories'
                  type='number'
                  value={meal.calories}
                  onChange={handleOnChange}
                />
                <p className=''>cal</p>
              </div>
            </div>

            <div className='flex flex-row justify-between'>
              <h2 className='font-bold'>Protein</h2>
              <div className='flex flex-row h-full gap-2'>
                <input
                  className='p-2 rounded-md w-28 mr-3'
                  name='protein'
                  type='number'
                  value={meal.protein}
                  onChange={handleOnChange}
                />
                <p className='align-center'>g</p>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <h2 className='font-bold'>Carbs</h2>
              <div className='flex flex-row h-full gap-2'>
                <input
                  className='p-2 rounded-md w-28 mr-3'
                  name='carbs'
                  type='number'
                  value={meal.carbs}
                  onChange={handleOnChange}
                />
                <p className='align-center'>g</p>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <h2 className='font-bold'>Fats</h2>
              <div className='flex flex-row h-full gap-2'>
                <input
                  className='p-2 rounded-md w-28 mr-3'
                  name='fats'
                  type='number'
                  value={meal.fats}
                  onChange={handleOnChange}
                />
                <p className='align-center '>g</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-8 gap-4'>
            <button className='border-2 border-orange-600 hover:bg-orange-500 transition ease-in-out hover:text-white p-2 rounded-md w-36'>
              Cancel
            </button>
            <button
              className={
                meal.category === 'Select the type of meal'
                  ? 'bg-orange-900 text-white p-2 rounded-md w-36'
                  : 'bg-orange-600 text-white p-2 rounded-md w-36 hover:bg-orange-500'
              }
              disabled={
                meal.category === 'Select the type of meal' ? true : false
              }
            >
              Add to diary
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
