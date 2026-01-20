"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ name, hotelName }) {
  return (
    <div className={Styles["breadcrumbs"]}>
      <p>Home</p>

      <FontAwesomeIcon
        icon={faAngleRight}
       
        className={Styles["icon"]}
      />

      <p>{name}</p>

      <FontAwesomeIcon
        icon={faAngleRight}
       className={Styles["icon"]}
      />

      <p>{hotelName || ""}</p>
    </div>
  );
}
