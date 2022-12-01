import React from "react";

const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center h-16 sm:h-16 md:h-16 z-30 bg-white/80 dark:bg-gray-700/80 backdrop-blur w-full shadow-md transition duration-500">
      <span className="relative m-7 z-30 font-bold text-3xl">Welcome To My Portfolio</span>
      <div className="relative decoration-none m-16 md:w-auto hidden sm:flex">
        <a
          href="/Home"
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          Home
        </a>
        <a
          href="/About"
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          About
        </a>
        <a
          href="https://remarkable-lolly-8ccda9.netlify.app/CV"
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          My CV
        </a>
        <a
          href=""
          className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600"
        >
          Contact
        </a>
      </div>
      <div className="sm:hidden flex items-center mr-20">
        
      </div>
    </div>
  );
};

export default Navbar;
