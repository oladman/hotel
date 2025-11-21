"use client";

import Styles from "./CountryData.module.css";
import HotelCard from "../HotelCard/HotelCard";

export default function CountryHotels({ getCountryData }) {
  const { countryName, hotels = [] } = getCountryData;

  return (
    <div className={Styles["HomeStayCard-cover"]}>
      <h1>Where to Stay in {countryName}</h1>

      <div className={Styles["HomeStayCard"]}>
        <HotelCard hotels={hotels} />
      </div>
    </div>
  );
}
