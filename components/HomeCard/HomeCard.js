"use client";
import { useState } from "react";
import Styles from "./HomeCard.module.css";
import CountryCard from "./CountryCard";
import EmptyState from "./EmptyState";
import Pagination from "../Pagination/Pagination";

export default function HomeCard({ countryList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countryList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={Styles["container"]}>
      <section className={Styles["cover-HomeCard"]}>
        {currentItems.length > 0 ? (
          currentItems.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))
        ) : (
          <EmptyState />
        )}
      </section>
      <div className={Styles["pagination-wrapper"]}>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={countryList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}


