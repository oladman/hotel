import Link from "next/link";
import Image from "next/image";
import Styles from "./HomeCard.module.css";

export default function CountryCard({ country }) {
  return (
    <Link href={`/country/${country.id}` } className={Styles["CountryCard"]}>
      
        <div className={Styles["card_cover"]}>
          <div className="card_img_wrapper"><Image
            src={`/images/countries/${country.countryAttach}`}
            alt={country.countryName}
           fill
            className={Styles["card_img"]}
             priority
          /></div>
          <h3 className={Styles["card_title"]}>{country.countryName}</h3>
        </div>
   
    </Link>
  );
}
