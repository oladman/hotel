"use client";
import Styles from "./CountryData.module.css";

export default function CountryHeader({ getCountryData }) {
  const { name } = getCountryData;

  return (
    <header className={Styles["Country_Data_Header"]}>
      <div className={Styles["Country_Data_Header-bottom-most"]}>
        <h1>{name}</h1>
        <p>Travel Guide</p>
      </div>
    </header>
  );
}
