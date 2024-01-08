import React from "react";

const Carousel = ({ images }) => {
  return (
    <div className="carousel carousel-center max-w-full space-x-4 bg-color-primary p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-item relative max-h-[48rem] max-w-full overflow-hidden rounded-lg"
        >
          <img
            src={image.src}
            className="h-full w-full rounded-lg object-cover transition-all duration-500 hover:scale-105 hover:cursor-pointer"
            alt={image.alt}
            width={1280} height={576}
          />
          <h1 className="absolute bottom-0 left-0 right-0 mx-auto bg-black bg-opacity-25 p-4 text-center text-2xl font-bold text-color-whity backdrop-opacity-75">
            {image.description}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
