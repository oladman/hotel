"use client";
import { useState } from "react";
import Styles from "./CountryData.module.css";
import { FaRegImages } from "react-icons/fa";

export default function CountryImageGallery({ getCountryData }) {
  const { name, image, countryImages = [] } = getCountryData;
  const safeImages = countryImages || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: "main", url: image },
    ...safeImages.map((img) => ({
      id: img.id,
      url: img.url,
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
        <div className={Styles["first-image-countryData"]}>
          <img
            src={`/images/countries/${image}`}
            alt={`${name} main`}
          />
        </div>

        <div className={Styles["cover-fetched-imageData"]}>
          {safeImages.slice(0, 4).map((image, index) => (
            <div key={image.id} className={Styles["cover-image-countryData"]}>
              <img
                className={Styles["image-countryData"]}
                src={`/images/countries/${image.url}`}
                alt={`${name} view`}
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
          src={`/images/countries/${galleryImages[currentIndex].url}`}
          alt="mobile-carousel"
          className={Styles["carousel-image"]}
        />

        <button className={Styles["arrow-left"]} onClick={prevImage}>
          ❮
        </button>
        <button className={Styles["arrow-right"]} onClick={nextImage}>
          ❯
        </button>

        <div className={Styles["image-counter"]}>
          <FaRegImages size={12} /> {currentIndex + 1}/{galleryImages.length}
        </div>
      </div>
    </div>
  );
}
