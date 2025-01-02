import { Link, NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { PiSignOutFill } from 'react-icons/pi';
import useAuth from '../hooks/useAuth';


const Nav = () => {

  const [scrollPosition, setScrollPosition] = useState(0)
  const [showNav, setShowNav] = useState(true)
  const [menu, setMenu] = useState(false)
  const { user, logOut } = useAuth();
  const [card, setCard] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < scrollPosition) {
        setShowNav(true)
      }
      else {
        setShowNav(false)
      }
      setScrollPosition(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])


  const handleCard = () => {
    setCard(!card)
  }



  return (
    <nav className={`fixed top-0 left-0 right-0  shadow-sm z-50 bg-gray-100/80 backdrop-blur-3xl transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex items-center justify-between py-2 max-w-7xl mx-auto px-3 relative'>
        <Link to='/'>
          <img src={logo} alt="" className='w-40' />
        </Link>
        <ul className='text-gray-600 space-x-6 text-[15px] nav items-center hidden md:flex'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/jobs'>Jobs</NavLink>
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/blogs'>Blog</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
        </ul>

        <div className='flex items-center space-x-2'>

          {user && <img src={user?.photoURL} referrerPolicy="no-referrer" className='w-10 h-10 rounded-full object-cover md:hidden' />}


          <div>
            {user && <img onClick={handleCard} src={user?.photoURL} referrerPolicy="no-referrer" className='w-10 h-10 rounded-full object-cover hidden md:inline-block cursor-pointer' />}
          </div>

          {
            !user && <Link className='font-semibold border-2 py-1.5 px-4 rounded-md border-purple-600 hover:bg-purple-600 text-sm hover:text-white duration-200 text-purple-600 hidden md:inline-block' to='/login'>Login</Link>
          }

          <div onClick={() => setMenu(true)} className='text-2xl md:hidden cursor-pointer'>
            <CiMenuBurger className='' />
          </div>
        </div>

        {/* side menu */}

        <ul className={` text-gray-600 nav  absolute flex flex-col items-start border-l border-gray-100 bg-white w-[250px] h-screen top-0 right-0 py-5 pl-10 pr-2 space-y-5 md:hidden duration-500  ${menu ? 'mr-0' : '-mr-72'}`}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/jobs'>Jobs</NavLink>
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/blogs'>Blog</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
          {user ? <>
            <Link to='/profile'>Profile</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <li onClick={() => logOut()} className='flex  items-center space-x-2 hover:text-red-500 cursor-pointer'>
              <span>Sign Out</span>
              <PiSignOutFill className='text-2xl ' />
            </li>

          </> : <NavLink to='/contact-us'>Login</NavLink>}

          <IoCloseOutline onClick={() => setMenu(false)} className='absolute right-2 top-0 text-3xl cursor-pointer' />
        </ul>

        {/* admin and profile after md screen */}

        <div className={`text-gray-600 flex-col absolute right-10 top-[54px] bg-white hidden sm:flex p-6 duration-500 transform origin-top-right border *:py-2 *:border-b hover:*:bg-gray-50 ${!user && 'scale-0'}  rounded-lg ${card ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <Link to='/profile'>Profile</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <li onClick={() => {logOut() ; setCard(false)}} className='flex  items-center space-x-2 hover:text-red-500 cursor-pointer'>
            <span>Sign Out</span>
            <PiSignOutFill className='text-2xl' />
          </li>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
