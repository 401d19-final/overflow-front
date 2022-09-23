import { useAuth } from '../contexts/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login(props) {

  const { user, login, loading, tokens, isAuthenticated } = useAuth()
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault();
    login(e.target.username.value, e.target.password.value)
  }

  useEffect(() =>{
    if (user){
      router.push('/')
    }
  }, [user, router])

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col p-3 pt-12 pb-12 m-auto my-5 space-y-5 text-center border-2 border-black rounded-md shadow-lg mt-28 shadow-black w-max'>
        <label className='flex-row mb-4 ml-8 font-bold text-m'> Username
          <input name='username' type='text' placeholder='username or email' className='mx-4 bg-gray-100' maxLength={16} />
        </label>
        
        <label className='flex-row mb-4 ml-10 font-bold text-m'> Password
          <input name='password' type='password' placeHolder='password' className='mx-4 bg-gray-100' />
        </label>
        <button type='submit' className='flex-row h-8 mx-auto font-semibold transition duration-300 ease-in-out bg-blue-300 border-blue-600 rounded-lg shadow-lg w-80 hover:-translate-y-1 hover:scale-102 hover:bg-blue-400 shadow-blue-500/50'>Login</button>
      </form>
    </>
  )
}