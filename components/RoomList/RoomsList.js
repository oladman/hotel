"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  LuBedDouble,
  LuUser,
  LuWifi,
  LuInfo,
  LuCutlery,
  LuCoffee,
  LuRuler,
  LuBox,
} from "react-icons/lu";
import React, { useState } from "react";
import Button from "../Button";
import Styles from "./RoomList.module.css"

const extrasIcons = {
  Wifi: <LuWifi />,
  Breakfast: <LuCoffee />,
};

export default function RoomsList({ roomTypes = [], Hname }) {
  if (roomTypes.length === 0) {
    return <p>No rooms available for this hotel.</p>;
  }

  return (
    <div className={Styles["rooms-container"]}>
      {roomTypes.map((room) => (
        <RoomCard key={room.id} room={room} Hname={Hname} />
      ))}
    </div>
  );
}

function RoomCard({ room, Hname }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const images = room.roomTypeImages || [];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  const handleReserve = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedRoom", JSON.stringify(room));
      localStorage.setItem("HotelName", Hname);
    }
    router.push(`/CheckoutHotel?id=${room.id}`);
  };

  return (
    <div className={Styles["room-card"]}>
    
      {images.length > 0 && (
        <div className={Styles["room-carousel"]}>
          <div
            className={Styles["carousel-inner"]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img) => (
              <Image
                key={img.id}
                src={`/images/${img.url}`}
                alt={img.caption || room.name}
                width={400}
                height={250}
                className={Styles["room-image"]}
              />
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button className={Styles["prev-btn"]} onClick={prevSlide}>
                ‹
              </button>
              <button className={Styles["next-btn"]} onClick={nextSlide}>
                ›
              </button>
            </>
          )}
        </div>
      )}

    
      <div className={Styles["room-content"]}>
        <h2 className={Styles["room-name"]}>{room.name}</h2>

        {room.description && (
          <p className={Styles["room-description"]}>{room.description}</p>
        )}

        {room.rating && (
          <p className={Styles["room-rating"]}>
            <span className={Styles["rating-score"]}>{room.rating}</span> Good •{" "}
            {room.reviews} reviews
          </p>
        )}

        <ul className={Styles["room-details"]}>
          <li>
            <LuBox /> {room.sizeSqFt} sq m
          </li>
          <li>
            <LuUser /> Sleeps {room.maxOccupancy}
          </li>
        </ul>

        <ul className={Styles["room-details-continuation"]}>
          {room.extras?.map((extra) => (
            <li key={extra.id}>
              {extrasIcons[extra.description] || <span></span>}
              <span>{extra.name}</span>
            </li>
          ))}
        </ul>

        <p className={Styles["more-details"]}>
          <LuInfo /> More details
        </p>

       
        <div className={Styles["cancel-section"]}>
          <p className={Styles["cancel-title"]}>Cancellation policy</p>
          <label>
            <input type="radio" name={`cancel-${room.id}`} defaultChecked />{" "}
            Non-refundable <span>+$0</span>
          </label>
          <label>
            <input type="radio" name={`cancel-${room.id}`} /> Fully refundable
            before 19 Oct <span>+$8</span>
          </label>
          <label>
            <input type="radio" name={`cancel-${room.id}`} /> Fully refundable
            before 24 Oct <span>+$12</span>
          </label>
        </div>

       
        <div className={Styles["room-footer"]}>
          <div>
            {room.description && (
              <p className={Styles["room-badge"]}>{room.description}</p>
            )}
            <p className={Styles["room-price"]}>${Number(room.basePrice).toFixed(2)}</p>
            <p className={Styles["room-taxes"]}>Includes taxes & fees</p>
          </div>
          <Button className={Styles["reserve-btn"]} onClick={handleReserve}>
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}
