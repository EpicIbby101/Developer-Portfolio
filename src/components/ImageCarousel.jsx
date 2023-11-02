import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { images } from "../data/carouselImages";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? images.length - 3 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentIndex === images.length - 3;
    const index = resetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto py-0">
      <h2 className="flex text-4xl md:text-4xl mb-10 md:mb-5 font-bold dark:text-white mt-10 underline items-center justify-center">
        My Digital Artwork
      </h2>
      <div className="text-center mb-8">
        <p>
          I'm also a graphics designer/photo editor in my free time, unleashing
          my creative edge helps me take my mind off the more tedious things in
          life.
          <br /> The below are just a few of my recent projects I've been working
          on.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-gray-500 text-white rounded-full p-0 w-9 h-9 mr-2"
          onClick={prevSlide}
        >
          <ArrowBackIosNewIcon />
        </button>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
          {images.map((image, index) => {
            const slideClass =
              index >= currentIndex && index <= currentIndex + 3
                ? "opacity-100 w-80 mx-3 shadow-md transform scale-100 transition-transform duration-300 ease-in"
                : "opacity-0 w-0 mx-0 transform scale-75 transition-transform duration-300 ease-in";
            const displayClass =
              index === currentIndex ? "block md:hidden" : "hidden md:block";

            return (
              <img
                key={index}
                className={`${slideClass} ${displayClass} hover:scale-110`}
                src={image}
                alt={`Slide ${index}`}
              />
            );
          })}
        </div>
        <button
          className="bg-gray-500 text-white rounded-full p-0 w-9 h-9 ml-2"
          onClick={nextSlide}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
