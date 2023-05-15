// @ts-nocheck
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function MealsList() {
  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {meals.map((meal) => (
        <li
          key={meal.id}
          className='flex items-center justify-between gap-x-6 py-5'
        >
          <div className='min-w-0'>
            <div className='flex items-start gap-x-3'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                {meal.name}
              </p>
              <p
                className={classNames(
                  statuses[meal.status],
                  'rounded-md whitespace-nowrap mt-0.5 px-2 py-0.5 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {meal.status}
              </p>
            </div>
          </div>
          <div className='flex flex-none items-center gap-x-4'>
            <Link
              href={meal.href}
              className='hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block'
            >
              Add Food<span className='sr-only'>, {meal.name}</span>
            </Link>
            <Menu as='div' className='relative flex-none'>
              <Menu.Button className='-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900'>
                <span className='sr-only'>Open options</span>
                <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className='sr-only'>, {meal.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Move<span className='sr-only'>, {meal.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Delete<span className='sr-only'>, {meal.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
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
