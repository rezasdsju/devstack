
import { GiHamburgerMenu } from 'react-icons/gi'
import NavLogo from '../assets/logo-text.png'
export default function Nav() {
  return (
    <nav className='sticky top-0 z-50 bg-white flex md:grid md:grid-cols-3 pt-3 pb-3 pl-2 shadow-md'>
        <span className='flex items-center md:hidden'><GiHamburgerMenu /></span>
        <img src={NavLogo} alt="" />
        <ul className='hidden md:flex gap-5 md:items-center'>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='flex items-center mx-auto gap-2 md:gap-6'>
            <button className="btn btn-soft">Sign In</button>
            <button className="btn btn-secondary">Sign Up</button>
        </div>
        {/* <span className='flex items-center md:hidden'><GiHamburgerMenu /></span> */}


    </nav>
  )
}
