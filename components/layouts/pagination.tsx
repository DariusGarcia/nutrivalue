import { useState } from 'react'
import data from '../../foodSearch.json'
import capitalize from '@/utils/capitalize'

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const parsedFood = data.hints

  const itemsPerPage = 5 // Number of items to show per page
  const totalItems = parsedFood.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Calculate start and end indices of items to display
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = parsedFood.slice(startIndex, endIndex)

  const handlePrevPage = (e: any) => {
    e.preventDefault()
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleNextPage = (e: any) => {
    e.preventDefault()
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      <h4 className='text-lg mb-6 font-bold'>Similar results</h4>
      <div>
        {/* Render current page items */}
        <ul className='md:grid md:grid-cols-2 flex flex-col gap-4'>
          {currentItems.map((item: any) => (
            <li className='flex flex-row gap-2 text-md ' key={item.food.label}>
              <img
                className='h-24 w-24 flex-none rounded-md bg-gray-50'
                src={item.food.image}
                alt='food results'
              />
              <section className='flex flex-col gap-2 w-full'>
                <p className='font-semibold'>{capitalize(item.food.knownAs)}</p>
                <button className='p-2 w-24 rounded-md border border-orange-600 hover:bg-orange-500 transition ease-in-out hover:text-white'>
                  View more
                </button>
              </section>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <nav
          className='flex items-center justify-between mt-8 border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
          aria-label='Pagination'
        >
          <div className='hidden sm:block'>
            <p className='text-sm text-gray-700'>
              Showing <span className='font-medium'>{startIndex + 1}</span> to{' '}
              <span className='font-medium'>
                {endIndex > totalItems ? totalItems : endIndex}
              </span>{' '}
              of <span className='font-medium'>{totalItems}</span> results
            </p>
          </div>
          <div className='flex flex-1 justify-between sm:justify-end'>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className='relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0'
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0'
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Pagination

{
  /* <div className='grid grid-cols-2 gap-4'>
<article className=''>
  <p>Cals</p>
  <p className='w-full   text-sm'>
    {item.food.nutrients.ENERC_KCAL}
  </p>
</article>
<article className=''>
  <p>Protein</p>
  <p className='w-full   text-sm'>
    {item.food.nutrients.PROCNT}
  </p>
</article>
<article className='w-full  gap-2'>
  <p>Carbs</p>
  <p className='w-full text-sm'>{item.food.nutrients.CHOCDF}</p>
</article>
<article className=''>
  <p>Fats</p>
  <p className='w-full   text-sm  text-gray-900'>
    {item.food.nutrients.FAT}
  </p>
</article>
</div> */
}
