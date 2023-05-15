// @ts-nocheck
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

import { link } from 'fs'
import MealType from './mealType'
import StackedCardsLayout from '@/components/layouts/stackedCards'

export default function MealsList() {
  const [userMeals, setUserMeals] = useState([])
  // GET user's meals
  const token = JSON.parse(localStorage.getItem('user')).token
  const fetchMeals = async () => {
    fetch('http://localhost:4001/api/meals', {
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

  return (
    <>
      <StackedCardsLayout>
        <MealType userMeals={userMeals} mealType={'breakfast'} />
        <MealType userMeals={userMeals} mealType={'lunch'} />
        <MealType userMeals={userMeals} mealType={'dinner'} />
        <MealType userMeals={userMeals} mealType={'snack'} />
      </StackedCardsLayout>
    </>
  )
}

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}
const meals = [
  {
    id: 1,
    name: 'Breakfast',
    href: '/diary/add-to-diary/breakfast',
    status: 'Complete',
    createdBy: 'Leslie Alexander',
    dueDate: 'March 17, 2023',
    dueDateTime: '2023-03-17T00:00Z',
  },
  {
    id: 2,
    name: 'Lunch',
    href: '/diary/add-to-diary/lunch',
    status: 'In progress',
    createdBy: 'Leslie Alexander',
    dueDate: 'May 5, 2023',
    dueDateTime: '2023-05-05T00:00Z',
  },
  {
    id: 3,
    name: 'Dinner',
    href: '/diary/add-to-diary/dinner',
    status: 'In progress',
    createdBy: 'Courtney Henry',
    dueDate: 'May 25, 2023',
    dueDateTime: '2023-05-25T00:00Z',
  },
  {
    id: 4,
    name: 'Snacks',
    href: '/diary/add-to-diary/snacks',
    status: 'In progress',
    createdBy: 'Leonard Krasner',
    dueDate: 'June 7, 2023',
    dueDateTime: '2023-06-07T00:00Z',
  },
]
