import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { format } from "date-fns";
import GuestModal from "./GuestModal";
import DatePickerModal from "../../components/DatePickerModal/DatePickerModal";
import Styles from "./Search.module.css";

const SearchBar = ({
  destination,
  setDestination,
  dates,
  setDates,
  adults,
  setAdults,
  numChildren,
  setNumChildren,
  rooms,
  setRooms,
  petFriendly,
  setPetFriendly,
  showGuestModal,
  setShowGuestModal,
  showDateModal,
  setShowDateModal,
  handleSearch,
  modalRef,
}) => {
  const clearDestination = () => setDestination("");
  const totalGuests = adults + numChildren;

  return (
    <div className={Styles["search-bar"]}>
      <div
        className={`${Styles["search-item"]} ${Styles["searchbar-destination"]}`}
      >
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="To where?"
          className={Styles["search-input"]}
        />
        {destination && (
          <LuX
            className={Styles["searchbar-clear"]}
            onClick={clearDestination}
          />
        )}
      </div>

      <div className={Styles["search-item"]}>
        <div
          className={Styles["searchbar-date"]}
          onClick={() => setShowDateModal(!showDateModal)}
        >
          <strong>
            {format(dates.startDate, "MMM d")} - {format(dates.endDate, "d")}
          </strong>
        </div>

        {showDateModal && (
          <div className={Styles["modal-wrapper"]}>
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
        className={Styles["search-item"]}
        onClick={() => setShowGuestModal(!showGuestModal)}
        style={{ position: "relative" }}
      >
        <div className={Styles["searchbar-field"]}>
          <input
            type="text"
            value={`${totalGuests} Guests`}
            className={Styles["searchbar-input"]}
            readOnly
          />
        </div>

        {showGuestModal && (
          <GuestModal
            adults={adults}
            setAdults={setAdults}
            numChildren={numChildren}
            setNumChildren={setNumChildren}
            rooms={rooms}
            setRooms={setRooms}
            petFriendly={petFriendly}
            setPetFriendly={setPetFriendly}
            setShowGuestModal={setShowGuestModal}
            modalRef={modalRef}
          />
        )}
      </div>

      <button
        className={Styles["search-btn"]}
        onClick={() => handleSearch()}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;