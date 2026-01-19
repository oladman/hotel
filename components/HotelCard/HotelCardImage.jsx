import { FaStar } from "react-icons/fa";
import Styles from "./HotelCard.module.css"; // same CSS file

const HotelCardImage = ({ image, alt, rating }) => {
  console.log('images', image)
  return (
    <div className={Styles["image-section"]}>
      <img
        className={Styles["card-image"]}
        src={`/images/hotels/${image}`}
        alt={alt}
      />

      <div className={Styles["rating-badge"]}>
        <FaStar className={Styles["star-icon"]} />
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default HotelCardImage;
