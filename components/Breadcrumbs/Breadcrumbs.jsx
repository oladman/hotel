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
        style={{ padding: "0 10px", fontSize: "12px", color: "grey" }}
      />

      <p>{countryName}</p>

      <FontAwesomeIcon
        icon={faAngleRight}
        style={{ padding: "0 10px", fontSize: "12px", color: "grey" }}
      />

      <p>{hotelName || ""}</p>
    </div>
  );
}
