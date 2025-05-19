import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className='flex top-[10px] justify-center'>
      <div className='flex gap-10 bg-black px-6 py-2 rounded-full'>
        <Link to={'/'} >Home</Link>
        <Link to={'/register'} >Register</Link>
        <Link to={'/login'} >Login</Link>
      </div>
    </nav>
  )
}
