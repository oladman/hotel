"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ countryName, hotelName }) {
  return (
    <div className={Styles["breadcrumbs"]}>
      <p>Home</p>

      <FontAwesomeIcon
        icon={faAngleRight}
       
        className={Styles["icon"]}
      />

      <p>{countryName}</p>

      <FontAwesomeIcon
        icon={faAngleRight}
       className={Styles["icon"]}
      />

      <p>{hotelName || ""}</p>
    </div>
  );
}
