'use client'

import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const ErrorAlert = ({ message }: any) => {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {visible ? (
        <div className='rounded-md bg-red-50 p-4'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <CheckCircleIcon
                className='h-5 w-5 text-red-400'
                aria-hidden='true'
              />
            </div>
            <div className='flex flex-row ml-3 justify-between w-full items-center'>
              <h3 className='text-sm font-medium text-red-800'>{message}</h3>
              <div className=''>
                <button
                  type='button'
                  onClick={() => {
                    setVisible(!visible)
                  }}
                  className=' rounded-md bg-red-50  text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50'
                >
                  Dismiss
                </button>
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
export default ErrorAlert
