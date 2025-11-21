"use client";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Styles from "./Checkout.module.css";
import { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={Styles["carousel"]}>
      <div
        className={Styles["inner"]}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map(img => (
          <img
            key={img.id}
            src={`/images/${img.imageUrl}`}
            alt={img.caption}
            className={Styles["room-image"]}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className={Styles["prev-btn"]} onClick={prevSlide}>‹</button>
          <button className={Styles["next-btn"]} onClick={nextSlide}>›</button>
        </>
      )}
    </div>
  );
}
