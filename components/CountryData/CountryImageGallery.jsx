"use client";
import { useState } from "react";
import Styles from "./CountryData.module.css";
import { FaRegImages } from "react-icons/fa";
export default function CountryImages({ getCountryData }) {
const { countryName, countryAttach, imageContents = [] } = getCountryData;
  const safeImages = imageContents || []; 

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: "main", imageUrl: countryAttach },
    ...safeImages.map((img) => ({
      id: img.id,
      imageUrl: img.imageUrl
    })),
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={Styles["Country_Data_image"]}>


      <div className={Styles["desktop-view"]}>
        <div className={Styles["first-image-countryData"]}>
          <img src={`/images/${countryAttach}`} alt={`${countryName} main`} />
        </div>

       <div className={Styles["cover-fetched-imageData"]}>
  {safeImages.slice(0, 4).map((image, index) => (
    <div
      key={image.id}
      className={Styles["cover-image-countryData"]}
    >
      <img
        className={Styles["image-countryData"]}
        src={`/images/${image.imageUrl}`}
        alt={`${countryName} view`}
      />

    
      {index === 3 && safeImages.length > 4 && (
        <div className={Styles.moreOverlay}>
          +{safeImages.length - 4}
        </div>
      )}
    </div>
  ))}
</div>

      </div>

    
      <div className={Styles["mobile-carousel"]}>
        <img
          src={`/images/${images[currentIndex].imageUrl}`}
          alt="mobile-carousel"
          className={Styles["carousel-image"]}
        />

        <button className={Styles["arrow-left"]} onClick={prevImage}>❮</button>
        <button className={Styles["arrow-right"]} onClick={nextImage}>❯</button>

        <div className={Styles["image-counter"]}>
          <FaRegImages size={12} /> {currentIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
}
