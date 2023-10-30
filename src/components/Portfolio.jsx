import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div>
        <h2 className="flex text-4xl md:text-4xl mb-10 md:mb-10 font-bold dark:text-white mt-3 underline items-center justify-center">
        My Recent Projects
      </h2>
      <p>
        My projects range from React, Next.js and Vue applications. My main framework of choice is Next.js and I'm working towards learning more about Next.js
      </p>
        <div className="flex flex-col md:flex-row items-center justify-center">  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map(project => (
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}


export default Portfolio;