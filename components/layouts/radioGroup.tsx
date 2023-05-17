import { useState } from 'react'

const RadioGroup = ({ category }: any) => {
  const [selection, setSelection] = useState('')

  function handleSelection(e: React.ChangeEvent<HTMLInputElement>) {
    setSelection(e.target.value)
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    category(selection)
  }

  return (
    <div>
      <label className='text-base font-semibold text-gray-900'>
        Food category
      </label>
      <p className='text-sm text-gray-500'>
        Please select the type of food you are searching for.
      </p>
      <fieldset className='mt-4'>
        <legend className='sr-only'>Notification method</legend>
        <div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
          <div className='flex flex-col md:flex-row gap-2 md:items-center'>
            {categories.map((category) => (
              <div key={category.id} className='flex  items-center mr-4'>
                <input
                  id={category.id}
                  name='category'
                  type='radio'
                  onChange={handleSelection}
                  value={category.title}
                  defaultChecked={category.id === 'foods'}
                  className='h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600'
                />
                <label
                  htmlFor={category.id}
                  className='ml-3 block text-sm font-medium leading-6 text-gray-900'
                >
                  {category.id}
                </label>
              </div>
            ))}
            <button
              onClick={handleClick}
              className='bg-orange-600 p-2 w-24 rounded-md mt-2  text-center text-white text-xs md:ml-4'
            >
              Save category
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default RadioGroup

const categories = [
  { id: 'Generic foods', title: 'generic-foods' },
  { id: 'Generic meals', title: 'generic-meals' },
  { id: 'Fast food', title: 'fast-food' },
  { id: 'Packaged foods', title: 'packaged-foods' },
]
