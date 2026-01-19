"use client";
import React from "react";
import Styles from "./Pagination.module.css";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={Styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={Styles.pageItem}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className={`${Styles.pageLink} ${
                currentPage === number ? Styles.active : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
