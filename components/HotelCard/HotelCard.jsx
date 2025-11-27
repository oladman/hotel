import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaDumbbell,
  FaWifi,
  FaWineGlass,
  FaTv,
  FaCar,
  FaCloud,
  FaDog,
  FaSpa,
  FaSwimmingPool,
} from "react-icons/fa";
import Styles from "./HotelCard.module.css";
import HotelCardImage from "./HotelCardImage"; // ← import new component

const amenityIcons = {
  Gym: <FaDumbbell />,
  Spa: <FaSpa />,
  Pet: <FaDog />,
  Pool: <FaSwimmingPool />,
  Ocean: <FaCloud />,
  Wifi: <FaWifi />,
  Bar: <FaWineGlass />,
  Parking: <FaCar />,
  Tv: <FaTv />,
};

const HotelCard = ({ hotels, beds, baths, bedrooms }) => {
  return (
    <div className={Styles["card-wrapper"]}>
      {hotels && hotels.length > 0 ? (
        hotels.map((hotelItem) => (
          <Link
            key={hotelItem.id}
            href={`/hotel/${hotelItem.id}`}
            className={Styles["card-container"]}
          >
            <HotelCardImage
              image={hotelItem.image}
              alt={hotelItem.Hname}
              rating={hotelItem.rating}
            />

            <div className={Styles["card-body"]}>
              <h3 className={Styles["card-title"]}>{hotelItem.Hname}</h3>

              <div className={Styles["location"]}>
                <FaMapMarkerAlt className={Styles["location-icon"]} />
                <span>{hotelItem.Haddress}</span>
              </div>

              <div className={Styles["price-row"]}>
                <p className={Styles["new-price"]}>
                  ${hotelItem.startingPrice}
                  <span>/Night</span>
                </p>
              </div>

              <ul className={Styles["details-row"]}>
                {hotelItem.amenities?.slice(0, 4).map((amenity) => (
                  <li key={amenity.id}>
                    {amenityIcons?.[amenity.slug] || <span></span>}
                    <span>{amenity.name}</span>
                  </li>
                ))}
              </ul>

              <div className={Styles["details-row"]}>
                <div>
                  <FaBed /> {beds || 6} beds
                </div>
                <div>
                  <FaBath /> {baths || 1} bath
                </div>
                <div>
                  <FaBed /> {bedrooms || 3} bedrooms
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className={Styles["errorMessage"]}>
          No hotels found for this country.
        </p>
      )}
    </div>
  );
};

export default HotelCard;
