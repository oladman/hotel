import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Styles from "./Search.module.css";

const HotelCard = ({ hotel }) => {
  return (
    <Link href={`/hotel/${hotel.id}`}>
      <div className={Styles["hotel-card"]}>
        <div className={Styles["image-container"]}>
          <Image
            src={`/images/hotels/${hotel.image}` || "/default-hotel.jpg"}
            alt={hotel.Hname}
            width={150}
            height={160}
          />
          {hotel.badge && <span className={Styles["badge"]}>{hotel.badge}</span>}
        </div>

        <div className={Styles["hotel-info"]}>
          <div className={Styles["subtitle"]}>
            <FaMapMarkerAlt /> {hotel.Haddress}
          </div>
          <h3 className={Styles["title"]}>{hotel.Hname}</h3>

          <div className={Styles["bottom"]}>
            <div className={Styles["rating"]}>
              <FaStar className={Styles["star"]} />
              <span>{hotel.rating}</span>
              <span className={Styles["reviews"]}>reviews</span>
            </div>
            <div className={Styles["price"]}>
              <strong>${hotel.startingPrice}</strong> <small>/night</small>
              <div className={Styles["total"]}>
                ${hotel.startingPrice} total
              </div>
            </div>
          </div>
        </div>

        <button className={Styles["favorite"]}>
          <FaRegHeart />
        </button>
      </div>
    </Link>
  );
};

export default HotelCard;
