// @ts-nocheck
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import RadioGroup from '../layouts/radioGroup'
import addHyphen from '@/utils/addHyphen'
import SearchResultCard from '@/features/food/searchResultCard'
import ErrorNotification from '../notications/error'
import ErrorAlert from '../alerts/errorAlert'

const FlyOut = () => {
  const [open, setOpen] = useState(true)
  const [foodSearch, setFoodSearch] = useState('')
  const [categorySelection, setCategorySelection] = useState('')
  const [searchedFoodData, setSearchedFoodData] = useState([])
  const [searchError, setSearchError] = useState(false)

  const handleDataFromChild = (data: any) => {
    setCategorySelection(data)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const food = e.target.value
    setFoodSearch(food)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const searchResults = await fetchFoodAPI()
    if (searchResults.parsed.length === 0) {
      setSearchError(!searchError)
      return
    } else {
      setSearchedFoodData(searchResults)
      setSearchError(false)
    }
  }

  async function fetchFoodAPI() {
    const token = JSON.parse(localStorage.getItem('user'))?.token || '{}'
    const backendURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

    const response = await fetch(`${backendURL}api/food/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        ingr: addHyphen(foodSearch),
        nutritionType: 'cooking',
        category: categorySelection,
      }),
    })
    const data = await response.json()
    return data
  }

  console.log(searchedFoodData)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10 ' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden '>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 '>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-4xl'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white py-6  shadow-xl'>
                    <div className='px-4 sm:px-6'></div>
                    <div className='relative flex-1 px-4 sm:px-6'>
                      <form className='flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl'>
                        <div className='h-0 flex-1 overflow-y-auto'>
                          <div className='bg-orange-700 px-4 py-6 sm:px-6 rounded-md'>
                            <div className='flex items-center justify-between'>
                              <Dialog.Title className='text-base font-semibold leading-6 text-white'>
                                Search for a recipe
                              </Dialog.Title>
                              <div className='ml-3 flex h-7 items-center'>
                                <button
                                  type='button'
                                  className='rounded-md bg-orange-700 text-orange-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                                  onClick={() => setOpen(false)}
                                >
                                  <span className='sr-only'>Close panel</span>
                                  <XMarkIcon
                                    className='h-6 w-6'
                                    aria-hidden='true'
                                  />
                                </button>
                              </div>
                            </div>
                            <div className='mt-1'>
                              <p className='text-sm text-orange-300'>
                                Get started by filling in a recipe to search our
                                database of foods.
                              </p>
                            </div>
                          </div>
                          <div className='flex flex-1 flex-col justify-between'>
                            <div className='divide-y divide-gray-200 px-4 sm:px-6'>
                              <div className='space-y-6 pb-5 pt-6 flex flex-col w-full items-start'>
                                <div>
                                  <label
                                    htmlFor='project-name'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                  >
                                    Enter recipe or food name
                                  </label>
                                  <div className='mt-2 mb-4'>
                                    <input
                                      type='text'
                                      name='project-name'
                                      id='project-name'
                                      value={foodSearch}
                                      onChange={handleInputChange}
                                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                                    />
                                  </div>
                                </div>
                                <RadioGroup category={handleDataFromChild} />
                                <button
                                  onClick={handleSubmit}
                                  disabled={
                                    categorySelection === '' ? true : false
                                  }
                                  className={
                                    categorySelection === ''
                                      ? 'w-24 bg-orange-900  text-white p-2 rounded-md'
                                      : 'w-24 bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-md'
                                  }
                                >
                                  Search
                                </button>
                                <div className='justify-start w-full'>
                                  {searchError && (
                                    <ErrorAlert message='No food results found! Please refine search and try again.' />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          {searchedFoodData.length != 0 && (
                            <SearchResultCard
                              searchedFoodData={searchedFoodData}
                            />
                          )}
                        </div>
                        <div className='flex flex-shrink-0 justify-end px-4 py-4'>
                          <button
                            type='button'
                            className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type='submit'
                            className='ml-4 inline-flex justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default FlyOut
