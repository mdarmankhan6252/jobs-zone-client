import { NavLink } from "react-router-dom";

const Nav = () => {
   return (
      <nav className="bg-gray-50 py-4">
         <div className="flex items-center justify-between max-w-7xl mx-auto px-3">
            <h2 className="font-semibold text-xl">Nav bar</h2>
            <ul className="flex items-center space-x-6">
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/'>About</NavLink>
               <NavLink to='/'>Jobs</NavLink>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/'>Blog</NavLink>
               <NavLink to='/'>Contact Us</NavLink>
               <NavLink to='/'>Sign In</NavLink>
               <NavLink to='/'>Sign Up</NavLink>
            </ul>
         </div>
      </nav>
   );
};

export default Nav;