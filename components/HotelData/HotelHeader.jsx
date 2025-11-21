"use client";

import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Styles from "./HotelData.module.css";

export default function HotelHeader({ Hname, Haddress, rating }) {
  return (
    <div className={Styles["hotelHeader"]}>
      <h1 className={Styles["hotelName"]}>{Hname}</h1>

      <div className={Styles["addressRow"]}>
        <FaMapMarkerAlt size={16} color="#000" />
        <p className={Styles["addressText"]}>{Haddress} |</p>

        <div className={Styles["ratingSection"]}>
          <FaStar color="#f5bd56ff" />
          <span className={Styles["ratingValue"]}>{rating ?? 0}</span>
          <p className={Styles["ratingReviews"]}>(1,500 reviews)</p>
        </div>
      </div>
    </div>
  );
}
