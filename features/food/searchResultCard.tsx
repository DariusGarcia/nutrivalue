// @ts-nocheck
import { useState } from 'react'
import Pagination from '@/components/layouts/pagination'
import StackedList from '@/components/layouts/stackedList'
import ErrorNotification from '@/components/notications/error'
import SuccessNotification from '@/components/notications/success'

const SearchResultCard = ({ searchedFoodData }: any) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSaveRecipe(e: any) {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('user'))?.token || '{}'
    const backendURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

    const response: any = await fetch(`${backendURL}api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        image: searchedFoodData?.parsed[0].food?.image,
        label: searchedFoodData?.parsed[0].food?.label,
        category: searchedFoodData?.parsed[0].food?.category,
        protein: searchedFoodData?.parsed[0].food?.nutrients.PROCNT,
        carbs: searchedFoodData?.parsed[0].food?.nutrients.CHOCDF,
        fats: searchedFoodData?.parsed[0].food?.nutrients.FAT,
        calories: searchedFoodData?.parsed[0].food?.nutrients.ENERC_KCAL,
      }),
    })
      .then((recipe) => recipe.json())
      .catch((err) => console.log(err))

    if (response.success) {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
    } else {
      setError("Couldn't save recipe. Please try again.")
      setTimeout(() => {
        setError('')
      }, 2000)
    }
    return response
  }

  return (
    searchedFoodData.parsed && (
      <div className='bg-white mx-2 md:mx-6'>
        {success && (
          <SuccessNotification
            message1={'Successfully added recipe!'}
            message2={''}
          />
        )}
        {error && (
          <ErrorNotification message1={error} message2='' status='error' />
        )}
        <section aria-labelledby='features-heading' className='relative'>
          <div className=' overflow-hidden  lg:absolute  lg:pr-4 xl:pr-16 mt-8'>
            <img
              src={searchedFoodData && searchedFoodData?.parsed[0].food?.image}
              alt='Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen.'
              className='h-24 object-center lg:h-full lg:w-full rounded-md'
            />
          </div>

          <form className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-8'>
            <div className='lg:col-start-2'>
              <div className='flex flex-row justify-between items-start'>
                <h2 id='features-heading' className='font-medium text-gray-500'>
                  {searchedFoodData &&
                    searchedFoodData?.parsed[0].food?.category}
                </h2>
                <button
                  onClick={handleSaveRecipe}
                  className='p-2 rounded-md bg-orange-600 text-white w-24 hover:bg-orange-500'
                >
                  Add
                </button>
              </div>
              <p className='mt-4 text-4xl font-bold tracking-tight text-gray-900'>
                {searchedFoodData && searchedFoodData?.parsed[0].food?.label}
              </p>

              <dl className='mt-10 grid gap-x-8 gap-y-10 text-sm grid-cols-2'>
                <div key={searchedFoodData?.parsed[0].food?.foodId}>
                  <dt className='font-bold text-gray-900 text-lg'>Calories</dt>
                  <dt className='font-medium text-gray-900 text-lg'>
                    {searchedFoodData &&
                      searchedFoodData?.parsed[0].food?.nutrients.ENERC_KCAL}
                  </dt>
                  <dd className='mt-2 text-gray-500'></dd>
                </div>
                <div key={searchedFoodData?.parsed[0].food?.foodId}>
                  <dt className='font-bold text-gray-900 text-lg'>Protein</dt>
                  <dt className='font-medium text-gray-900 text-lg'>
                    {searchedFoodData &&
                      searchedFoodData?.parsed[0].food?.nutrients.PROCNT}
                  </dt>
                  <dd className='mt-2 text-gray-500'></dd>
                </div>
                <div key={searchedFoodData?.parsed[0].food?.foodId}>
                  <dt className='font-bold text-gray-900 text-lg'>Carbs</dt>
                  <dt className='font-medium text-gray-900 text-lg'>
                    {searchedFoodData &&
                      searchedFoodData?.parsed[0].food?.nutrients.CHOCDF}
                  </dt>
                  <dd className='mt-2 text-gray-500'></dd>
                </div>
                <div key={searchedFoodData?.parsed[0].food?.foodId}>
                  <dt className='font-bold text-gray-900 text-lg'>Fats</dt>
                  <dt className='font-medium text-gray-900 text-lg'>
                    {searchedFoodData &&
                      searchedFoodData?.parsed[0].food?.nutrients.FAT}
                  </dt>
                  <dd className='mt-2 text-gray-500'></dd>
                </div>
              </dl>
            </div>
          </form>
          {/* <StackedList food={searchedFoodData?.hints} /> */}
          {/* <StackedList /> */}
          <Pagination />
        </section>
      </div>
    )
  )
}
export default SearchResultCard
