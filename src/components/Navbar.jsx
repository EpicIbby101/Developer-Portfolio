import React from "react";


const Navbar = () => {
  return (
  
    <div className="fixed flex justify-between items-center h-16 sm:h-16 md:h-16 z-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur w-full shadow-md transition duration-500">
      <span className="relative m-7 z-30 font-bold text-3xl">My Portfolio</span>
      <div className=" flex items-center mr-20">
      <a
                href="https://github.com/EpicIbby101"
                target="_blank">
                <img 
                src="assets/Githublogo.png"
                className="w-11 md:w-11 ml-2"
                ></img>
                </a>

      <a
                href="https://www.linkedin.com/in/kevin-grittner-770465243/"
                target="_blank">
                <img 
                src="assets/linkedin.png"
                className="w-10 md:w-11 ml-3"
                ></img>
                </a>

                <a
                href="https://www.instagram.com/epicibby/"
                target="_blank">
                <img 
                src="assets/instagram.svg"
                className="w-10 md:w-11 ml-3 "
                ></img>
                </a>
                <p className="ml-5">||</p>
     </div>
    </div>
  );
};

export default Navbar;
