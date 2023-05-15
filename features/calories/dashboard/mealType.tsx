// @ts-nocheck
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import capitalize from '@/utils/capitalize'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function filterCategories(data: any[], type: string) {
  const filteredData = data.filter((item) => item.category === type)
  return filteredData
}

export default function MealType({ userMeals, mealType }: any) {
  const checkbox = useRef(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedMeals, setSelectedMeals] = useState([])

  let token
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user'))
    token = user ? user.token : null
  }

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedMeals.length > 0 && selectedMeals.length < userMeals.length
    setChecked(selectedMeals.length === userMeals.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedMeals])

  function toggleAll() {
    setSelectedMeals(checked || indeterminate ? [] : userMeals)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  async function handleDeleteMeals() {
    const mealIds = selectedMeals
      .filter((meal) => meal.category === mealType) // Add category filter
      .map((meal) => meal.id)
    const response = await fetch('http://localhost:4001/api/meals', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({ mealIds }),
    })

    if (!response.ok) {
      throw new Error('Failed to delete meals')
    }

    const data = await response.json()
    window.location.reload()
    return data
  }

  return (
    <>
      <div className='px-4 '>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              {capitalize(mealType)}
            </h1>
          </div>
          <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
            <Link
              href='/diary/add-to-diary/meal'
              className='block rounded-md bg-orange-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
            >
              Add item
            </Link>
          </div>
        </div>
        <div className='flow-root'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='relative'>
                {selectedMeals.length > 0 && (
                  <form className='absolute left-14 top-0 flex h-12 items-center space-x-3  sm:left-12'>
                    <button
                      type='button'
                      onClick={handleDeleteMeals}
                      className='inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                    >
                      Delete
                    </button>
                  </form>
                )}
                <table className='min-w-full table-fixed divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th scope='col' className='relative px-7 sm:w-12 sm:px-6'>
                        <input
                          type='checkbox'
                          className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600'
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope='col'
                        className='min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                      >
                        Meal
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Calories
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Protein
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Carbs
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Fats
                      </th>
                      <th scope='col' className='relative py-3.5 pl-3 '>
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    <>
                      {userMeals.length === 0 ? (
                        <tr className='h-12'></tr>
                      ) : (
                        <>
                          {filterCategories(userMeals, mealType).map((meal) => (
                            <tr
                              key={meal.id}
                              className={
                                selectedMeals.includes(meal)
                                  ? 'bg-orange-50'
                                  : undefined
                              }
                            >
                              <td
                                className='relative px-7 sm:w-12 sm:px-6'
                                key={meal.id}
                              >
                                {selectedMeals.includes(meal) && (
                                  <div className='absolute inset-y-0 left-0 w-0.5 bg-orange-600' />
                                )}
                                <input
                                  type='checkbox'
                                  className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600'
                                  value={meal}
                                  checked={selectedMeals.includes(meal)}
                                  onChange={(e) =>
                                    setSelectedMeals(
                                      e.target.checked
                                        ? [...selectedMeals, meal]
                                        : selectedMeals.filter(
                                            (m) => m !== meal
                                          )
                                    )
                                  }
                                />
                              </td>
                              <td
                                className={classNames(
                                  'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                  selectedMeals.includes(meal)
                                    ? 'text-orange-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {meal.mealName}
                              </td>
                              <td
                                className={classNames(
                                  'px-3 py-3.5 text-sm font-medium',
                                  selectedMeals.includes(meal)
                                    ? 'text-orange-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {meal.calories}
                              </td>
                              <td
                                className={classNames(
                                  'px-3 py-3.5 text-sm font-medium',
                                  selectedMeals.includes(meal)
                                    ? 'text-orange-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {meal.protein} g
                              </td>
                              <td
                                className={classNames(
                                  'px-3 py-3.5 text-sm font-medium',
                                  selectedMeals.includes(meal)
                                    ? 'text-orange-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {meal.carbs} g
                              </td>
                              <td
                                className={classNames(
                                  'px-3 py-3.5 text-sm font-medium',
                                  selectedMeals.includes(meal)
                                    ? 'text-orange-600'
                                    : 'text-gray-900'
                                )}
                              >
                                {meal.fats} g
                              </td>
                              <td className='whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                                <a
                                  href='#'
                                  className='text-orange-600 hover:text-orange-900'
                                >
                                  Edit
                                  <span className='sr-only'>
                                    , {meal.mealName}
                                  </span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
