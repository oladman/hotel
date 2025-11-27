"use client";

import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LuFlower2,
  LuDog,
  LuDumbbell,
  LuWaves,
  LuCloud,
  LuWifi,
  LuWine,
  LuCar,
  LuTv,
  LuCalendar,
  LuUser,
  LuBuilding2,
  LuStar,
  LuMapPin,
} from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import Styles from "./HotelData.module.css";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import RoomsList from "../RoomList/RoomsList";
import SearchBar from "../SearchBar/SearchBar";
import HotelDataSideBar from "../HotelDataSideBar/HotelDataSideBar";
import RoomCard from "../RoomCard/RoomCard";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import HotelHeader from "./HotelHeader";
import HotelImageGallery from "./HotelImageGallery";
import HotelAmenities from "./HotelAmenities";

export default function HotelData({ hotel, initialRooms = [], hotelName }) {
  // ✅ Hooks must always run
  const [filteredRoomTypes, setFilteredRoomTypes] = useState(
    initialRooms.length > 0 ? initialRooms : hotel?.roomTypes || []
  );
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearchResults = (results) => {
    if (Array.isArray(results) && results.length > 0) {
      setFilteredRoomTypes(results);
      setSearchMessage("");
    } else {
      setFilteredRoomTypes([]);
      setSearchMessage(
        "The available rooms can’t accommodate your group size. Try booking more rooms for your trip."
      );
    }
  };

  // ❗ Do NOT return before hooks
  if (!hotel) {
    return <p>Loading hotel data...</p>;
  }

  const {
    country,
    Hname,
    Haddress,
    Hdescription,
    image,
    rating,
    startingPrice,
    images = [],
    amenities = [],
    roomTypes = [],
  } = hotel;

  return (
    <>
      <header
        className={`${Styles["Country_Data_Header"]} ${Styles["container"]}`}
      >
        <Breadcrumbs countryName={country?.countryName} hotelName={Hname} />
        <HotelHeader Hname={Hname} Haddress={Haddress} rating={rating} />
      </header>
      <HotelImageGallery image={image} images={images} Hname={Hname} />
      <section className={`${Styles["hotelDataCover"]} ${Styles["container"]}`}>
        <div className={Styles["fullHotelDetails"]}>
          <div className={Styles["hotelDetailsLeft"]}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h1 className={Styles["hotelDetailsLeftHeading"]}>
                About the Hotel
              </h1>
              <p className={Styles["hotelDescription"]}>{Hdescription}</p>
            </div>

            <div className={Styles["hotelAmenities"]}>
              <h2>Amenities</h2>
              <HotelAmenities amenities={hotel.amenities} />
            </div>

            <div className={Styles["coverExtendedAmenities"]}>
              <div className={Styles["extendedAmenities"]}>
                <i>
                  <LuBuilding2 />
                </i>
                <div>
                  <p>Dedicated Workspace</p>
                  <p>
                    A common area with wifi that&apos;s well-suited for working
                  </p>
                </div>
              </div>

              <div className={Styles["extendedAmenities"]}>
                <i>
                  <LuUser />
                </i>
                <div>
                  <p>Self check-in</p>
                  <p>Check yourself in with the lockbox.</p>
                </div>
              </div>

              <div className={Styles["extendedAmenities"]}>
                <i>
                  <LuCalendar />
                </i>
                <div>
                  <p>Free Cancellation</p>
                  <p>Places in free cancellation for 48 hours</p>
                </div>
              </div>
            </div>
          </div>

          <HotelDataSideBar
            hotel={hotel}
            roomTypes={roomTypes}
            onResults={handleSearchResults}
          />
        </div>

        <section className={Styles["Available-room"]}>
          <h1>Available Rooms</h1>

          {filteredRoomTypes.length > 0 ? (
            <RoomCard roomTypes={filteredRoomTypes} Hname={Hname} />
          ) : (
            <p className={Styles["no-rooms-message"]}>{searchMessage}</p>
          )}
        </section>
      </section>
    </>
  );
}
