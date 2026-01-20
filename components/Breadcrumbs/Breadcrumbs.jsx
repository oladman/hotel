"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Styles from "./Breadcrumbs.module.css";
import Link from "next/link";

export default function Breadcrumbs({ name, countryId, hotelName }) {
  return (
    <nav aria-label="breadcrumb" title="breadcrumb" className={Styles["breadcrumbs"]}>
      <Link href="/" className={Styles["breadcrumb-link"]}>Home</Link>

      <FontAwesomeIcon icon={faAngleRight} className={Styles["icon"]} />

      {countryId ? (
        <Link href={`/country/${countryId}`} className={Styles["breadcrumb-link"]}>{name}</Link>
      ) : (
        <span aria-current="page">{name}</span>
      )}

      {hotelName && (
        <>
          <FontAwesomeIcon icon={faAngleRight} className={Styles["icon"]} />
          <span aria-current="page">{hotelName}</span>
        </>
      )}
    </nav>
  );
}
