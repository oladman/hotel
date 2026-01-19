"use client";

import { useState } from "react";
import Styles from "./HotelData.module.css";
import { FaRegImages } from "react-icons/fa";

export default function HotelImageGallery({ image, images = [], Hname }) {
  const [currentIndex, setCurrentIndex] = useState(0);


  const galleryImages = [
    { id: "main", imageUrl: image },
    ...images.map((img) => ({
      id: img.id,
      imageUrl: img.url,
    })),
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <div className={Styles["Country_Data_image"]}>

    
      <div className={Styles["desktop-view"]}>
        
        
        {image && (
          <img
            src={image.startsWith("http") ? image : `/images/hotels/${image}`}
            alt={Hname}
            className={Styles["first-image-countryData"]}
          />
        )}

      
        <div className={Styles["cover-fetched-imageData"]}>
          {images.slice(0, 4).map((hotelImage, index) => (
            <div
              key={hotelImage.id}
              className={Styles["cover-image-countryData"]}
            >
              <img
                className={Styles["image-countryData"]}
                src={`/images/hotels/${hotelImage.url}`}
                alt={hotelImage.caption || `${Hname} view`}
              />

           
              {index === 3 && images.length > 4 && (
                <div className={Styles.moreOverlay}>
                  +{images.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={Styles["mobile-carousel"]}>
        <img
          src={
            galleryImages[currentIndex].imageUrl.startsWith("http")
              ? galleryImages[currentIndex].imageUrl
              : `/images/hotels/${galleryImages[currentIndex].imageUrl}`
          }
          alt="mobile-carousel"
          className={Styles["carousel-image"]}
        />

        <button className={Styles["arrow-left"]} onClick={prevImage}>❮</button>
        <button className={Styles["arrow-right"]} onClick={nextImage}>❯</button>

        <div className={Styles["image-counter"]}>
          <FaRegImages size={12} /> {currentIndex + 1}/{galleryImages.length}
        </div>
      </div>

    </div>
  );
}
