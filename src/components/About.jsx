import React from "react";

function AboutMe() {
    return (
        <div className="flex items-start justify-center flex-col text-left pt-20 pb-6 ">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white mt-7">About Me</h1>
            <p className="text-sm max-w-full mb-6 font-normal">Hi, my name is Kevin Grittner. Born in The Netherlands to a German father and Indonesian mother.
            <br />
            <br />
            I've been into tech for as long as I can remember, I repaired my Nintendo 64 when I was just 5 years old (All I did was disassemble and reassemble it). But truthfully I've always had a fascination for computers and video games but only decided to get into Computer Science about a year ago in 2021 when my friend introduced me to what he does at work. I liked the idea of creating and designing software from the comfort of a chair, which could potentially be anywhere in the world. 
            <br />
            <span className="text-red-800 text-2xl font-bold">ADD DETAILS</span>
            </p>
            <br />
        </div>
    )
}

export default AboutMe;