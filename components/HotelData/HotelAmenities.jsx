import React from "react";
import Styles from "./HotelData.module.css";
import {
  LuDumbbell,
  LuFlower2,
  LuDog,
  LuWaves,
  LuCloud,
  LuWifi,
  LuWine,
  LuCar,
  LuTv,
} from "react-icons/lu";

const amenityIcons = {
  Gym: <LuDumbbell size={20} />,
  Spa: <LuFlower2 size={20} />,
  Pet: <LuDog size={20} />,
  Pool: <LuWaves size={20} />,
  Ocean: <LuCloud size={20} />,
  Wifi: <LuWifi size={20} />,
  Bar: <LuWine size={20} />,
  Parking: <LuCar size={20} />,
  Tv: <LuTv size={20} />,
};

const HotelAmenities = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;

  return (
    <ul className={Styles[""]}>
      {amenities.map((item) => {
        // ✅ If item is object, get slug or name
        const slug = typeof item === "string" ? item : item.slug || item.id;

        return (
          <li key={typeof item === "object" ? item.id : slug} className={Styles["amenityListItem"]}>
          
            {amenityIcons[item.slug] || <span></span>}
                    <span>{item.name}</span>
          </li>
        );
      })}
    </ul>

  );
};

export default HotelAmenities;
