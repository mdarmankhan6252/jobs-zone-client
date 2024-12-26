import { Link, NavLink } from 'react-router-dom';
import { CiBookmarkCheck, CiMenuBurger } from "react-icons/ci";
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';



const Nav = () => {
   const user = true;


   const [scrollPosition, setScrollPosition] = useState(0)
   const [showNav, setShowNav] = useState(true)
   const [menu, setMenu] = useState(false)



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


   return (
      <nav className={`fixed top-0 left-0 right-0  shadow-sm z-50 bg-purple-100/80 backdrop-blur-3xl transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className='flex items-center justify-between py-4 max-w-7xl mx-auto px-3'>
            <Link to='/'>
               <img src={logo} alt="" className='w-14' />
            </Link>
            <ul className='font-semibold text-gray-600 space-x-6 nav items-center hidden md:flex'>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/about'>About</NavLink>
               <NavLink to='/cars'>Cars</NavLink>
               {user && <NavLink to='/dashboard/statistics'>Dashboard</NavLink>}


            </ul>

            <div className='flex items-center space-x-4'>
               <div className='flex items-center space-x-6 cursor-pointer'>
                  
                  <Link to='/profile'><img src="https://i.ibb.co.com/m4xS62K/pexels-anntarazevich-5234256.jpg" referrerPolicy="no-referrer" className='w-10 h-10 rounded-full object-cover' /></Link>
                  
               </div>
               <Link className='font-semibold border-2 py-1.5 px-4 rounded-md border-purple-600 text-purple-600' to='/login'>Login</Link>
               <div onClick={() => setMenu(true)} className='text-2xl md:hidden cursor-pointer'>
                  <CiMenuBurger className='' />
               </div>
            </div>

            {/* side menu */}

            <ul className={`font-semibold text-gray-600 nav  absolute flex flex-col items-start bg-white w-[250px] h-screen top-0 right-0 py-5 pl-10 pr-2 space-y-5 md:hidden duration-500  ${menu ? 'mr-0' : '-mr-72'}`}>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/about'>About</NavLink>
               <NavLink to='/cars'>Cars</NavLink>
               <NavLink to='/dashboard/statistics'>Dashboard</NavLink>
               <NavLink to='login'>Login</NavLink>

            </ul>

         </div>
      </nav>
   );
};

export default Nav;


{/* <NavLink to='/'>Home</NavLink>
               <NavLink to='/'>About</NavLink>
               <NavLink to='/'>Jobs</NavLink>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/'>Blog</NavLink>
               <NavLink to='/'>Contact Us</NavLink>
               <NavLink to='/'>Sign In</NavLink>
               <NavLink to='/'>Sign Up</NavLink> */}