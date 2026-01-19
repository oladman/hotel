"use client";

import Styles from "./CountryData.module.css";
import Button from "/components/Button";

export default function PopularPlaces({ getCountryData }) {
  const { popularPlaces = [], countryName } = getCountryData;

  return (
    <div className={Styles["popular-places"]}>
      <h2>{countryName} Top Tourist Attractions</h2>

      <div className={Styles["popular-card"]}>
        {popularPlaces.length > 0 ? (
          popularPlaces.map((popular) => (
            <div className={Styles["popular-id"]} key={popular.id}>
              <div className={Styles["popular-image"]}>
                
                {Array.isArray(popular.images) && popular.images.length > 0 ? (
                  popular.images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={`/images/popularPlaces/${imgSrc.url}`}
                      alt={imgSrc.caption || popular.placeName}
                    />
                  ))
                ) : (
                  <img
                    src="/images/default-placeholder.jpg"
                    alt={popular.placeName}
                  />
                )}
              </div>

              <div className={Styles["popular-body-text"]}>
                <h4>{popular.placeName}</h4>
                <p className={Styles["popular-about"]}>
                  {popular.description}
                </p>
              </div>

              
            </div>
          ))
        ) : (
          <p className={Styles["errorMessage"]}>
            No tourist attractions found for this country.
          </p>
        )}
      </div>
    </div>
  );
}
