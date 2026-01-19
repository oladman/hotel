import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import Styles from "./Search.module.css";

const GuestModal = ({
  adults,
  setAdults,
  numChildren,
  setNumChildren,
  rooms,
  setRooms,
  petFriendly,
  setPetFriendly,
  setShowGuestModal,
  modalRef,
}) => {
  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className={Styles["guest-modal"]} ref={modalRef}>
      <div className={Styles["guest-row"]}>
        <span>Adults</span>
        <div className={Styles["counter"]}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement(setAdults, adults);
            }}
          >
            <LuMinus />
          </button>
          <input type="text" value={adults} readOnly />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement(setAdults, adults);
            }}
          >
            <LuPlus />
          </button>
        </div>
      </div>

      <div className={Styles["guest-row"]}>
        <span>Children</span>
        <div className={Styles["counter"]}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement(setNumChildren, numChildren);
            }}
          >
            <LuMinus />
          </button>
          <input type="text" value={numChildren} readOnly />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement(setNumChildren, numChildren);
            }}
          >
            <LuPlus />
          </button>
        </div>
      </div>

      <div className={Styles["guest-row"]}>
        <span>Rooms</span>
        <div className={Styles["counter"]}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement(setRooms, rooms);
            }}
          >
            <LuMinus />
          </button>
          <input type="text" value={rooms} readOnly />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement(setRooms, rooms);
            }}
          >
            <LuPlus />
          </button>
        </div>
      </div>

      <hr className={Styles["divider"]} />

      <div className={Styles["pet-row"]}>
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

      <div className={Styles["modal-actions"]}>
        <button
          className={Styles["reset-btn"]}
          onClick={(e) => {
            e.stopPropagation();
            setAdults(2);
            setNumChildren(0);
            setRooms(1);
            setPetFriendly(false);
          }}
        >
          Reset
        </button>
        <button
          className={Styles["apply-btn"]}
          onClick={(e) => {
            e.stopPropagation();
            setShowGuestModal(false);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default GuestModal;