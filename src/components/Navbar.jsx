import React from "react";

const Navbar = () => {
    return (
        <div className="fixed flex justify-between items-center h-16 md:h-16 z-30 bg-white/80 dark:bg-gray-700/80 backdrop-blur w-full shadow-md transition duration-500 ">
            <span className="relative m-7 z-30 font-bold text-3xl">Welcome</span>
            <div className="relative decoration-none m-16 md:w-auto">
                <a href="" className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600">Home</a>
                <a href="" className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600">About Me</a>
                <a href="" className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600">Portfolio</a>
                <a href="" className="mr-5 hover:opacity-80 font-semibold border-b-4 border-transparent hover:border-blue-600">Contact</a>
            </div>
        </div>
    )
}

export default Navbar