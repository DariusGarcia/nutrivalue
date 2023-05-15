import SignupForm from '@/features/auth/signup/'

export default async function LoginPage() {
  return (
    <div className='flex w-full justify-center'>
      <div className='md:max-w-7xl'></div>
      <SignupForm />
    </div>
  )
}
