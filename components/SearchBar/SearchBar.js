"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { format } from "date-fns";
import styles from "./SearchBar.module.css";
import DatePickerModal from "../DatePickerModal/DatePickerModal";

export default function SearchBar({ hotel, roomTypes = [] }) {
  const [destination, setDestination] = useState(hotel?.Hname || "");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [petFriendly, setPetFriendly] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });

  const router = useRouter();
  const modalRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowGuestModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearDestination = () => setDestination("");
  const totalGuests = adults + children;


  const handleSearch = async () => {
    if (!destination.trim()) {
      alert("Please enter a destination");
      return;
    }

    try {
      
      const res = await fetch(`/api/hotel?name=${encodeURIComponent(destination)}`);


      if (!res.ok) {
        alert("Failed to fetch hotels");
        return;
      }

      const data = await res.json();

      
      router.push(`/search?query=${encodeURIComponent(destination)}`, {
        scroll: true,
      });

   
      sessionStorage.setItem("searchResults", JSON.stringify(data));
    } catch (error) {
      console.error("Error searching hotels:", error);
      alert("Error searching hotels");
    }
  };

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className={styles["searchbar-container"]}>
      
      <div className={`${styles["searchbar-section"]} ${styles["searchbar-destination"]}`}>
        <FaMapMarkerAlt className={styles["searchbar-icon"]} />
        <div className={styles["searchbar-field"]}>
          <label className={styles["searchbar-label"]}>Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where are you going?"
            className={styles["searchbar-input"]}
          />
        </div>
        {destination && <LuX className={styles["searchbar-clear"]} onClick={clearDestination} />}
      </div>

   
      <div className={styles["searchbar-section"]}>
        <FaCalendarAlt className={styles["searchbar-icon"]} />
        <div
          className={styles["searchbar-date"]}
          onClick={() => setShowDateModal(!showDateModal)}
        >
          <span className={styles["searchbar-label"]}>Check-in/out</span>
          <strong>
            {format(dates.startDate, "MMM d")} - {format(dates.endDate, "MMM d")}
          </strong>
        </div>

        {showDateModal && (
          <div className={styles["modal-wrapper"]}>
            <DatePickerModal
              onClose={() => setShowDateModal(false)}
              onSelect={(range) =>
                setDates({ startDate: range.startDate, endDate: range.endDate })
              }
            />
          </div>
        )}
      </div>

    
      <div
        className={styles["searchbar-section"]}
        onClick={() => setShowGuestModal(!showGuestModal)}
        style={{ position: "relative" }}
      >
        <FaUser className={styles["searchbar-icon"]} />
        <div className={styles["searchbar-field"]}>
          <label className={styles["searchbar-label"]}>Guests and rooms</label>
          <input
            type="text"
            value={`${totalGuests} Guests, ${rooms} Room`}
            className={styles["searchbar-input"]}
            readOnly
          />
        </div>

        {showGuestModal && (
          <div className={styles["guest-modal"]} ref={modalRef}>
            <div className={styles["guest-row"]}>
              <span>Adults</span>
              <div className={styles["counter"]}>
                <button onClick={(e) => { e.stopPropagation(); handleDecrement(setAdults, adults); }}>
                  <LuMinus />
                </button>
                <input type="text" value={adults} readOnly />
                <button onClick={(e) => { e.stopPropagation(); handleIncrement(setAdults, adults); }}>
                  <LuPlus />
                </button>
              </div>
            </div>

            <div className={styles["guest-row"]}>
              <span>Children</span>
              <div className={styles["counter"]}>
                <button onClick={(e) => { e.stopPropagation(); handleDecrement(setChildren, children); }}>
                  <LuMinus />
                </button>
                <input type="text" value={children} readOnly />
                <button onClick={(e) => { e.stopPropagation(); handleIncrement(setChildren, children); }}>
                  <LuPlus />
                </button>
              </div>
            </div>

            <div className={styles["guest-row"]}>
              <span>Rooms</span>
              <div className={styles["counter"]}>
                <button onClick={(e) => { e.stopPropagation(); handleDecrement(setRooms, rooms); }}>
                  <LuMinus />
                </button>
                <input type="text" value={rooms} readOnly />
                <button onClick={(e) => { e.stopPropagation(); handleIncrement(setRooms, rooms); }}>
                  <LuPlus />
                </button>
              </div>
            </div>

            <hr className={styles["divider"]} />

            <div className={styles["pet-row"]}>
              <label>
                <strong>Pet friendly</strong>
                <p>Only show stays that allow pets</p>
              </label>
              <input
                type="checkbox"
                checked={petFriendly}
                onChange={() => setPetFriendly(!petFriendly)}
              />
            </div>

            <div className={styles["modal-actions"]}>
              <button
                className={styles["reset-btn"]}
                onClick={(e) => {
                  e.stopPropagation();
                  setAdults(2);
                  setChildren(0);
                  setRooms(1);
                  setPetFriendly(false);
                }}
              >
                Reset
              </button>
              <button
                className={styles["apply-btn"]}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGuestModal(false);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
      <button className={styles["searchbar-button"]}  onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
