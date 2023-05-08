import LoginForm from '@/features/auth/'
import { redirect } from 'next/navigation'

export default async function loginPage() {
  // const user = localStorage.getItem('user')
  return (
    <div className='flex w-full justify-center'>
      <div className='md:max-w-7xl'></div>
      <LoginForm />
    </div>
  )
}
