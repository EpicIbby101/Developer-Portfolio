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
    <div>
      <h2 className="flex text-4xl md:text-4xl mb-10 md:mb-10 font-bold dark:text-white mt-10 underline items-center justify-center">
        My Digital Artwork
      </h2>
      <div className="flex items-center justify-center">
        <button
          className="bg-gray-500 text-white rounded-full p-0 w-9 h-9 mr-2"
          onClick={prevSlide}
        >
          <ArrowBackIosNewIcon />
        </button>
        <div className="flex flex-wrap md:flex-nowrap overflow-hidden">
          {images.map((image, index) => {
            const slideClass =
              index >= currentIndex && index <= currentIndex + 3
                ? "opacity-100 w-60 mx-3 transition-opacity duration-300 ease-in"
                : "opacity-0 w-0 mx-0 transition-opacity duration-300 ease-out";
            const displayClass =
              index === currentIndex
                ? "block md:hidden"
                : "hidden md:block";
            return (
              <img
                key={index}
                className={`${slideClass} ${displayClass}`}
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
