// @ts-nocheck
'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import MacroStats from './dashboard/macroStats'
import MealsList from './dashboard/mealsList'
import Breadcrumbs from '@/components/header/breadcrumbs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dashboard = () => {
  return (
    <>
      <div className='h-full'>
        <Popover as='header' className='bg-orange-600 pb-24'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='relative flex items-center justify-center py-5 lg:justify-between'>
                  {/* Right section on desktop */}

                  {/* Menu button */}
                  <div className='absolute right-0 flex-shrink-0 lg:hidden'></div>
                </div>
                <div className='hidden border-t border-white border-opacity-20 py-5 lg:block'>
                  <div className='grid grid-cols-3 items-center gap-8'>
                    <div className='col-span-2'>
                      <nav className='flex space-x-4 md:ml-4'>
                        <Breadcrumbs
                          urls={[{ name: 'Diary', href: '/diary' }]}
                        />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Popover>

        <main className='-mt-24 pb-8'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='sr-only'>Diary dashboard</h1>
            {/* Main 3 column grid */}
            <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-1 lg:gap-8'>
              {/* Left column */}
              <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                <section aria-labelledby='section-1-title'>
                  <h2 className='sr-only' id='section-1-title'>
                    Section title
                  </h2>
                  <div className='overflow-hidden rounded-lg'>
                    <div className='py-2 md:p-4 h-full'>
                      <MacroStats />
                      <MealsList />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Diary', href: '#', current: true },
  { name: 'Recipes', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default Dashboard
