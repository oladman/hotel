"use client";

import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Styles from "./HotelData.module.css";

export default function HotelHeader({ Hname, Haddress, rating }) {
  return (
    <div className={Styles["hotelHeader"]}>
      <h1 className={Styles["hotelName"]}>{Hname}</h1>

      <div className={Styles["addressRow"]}>
        <div className={Styles["addressTextCover"]} ><FaMapMarkerAlt size={14} color="grey" />
        <p className={Styles["addressText"]}>{Haddress} |</p>
          </div>

        <div className={Styles["ratingSection"]}>
          <FaStar color="#f5bd56ff" />
          <span className={Styles["ratingValue"]}>{rating ?? 0} reviews</span>
         
        </div>
      </div>
    </div>
  );
}
