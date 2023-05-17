// @ts-nocheck
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import food from '../../foodSearch.json'
import capitalize from '@/utils/capitalize'

const StackedList = () => {
  const parsedFood = food.hints
  return (
    <>
      <h3 className='font-bold text-lg mb-4'>Similar results</h3>
      <ul
        role='list'
        className='divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl'
      >
        {parsedFood.map((item) => (
          <li
            key={item.food.knownAs}
            className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'
          >
            <div className='flex gap-x-4'>
              <img
                className='h-24 w-24 flex-none rounded-md bg-gray-50'
                src={item.food.image}
                alt='food results'
              />
              <div className='min-w-0 flex-auto'>
                <div className='text-sm font-semibold leading-6 text-gray-900'>
                  <p>
                    <span className='absolute inset-x-0 -top-px bottom-0' />
                    {capitalize(item.food.knownAs)}
                  </p>
                </div>
                <div className='mt-1 flex text-xs leading-5 text-gray-500'>
                  <p className='relative truncate hover:underline'>
                    {/* {item?.measures[0]?.qualified[0]?.qualifiers[0].label ||
                      item.measures[0].label} */}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='hidden sm:flex sm:flex-col sm:items-end'>
                <p className='text-sm leading-6 text-gray-900'>
                  {item.food.nutrients.ENERC_KCAL}
                </p>
                {/* {item.food.lastSeen ? (
                  <p className='mt-1 text-xs leading-5 text-gray-500'>
                    Last seen{' '}
                    <time dateTime={item.food.lastSeenDateTime}>
                      {item.food.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className='mt-1 flex items-center gap-x-1.5'>
                    <div className='flex-none rounded-full bg-emerald-500/20 p-1'>
                      <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                    </div>
                    <p className='text-xs leading-5 text-gray-500'>Online</p>
                  </div>
                )} */}
              </div>
              <ChevronRightIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default StackedList

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
]
