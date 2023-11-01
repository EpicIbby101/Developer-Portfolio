import React, { useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
      <h2 className="flex text-4xl md:text-4xl mb-10 md:mb-10 font-bold dark:text-white mt-3 underline items-center justify-center">
        My Recent Projects
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
              />
              {hoveredProject === index && (
                <div className="absolute top-0 left-0 p-4 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 shadow-md rounded-md">
                  {/* Additional information about the project */}
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
