"use client";
import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { LuCalendar } from "react-icons/lu";
import DatePickerModal from "../DatePickerModal/DatePickerModal";
import Styles from "./HotelDataSideBar.module.css";

export default function DateSelector({ dates, setDates }) {
  const [showDateModal, setShowDateModal] = useState(false);
  const dateModalRef = useRef(null);
  const [tempDates, setTempDates] = useState(dates);


  useEffect(() => {
    const handler = (e) => {
      if (dateModalRef.current && !dateModalRef.current.contains(e.target)) {
        setShowDateModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={Styles["bookingScheduleItem"]}>
      <p className={Styles["label-name"]}>Check-in/out</p>

      <div
        onClick={() => {
          setTempDates(dates);
          setShowDateModal(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <p>
          {format(dates.startDate, "MMM d")} - {format(dates.endDate, "MMM d")}
        </p>
        <LuCalendar />
      </div>

      {showDateModal && (
        <div
          ref={dateModalRef}
          onClick={(e) => e.stopPropagation()}
          className={Styles["date-modal"]}
        >
          <DatePickerModal
            initialDates={dates}
            onClose={() => setShowDateModal(false)}
            onSelect={(range) => {
              setDates({
                startDate: range.startDate,
                endDate: range.endDate,
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
