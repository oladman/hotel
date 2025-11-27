"use client";
import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import Button from "../Button";
import Styles from "./HotelDataSideBar.module.css";

export default function GuestModal({
  refObj,
  tempGuests,
  setTempGuests,
  setAdults,
  setNumChildren,
  setRooms,
  setPetFriendly,
  close,
}) {
  return (
    <div
      ref={refObj}
      className={Styles["guest-modal"]}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={Styles["guest-row"]}>
        <span>Adults</span>
        <div className={Styles["counter"]}>
          <Button
            onClick={() =>
              setTempGuests((g) => ({
                ...g,
                adults: Math.max(1, g.adults - 1),
              }))
            }
            className={Styles["optionCounterButton"]}
          >
            <LuMinus />
          </Button>

          <input
            type="text"
            value={tempGuests.adults}
            readOnly
            className={Styles["optionItem"]}
          />

          <Button
            onClick={() =>
              setTempGuests((g) => ({ ...g, adults: g.adults + 1 }))
            }
            className={Styles["optionCounterButton"]}
          >
            <LuPlus />
          </Button>
        </div>
      </div>

      {/* CHILDREN */}
      <div className={Styles["guest-row"]}>
        <span>Children</span>
        <div className={Styles["counter"]}>
          <Button
            onClick={() =>
              setTempGuests((g) => ({
                ...g,
                numChildren: Math.max(0, g.numChildren - 1),
              }))
            }
            className={Styles["optionCounterButton"]}
          >
            <LuMinus />
          </Button>

          <input
            type="text"
            value={tempGuests.numChildren}
            readOnly
            className={Styles["optionItem"]}
          />

          <Button
            onClick={() =>
              setTempGuests((g) => ({
                ...g,
                numChildren: g.numChildren + 1,
              }))
            }
            className={Styles["optionCounterButton"]}
          >
            <LuPlus />
          </Button>
        </div>
      </div>

      {/* ROOMS */}
      <div className={Styles["guest-row"]}>
        <span>Rooms</span>
        <div className={Styles["counter"]}>
          <Button
            onClick={() =>
              setTempGuests((g) => ({
                ...g,
                rooms: Math.max(1, g.rooms - 1),
              }))
            }
            className={Styles["optionCounterButton"]}
          >
            <LuMinus />
          </Button>

          <input
            type="text"
            value={tempGuests.rooms}
            readOnly
            className={Styles["optionItem"]}
          />

          <Button
            onClick={() =>
              setTempGuests((g) => ({ ...g, rooms: g.rooms + 1 }))
            }
            className={Styles["optionCounterButton"]}
          >
            <LuPlus />
          </Button>
        </div>
      </div>

      <hr className={Styles["hr-line"]} />

      {/* PET FRIENDLY */}
      <div className={Styles["pet-row"]}>
        <label>
          <strong>Pet friendly</strong>
          <p>Only show stays that allow pets</p>
        </label>

        <input
          type="checkbox"
          checked={tempGuests.petFriendly}
          onChange={() =>
            setTempGuests((g) => ({ ...g, petFriendly: !g.petFriendly }))
          }
          className={Styles["pet-checkbox"]}
        />
      </div>

      <div className={Styles["btn-cover"]}>
        <Button onClick={close} className={Styles["cancel-btn"]}>
          Cancel
        </Button>

        <Button
          onClick={() => {
            setAdults(tempGuests.adults);
            setNumChildren(tempGuests.numChildren);
            setRooms(tempGuests.rooms);
            setPetFriendly(tempGuests.petFriendly);
            close();
          }}
          className={Styles["apply-btn"]}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
