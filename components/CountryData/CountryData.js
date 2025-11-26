"use client";

import Styles from "./CountryData.module.css";

import CountryHeader from "./CountryHeader";
import CountryImageGallery from "./CountryImageGallery";
import CountryDescription from "./CountryDescription";
import CountryHotels from "./CountryHotels";
import PopularPlaces from "./PopularPlaces";

export default function CountryData({ getCountryData }) {
  if (!getCountryData) return <p className={Styles["container"]} style={{ fontSize:'14px', color:'#1e90ff' }} >Loading country data...</p>;

  return (
    <>
     <div className={Styles["container"]}>
      <CountryHeader
        getCountryData={getCountryData}
      /></div>
      <CountryImageGallery getCountryData={getCountryData} />
      <div className={Styles["container"]}>
        <section className={Styles["Country_Data_Section"]}>
          <CountryDescription getCountryData={getCountryData} />
          <CountryHotels getCountryData={getCountryData} />
          <PopularPlaces getCountryData={getCountryData} />
        </section>
      </div>
    </>
  );
}
