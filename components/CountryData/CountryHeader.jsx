"use client";
import Styles from "./CountryData.module.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function CountryHeader({ getCountryData }) {
  const { countryName } = getCountryData;

  return (
    <>
   <Breadcrumbs countryName={countryName} hotelName="" />
    <header className={Styles["Country_Data_Header"]}>
      <div className={Styles["Country_Data_Header-bottom-most"]}>
     <h1>{countryName}</h1>
        <p>Travel Guide</p>
      </div> 
    </header>
    
       </>
  );
}
