'use client'
import React, { useState } from 'react'
import AuthHandler from '@/lib/userAuth'
import { redirect } from 'next/navigation'
import ErrorNotification from '@/components/notications/error'
import SuccessNotification from '@/components/notications/success'
import Link from 'next/link'

// redirect if user is already logged in
// AuthHandler.loggedIn() && redirect('/diary')

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser(username, password)
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  async function loginUser(username: string, password: string) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL
    const headersOptions = { 'Content-Type': 'application/json' }

    const user: any = await fetch(`${baseUrl}api/user/signup`, {
      method: 'POST',
      headers: headersOptions,
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((user) => user.json())
      .catch((err) => console.log(err))
    if (user.username) {
      setSuccess(true)
      setTimeout(() => {
        if (user.username) {
          window.location.assign('/login')
        }
      }, 1500)
    } else {
      setError(user.error)
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }

  return (
    <>
      <div className='flex min-h-full flex-col justify-center py-8 sm:px-6 lg:px-8 w-full md:max-w-3xl '>
        {success && (
          <SuccessNotification
            message1={'Successfully created an account!'}
            message2={'redirecting to login page'}
          />
        )}
        {error && (
          <ErrorNotification message1={error} message2='' status='error' />
        )}
        <div className='sm:mx-auto '>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Create a free account
          </h2>
        </div>
        <div className='w-full'>
          <div className='mt-8 '>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 '>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Username
                  </label>
                  <div className='mt-2'>
                    <input
                      id='username'
                      name='username'
                      type='text'
                      autoComplete='username'
                      required
                      value={username}
                      onChange={handleUsernameChange}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='mt-4'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Password
                  </label>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between my-4'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600'
                    />
                    <label
                      htmlFor='remember-me'
                      className='ml-2 block text-sm text-gray-900'
                    >
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm'>
                    <a
                      href='#'
                      className='font-medium text-orange-600 hover:text-orange-500'
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                  >
                    Sign Up
                  </button>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm'>Already have an account?</p>
                  <Link
                    href='/login'
                    className='flex w-56 justify-center rounded-md border border-orange-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-orange-500 hover:text-white transition ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupForm
