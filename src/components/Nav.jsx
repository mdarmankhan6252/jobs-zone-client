import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="py-4 bg-gray-50">
      <div className="flex items-center justify-between px-3 mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold">Nav bar</h2>
        <ul className="flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/companies">Jobs</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">Contact Us</NavLink>
          <NavLink to="/">Sign In</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
