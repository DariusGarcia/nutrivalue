// @ts-nocheck
import { useEffect, useState } from 'react'
import MealType from '../features/calories/dashboard/mealType'
import StackedCardsLayout from '@/components/layouts/stackedCards'

const MealsList = () => {
  const [userMeals, setUserMeals] = useState([])

  // GET user's meals
  let token

  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user'))
    token = user ? user.token : null
  }
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

export default MealsList
