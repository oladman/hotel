"use client";
import React, { useState, useEffect } from "react";
import Styles from "./HotelDataSideBar.module.css";
import Button from "../Button";
import GuestSelector from "./GuestSelector";
import DateSelector from "./DateSelector";
import { LuX } from "react-icons/lu";

const HotelDataSideBar = ({ hotel, roomTypes = [], onResults }) => {
  const [destination, setDestination] = useState(hotel?.Hname || "");

  useEffect(() => {
    if (hotel?.Hname && hotel.Hname !== destination) {
      setDestination(hotel.Hname);
    }
  }, [hotel, destination]);

  const [adults, setAdults] = useState(2);
  const [numChildren, setNumChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [petFriendly, setPetFriendly] = useState(false);

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });

  const [errorMessage, setErrorMessage] = useState("");

  const totalGuests = adults + numChildren;

  const clearDestination = () => {
    setDestination("");
    if (onResults) onResults({ destination: "" });
  };

  const handleSearch = async () => {
    setErrorMessage("");

    if (!destination.trim()) {
      setErrorMessage("Please enter a destination.");
      return;
    }

    const canAccommodate = roomTypes.some(
      (room) => room.maxOccupancy >= totalGuests
    );

    if (!canAccommodate) {
      setErrorMessage(
        `The available rooms can't accommodate ${totalGuests} guests. Try booking more rooms.`
      );
      if (onResults) onResults([]);
      return;
    }

    const payload = {
      destination,
      checkIn: dates.startDate.toISOString(),
      checkOut: dates.endDate.toISOString(),
      adults,
      numChildren,
      rooms,
      petFriendly,
      guests: totalGuests,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("searchData", JSON.stringify(payload));
    }

    try {
      const res = await fetch("/api/filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        setErrorMessage(err.message || "Something went wrong.");
        return;
      }

      const data = await res.json();
      if (onResults) onResults(data);
    } catch (e) {
      console.log("Error searching hotels", e);
      setErrorMessage("Error searching hotels.");
    }
  };

  return (
    <div className={Styles["hotelDetailsRight"]}>
      <div className={Styles["hotelPrice"]}>
        <p>Pricing per night</p>
        <div>
          ${hotel.startingPrice}
          <span>/Night</span>
        </div>
      </div>

      <div className={Styles["bookingSchedule"]}>
        <div className={Styles["bookingScheduleItem"]}>
          <label className={Styles["label-name"]}>Location</label>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <input
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                if (onResults) onResults({ destination: e.target.value });
              }}
              placeholder="Where are you going?"
              className={Styles["search-input"]}
            />
            {destination && (
              <LuX onClick={clearDestination} style={{ cursor: "pointer" }} />
            )}
          </div>
        </div>

        <GuestSelector
          adults={adults}
          numChildren={numChildren}
          rooms={rooms}
          petFriendly={petFriendly}
          setAdults={setAdults}
          setNumChildren={setNumChildren}
          setRooms={setRooms}
          setPetFriendly={setPetFriendly}
        />

        <DateSelector dates={dates} setDates={setDates} />

        {errorMessage && (
          <p style={{ color: "red", fontSize: "0.9rem", marginTop: "10px" }}>
            {errorMessage}
          </p>
        )}

        <Button className={Styles["reserveHotel-btn"]} onClick={handleSearch}>
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default HotelDataSideBar;
