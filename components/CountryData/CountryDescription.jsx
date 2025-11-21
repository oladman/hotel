"use client";

import Styles from "./CountryData.module.css";

export default function CountryDescription({ getCountryData }) {
  const { aboutCountries = [] } = getCountryData;

  return (
    <div className={Styles["text-countryData"]}>
      {aboutCountries.map((about) => (
        <div
          className={Styles["cover-text-countryData"]}
          key={about.id}
        >
          <p className={Styles["text-p-countryData"]}>
            {about.description}
          </p>
        </div>
      ))}
    </div>
  );
}
