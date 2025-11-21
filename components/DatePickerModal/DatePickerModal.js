"use client";
import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./DatePickerModal.module.css";

export default function DatePickerModal({ onClose, onSelect, initialDates }) {
  const [range, setRange] = useState([
    {
      startDate: initialDates?.startDate || new Date(),
      endDate:
        initialDates?.endDate ||
        new Date(new Date().setDate(new Date().getDate() + 1)),
      key: "selection",
    },
  ]);


  useEffect(() => {
    if (initialDates) {
      setRange([
        {
          startDate: initialDates.startDate,
          endDate: initialDates.endDate,
          key: "selection",
        },
      ]);
    }
  }, [initialDates]);

  const handleApply = () => {
    onSelect(range[0]);
    onClose();
  };

  return (
    <div className={styles["datepicker-modal"]}>
      <div className={styles["datepicker-header"]}>
        <h3>Select your check-in date</h3>
        <button onClick={onClose} className={styles["datepicker-close"]}>
          ✕
        </button>
      </div>

      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={2}
        direction="horizontal"
        showDateDisplay={false}
        minDate={new Date()}
      />

      <div className={styles["datepicker-footer"]}>
        <button className={styles["datepicker-apply"]} onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
}
