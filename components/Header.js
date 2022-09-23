import { useAuth } from '../contexts/auth';
import Link from 'next/link'
import Logo from '../public/images/pythonlogo.PNG'
import Image from 'next/image';
function Header() {
  const { user, logout } = useAuth()
  return (
    <header className='flex justify-between items-center bg-black p-3.5'>
      <Link href={'/'}><a>
        <Image src={Logo} className="max-w-full" layout="" alt="Logo" /></a></Link>
      <h1 className='ml-0 text-4xl font-medium subpixel-antialiased tracking-widest text-white pl-52'>Code Overflow</h1>
      <div>
        <nav>
          <Link href={"/"}>
            <a className="inline-block w-20 text-white bg-red-600 p-0.5 mx-0.5 rounded-lg border-red-500 pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300">Home</a>
          </Link>
          <Link href={'/about-us'} >
            <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border-black text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">About Us</a>
          </Link>
          {
            user && <div className="inline-block bg-red-600 p-0.5 mx-0.5 rounded-lg border border-red-500 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-white">{user.username}</div>
          }
          {user ? null :
            <Link href='/sign-up'>
              <a className="inline-block w-20 text-center text-white bg-red-600 p-0.5 mx-0.5 rounded-lg border-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300">Sign Up</a>
            </Link>}
          {user ?
            <p onClick={logout} className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border-white text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">Logout</p> :
            <Link href={'/login'} >
              <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded-lg border border-black text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">Sign in</a>
            </Link>}
        </nav>
      </div>
    </header>
  );
}
export default Header;