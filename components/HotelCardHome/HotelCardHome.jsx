import Image from "next/image";
import styles from "./HotelCardHome.module.css";
import {
  FaStar,
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaUserFriends,
  FaBath,
} from "react-icons/fa";
import Link from "next/link";

const HotelCardHome = ({ hotel }) => {
  const {
    id,
    name,
    country,
    rating,
    startingPrice,
    image,
    maxBeds,
    maxGuests,
    maxBathrooms,
  } = hotel;

  const imageUrl = image
    ? `/images/hotels/${image}`
    : "/images/placeholder.jpg";

  return (
    <Link href={`/hotel/${id}`} className={styles.card}>
      {/* IMAGE SECTION */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={styles.image}
          unoptimized
        />

        <span className={styles.badge}>Private Pool</span>
        <button
          className={styles.favorite}
         
        >
          <FaHeart />
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <div className={styles.rating}>
            <FaStar />
            <span>{rating?.toFixed(2) || "N/A"}</span>
          </div>
        </div>

        <div className={styles.location}>
          <FaMapMarkerAlt />
          <span>{country?.name}</span>
        </div>

        <div className={styles.price}>
          ${parseFloat(startingPrice)?.toFixed(2) || "N/A"} <span>/ night</span>
        </div>

        {/* FEATURES ROW */}
        <div className={styles.features}>
          {maxBeds > 0 && (
            <div>
              <FaBed /> <span>{maxBeds} Beds</span>
            </div>
          )}

          {maxGuests > 0 && (
            <div>
              <FaUserFriends /> <span>{maxGuests} Guests</span>
            </div>
          )}

          {maxBathrooms > 0 && (
            <div>
              <FaBath /> <span>{maxBathrooms} Baths</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default HotelCardHome;
