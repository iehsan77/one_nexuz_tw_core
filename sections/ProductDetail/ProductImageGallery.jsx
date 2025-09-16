"use client";

import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide styles

const ProductImageGallery = ({ images }) => {
  const [activeImageId, setActiveImageId] = useState(images[0]?.id);
  const [currentActiveImage, setCurrentActiveImage] = useState(images[0]);

  useEffect(() => {
    const newActiveImage = images.find((image) => image.id === activeImageId);
    setCurrentActiveImage(newActiveImage || images[0]); // Default to first image if not found
  }, [activeImageId, images]);

  // Magnification state
  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 });
  const [isMagnifying, setIsMagnifying] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMagnifyPosition({ x, y });
  };

  const handleMouseEnter = () => setIsMagnifying(true);
  const handleMouseLeave = () => setIsMagnifying(false);

  return (
    <div className="flex items-center gap-6">
      {/* Active Image with Magnification */}
      <div
        className="relative w-full max-w-lg overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={currentActiveImage?.image_url}
          alt={currentActiveImage?.name || currentActiveImage?.id}
          className="w-full h-60 object-contain rounded-lg cursor-crosshair"
        />
        {isMagnifying && (
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: `url(${currentActiveImage?.image_url})`,
              backgroundPosition: `${magnifyPosition.x}% ${magnifyPosition.y}%`,
              backgroundSize: "120%",
            }}
          ></div>
        )}
      </div>

      <Splide
        options={{
          perPage: 4,
          gap: "1rem",
          pagination: false,
          arrows: false,
          focus: "center",
          breakpoints: {
            768: { perPage: 3 },
            480: { perPage: 2 },
          },
        }}
        className="w-full max-w-xl"
      >
        {images?.map((image) => (
          <SplideSlide key={image?.id}>
            <button
              onClick={() => setActiveImageId(image?.id)}
              className={`w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 ${activeImageId === image?.id ? "border-orange-500" : "border-transparent"
                }`}
            >
              <img
                src={image?.image_url}
                alt={image?.name || image?.id}
                className="w-full h-full object-cover"
              />
            </button>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ProductImageGallery;
