import React from "react";
import HotelCard from "./HotelCard";
import Styles from "./Search.module.css";

const HotelList = ({ hotels }) => {
  return (
    <div className={Styles["hotel-list"]}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
