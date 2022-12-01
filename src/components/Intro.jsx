import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6  ">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white mt-7">Kevin Grittner</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I am a self taught Full Stack Web developer looking to make it into the vast Tech World.
            <br />
            This website is built to showcase the skills and experience I've gained the past few months as a beginner.
            <br />
            <span className="underline">My Github page can be accessed by clicking the Icon below </span> {''}
            
            </p>
            <div className="flex ">
                <a
                href="https://github.com/EpicIbby101"
                target="_blank">
                <img 
                src="assets/Githublogo.png"
                className="w-12"
                ></img>
                </a>
                
            </div>
        </div>
    )
}

export default Intro;