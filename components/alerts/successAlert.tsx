'use client'

import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const SuccessAlert = ({ name }: any) => {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {visible ? (
        <div className='rounded-md bg-green-50 p-4'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <CheckCircleIcon
                className='h-5 w-5 text-green-400'
                aria-hidden='true'
              />
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-green-800'>
                Item added!
              </h3>

              <div className='mt-4'>
                <div className='-mx-2 -my-1.5 flex'>
                  <Link
                    href='/diary'
                    className='rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'
                  >
                    View diary
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setVisible(!visible)
                    }}
                    className='ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}{' '}
    </>
  )
}
export default SuccessAlert
