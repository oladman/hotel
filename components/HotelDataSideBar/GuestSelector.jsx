"use client";
import { useState, useRef, useEffect } from "react";
import { LuUsers } from "react-icons/lu";
import Styles from "./HotelDataSideBar.module.css";
import GuestModal from "./GuestModal";

export default function GuestSelector({
  adults,
  numChildren,
  rooms,
  petFriendly,
  setAdults,
  setNumChildren,
  setRooms,
  setPetFriendly,
}) {
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [tempGuests, setTempGuests] = useState({
    adults,
    numChildren,
    rooms,
    petFriendly,
  });

  const guestModalRef = useRef(null);
  const totalGuests = adults + numChildren;

  useEffect(() => {
    const handler = (e) => {
      if (guestModalRef.current && !guestModalRef.current.contains(e.target)) {
        setShowGuestModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={Styles["bookingScheduleItem"]}>
      <p className={Styles["label-name"]}>Guests and Rooms</p>

      <div
        onClick={() => {
          setTempGuests({ adults, numChildren, rooms, petFriendly });
          setShowGuestModal(true);
        }}
      >
        <p>
          {totalGuests} Guests, {rooms} Room
        </p>
        <LuUsers />
      </div>

      {showGuestModal && (
        <GuestModal
          refObj={guestModalRef}
          tempGuests={tempGuests}
          setTempGuests={setTempGuests}
          setAdults={setAdults}
          setNumChildren={setNumChildren}
          setRooms={setRooms}
          setPetFriendly={setPetFriendly}
          close={() => setShowGuestModal(false)}
        />
      )}
    </div>
  );
}
