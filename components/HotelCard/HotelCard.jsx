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
  FaUserFriends,
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

const HotelCard = ({ hotels }) => {
  return (
    <div className={Styles["card-wrapper"]}>
      {hotels && hotels.length > 0 ? (
        hotels.map((hotelItem) => {
          const {
            id,
            name,
            address,
            startingPrice,
            image,
            rating,
            amenities,
            maxBeds,
            maxGuests,
            maxBathrooms,
          } = hotelItem;
          return (
            <Link
              key={id}
              href={`/hotel/${id}`}
              className={Styles["card-container"]}
            >
              <HotelCardImage
                image={image}
                alt={name}
                rating={rating}
              />

              <div className={Styles["card-body"]}>
                <h3 className={Styles["card-title"]}>{name}</h3>

                <div className={Styles["location"]}>
                  <FaMapMarkerAlt className={Styles["location-icon"]} />
                  <span>{address}</span>
                </div>

                <div className={Styles["price-row"]}>
                  <p className={Styles["new-price"]}>
                    ${parseFloat(startingPrice)?.toFixed(2) || "N/A"}
                    <span>/Night</span>
                  </p>
                </div>

                <ul className={Styles["details-row"]}>
                  {amenities?.slice(0, 4).map((amenity) => (
                    <li key={amenity.id}>
                      {amenityIcons?.[amenity.slug] || <span></span>}
                      <span>{amenity.name}</span>
                    </li>
                  ))}
                </ul>

               
                <div className={Styles["features-row"]}>
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
        })
      ) : (
        <p className={Styles["errorMessage"]}>
          No hotels found for this country.
        </p>
      )}
    </div>
  );
};

export default HotelCard;
