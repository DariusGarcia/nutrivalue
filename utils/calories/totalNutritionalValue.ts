interface Meal {
  id: number
  category: string
  mealName: string
  calories: number
  carbs: number
  protein: number
  fats: number
  created_at: string
  updated_at: string
  userId: string
}

type NutritionalValue = 'calories' | 'carbs' | 'protein' | 'fats'

export default function calculateTotalNutritionalValue(
  meals: Meal[],
  nutritionalValue: NutritionalValue
): number {
  let totalValue = 0

  if (meals && meals.length !== 0) {
    for (const meal of meals) {
      totalValue += meal[nutritionalValue]
    }
  } else {
    const defaultMeal = {
      [nutritionalValue]: 0,
    }
    totalValue += defaultMeal[nutritionalValue]
  }

  return totalValue
}
