import Styles from "./HomeCard.module.css";
import { getCountry } from "../../lib/api/getCountry";
import CountryCard from "./CountryCard";
import EmptyState from "./EmptyState";

export default async function HomeCard() {
  const countryList = await getCountry();

  return (
    <section className={Styles["cover-HomeCard"]}>
      {countryList.length > 0 ? (
        countryList.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
