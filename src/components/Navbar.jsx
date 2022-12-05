import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center h-16 sm:h-16 md:h-16 z-30 bg-white/80 dark:bg-gray-700/80 backdrop-blur w-full shadow-md transition duration-500">
      <span className="relative m-7 z-30 font-bold text-3xl">Welcome To My Portfolio</span>
      <div className="relative decoration-none m-16 md:w-auto hidden sm:flex">
        <Link
          to="/Home"
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          Home
        </Link>
        <Link
          to="/About"
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          About
        </Link>
        <Link
          to="/CV"
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          My CV
        </Link>
        <Link
          to=""
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          Contact
        </Link>
      </div>
      <div className="sm:hidden flex items-center mr-20">
        
      </div>
    </div>
  );
};

export default Navbar;
