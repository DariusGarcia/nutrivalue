// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import calculateTotalNutritionalValue from '../../utils/calories/totalNutritionalValue'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NutritionStats = () => {
  const [userMeals, setUserMeals] = useState([])

  // GET user's meals
  let token

  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user'))
    token = user ? user.token : null
  }
  const serverURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
  const fetchMeals = async () => {
    fetch(`${serverURL}api/meals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserMeals(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  const totalNutritionalValue = {
    calories: calculateTotalNutritionalValue(userMeals, 'calories'),
    protein: calculateTotalNutritionalValue(userMeals, 'protein'),
    carbs: calculateTotalNutritionalValue(userMeals, 'carbs'),
    fats: calculateTotalNutritionalValue(userMeals, 'fats'),
  }

  const stats = [
    {
      name: 'Total Calories',
      stat: totalNutritionalValue.calories + 'cal',
      previousStat: '1002cal',
      change: '25%',
      changeType: 'increase',
    },
    {
      name: 'Total Protein',
      stat: totalNutritionalValue.protein + 'g',
      previousStat: '120g',
      change: '2.02%',
      changeType: 'increase',
    },
    {
      name: 'Total Carbs',
      stat: totalNutritionalValue.carbs + 'g',
      previousStat: '324g',
      change: '4.05%',
      changeType: 'decrease',
    },
  ]

  return (
    <div>
      <h3 className='text-xl font-semibold leading-6 text-white'>Today</h3>
      <dl className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0'>
        {stats.map((item) => (
          <div key={item.name} className='px-4 py-5 sm:p-6'>
            <dt className='text-base font-normal text-gray-900'>{item.name}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-orange-600'>
                {item.stat}
                <span className='ml-2 text-sm font-medium text-gray-500'>
                  from {item.previousStat}
                </span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
                    aria-hidden='true'
                  />
                ) : (
                  <ArrowDownIcon
                    className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500'
                    aria-hidden='true'
                  />
                )}

                <span className='sr-only'>
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default NutritionStats
