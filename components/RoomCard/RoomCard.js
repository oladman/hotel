"use client";
import Image from "next/image";
import {
  FaRegBookmark,
} from "react-icons/fa";
import {
  LuBedDouble,
  LuUser,
  LuWifi,
  LuInfo,
  LuUtensils,
  LuCoffee,
  LuRuler,
  LuBox,
  LuWaves,
  LuTv,
  LuDumbbell,
  LuFlower2,
  LuBeer,
  LuDog,
} from "react-icons/lu";
import Styles from "./RoomCard.module.css";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const extrasIcons = {
  Wifi: <LuWifi />,
  Breakfast: <LuUtensils />,
  Pool: <LuWaves />,
  Pet: <LuDog />,
  Gym: <LuDumbbell />,
  Spa: <LuFlower2 />,
  Bar: <LuBeer />,
  LuTv: <LuTv />,
};

export default function RoomsList({ roomTypes = [], Hname }) {
  const [filteredRooms, setFilteredRooms] = useState(roomTypes);

  useEffect(() => {
    try {
      const searchData = JSON.parse(localStorage.getItem("searchData"));
      if (searchData?.guests) {
 
        const availableRooms = roomTypes.filter(
          (room) => room.maxOccupancy >= searchData.guests
        );
        setFilteredRooms(availableRooms);
      } else {
        setFilteredRooms(roomTypes);
      }
    } catch (err) {
      console.error("Error filtering rooms:", err);
      setFilteredRooms(roomTypes);
    }
  }, [roomTypes]);

  if (!filteredRooms || filteredRooms.length === 0) {
    return (
      <p style={{ color: "gray", marginTop: "1rem" }}>
        No rooms available for your selected number of guests.
      </p>
    );
  }

  return (
    <div className={`${Styles["rooms-container"]} ${Styles["container"]}`}>
      {filteredRooms.map((room) => (
        <RoomCard key={room.id} room={room} Hname={Hname} />
      ))}
    </div>
  );
}

function RoomCard({ room, Hname }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();
  const images = room.roomTypeImages || [];
  const intervalRef = useRef(null);


  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isPaused && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [images.length, isPaused]);

  useEffect(() => {
    if (currentIndex >= images.length) setCurrentIndex(0);
  }, [images.length, currentIndex]);

  
  const handleReserve = () => {
    const searchData = localStorage.getItem("searchData");

    if (!searchData) {
      alert("Please select your dates and guests first using the search bar.");
   
      return;
    }

    
    localStorage.setItem("selectedHotel", JSON.stringify(room));
    localStorage.setItem("HotelName", Hname);

   
    router.push(`/CheckoutHotel?id=${room.id}`);
  };

  return (
    <div
      className={Styles["room-card"]}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
    
      <div className={Styles["image-wrapper"]}>
        {images.length > 0 && (
          <div className={Styles["room-carousel"]}>
            <div
              className={Styles["carousel-inner"]}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img) => (
                <div className={Styles["slide"]} key={img.id}>
                  <Image
                    src={`/images/${img.url}`}
                    alt={img.caption || room.name}
                    fill
                    sizes="(max-width: 480px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                    className={Styles["room-image"]}
                  />
                </div>
              ))}
            </div>

            {images.length > 1 && (
              <>
                <button
                  className={Styles["prev-btn"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    );
                  }}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  className={Styles["next-btn"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}

        <button className={Styles["bookmark-btn"]}>
          <FaRegBookmark />
        </button>
        <button className={Styles["view-btn"]}>View Details &gt;</button>
      </div>

     
      <div className={Styles["room-content"]}>
        <div className={Styles["room-content-left"]}>
          <h3 className={Styles["room-title"]}>{room.name}</h3>

          <div className={Styles["room-info"]}>
            <p>
              <LuBox /> {room.sizeSqFt} sq m
            </p>
            <p>
              <LuUser /> Sleeps {room.maxOccupancy}
            </p>
            {room.extras?.slice(0, 2).map((extra) => (
              <p key={extra.id}>
                {extrasIcons[extra.description] || <span></span>}
                <span>{extra.name}</span>
              </p>
            ))}
          </div>
        </div>

        <div className={Styles["room-content-right"]}>
          <div className={Styles["check-info"]}>
            <div>
              Check in: <span>11:00 am</span>
            </div>
            <div>
              Check out: <span>10:30 am</span>
            </div>
          </div>

          <div className={Styles["room-footer"]}>
            <h4 className={Styles["room-price"]}>$ {room.basePrice}</h4>
            <button className={Styles["choose-btn"]} onClick={handleReserve}>
              Choose Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
