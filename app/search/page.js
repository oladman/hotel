"use client";
import { useEffect, useState, useRef, Suspense } from "react";
import Styles from "./page.module.css";
import { FaStar, FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import DatePickerModal from "../../components/DatePickerModal/DatePickerModal";
import Link from "next/link";

function SearchPageContent() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState("");
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
  const searchParams = useSearchParams();
  const modalRef = useRef(null);

  // ✅ Load hotels on mount (from sessionStorage or API)
  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setDestination(query);
      handleSearch(query, false);
    } else {
      const stored = sessionStorage.getItem("searchResults");
      if (stored) {
        setHotels(JSON.parse(stored));
      }
      setLoading(false);
    }
  }, []);

  // ✅ Close guest modal when clicking outside
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

  // ✅ Handle search (now reloads content on same page)
  const handleSearch = async (searchTerm = destination, shouldPush = true) => {
    if (!searchTerm.trim()) {
      alert("Please enter a destination");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/hotel?name=${encodeURIComponent(searchTerm)}`);
      if (!res.ok) throw new Error("Failed to fetch hotels");

      const data = await res.json();
      setHotels(data);

      // Store for reloads
      sessionStorage.setItem("searchResults", JSON.stringify(data));

      // Update URL query
      if (shouldPush) {
        router.push(`/search?query=${encodeURIComponent(searchTerm)}`, { scroll: true });
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Error searching hotels");
    } finally {
      setLoading(false);
    }
  };

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className={`${Styles["search-page"]} ${Styles["container"]}`}>
      {/* ✅ Spinner Overlay */}
      {loading && (
        <div className={Styles["spinner-overlay"]}>
          <div className={Styles["spinner"]}></div>
          <p>Searching hotels...</p>
        </div>
      )}

      {/* ✅ Search Bar */}
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
          {destination && <LuX className={Styles["searchbar-clear"]} onClick={clearDestination} />}
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
            <div className={Styles["guest-modal"]} ref={modalRef}>
              {/* Adults */}
              <div className={Styles["guest-row"]}>
                <span>Adults</span>
                <div className={Styles["counter"]}>
                  <button onClick={(e) => { e.stopPropagation(); handleDecrement(setAdults, adults); }}>
                    <LuMinus />
                  </button>
                  <input type="text" value={adults} readOnly />
                  <button onClick={(e) => { e.stopPropagation(); handleIncrement(setAdults, adults); }}>
                    <LuPlus />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className={Styles["guest-row"]}>
                <span>Children</span>
                <div className={Styles["counter"]}>
                  <button onClick={(e) => { e.stopPropagation(); handleDecrement(setChildren, children); }}>
                    <LuMinus />
                  </button>
                  <input type="text" value={children} readOnly />
                  <button onClick={(e) => { e.stopPropagation(); handleIncrement(setChildren, children); }}>
                    <LuPlus />
                  </button>
                </div>
              </div>

              {/* Rooms */}
              <div className={Styles["guest-row"]}>
                <span>Rooms</span>
                <div className={Styles["counter"]}>
                  <button onClick={(e) => { e.stopPropagation(); handleDecrement(setRooms, rooms); }}>
                    <LuMinus />
                  </button>
                  <input type="text" value={rooms} readOnly />
                  <button onClick={(e) => { e.stopPropagation(); handleIncrement(setRooms, rooms); }}>
                    <LuPlus />
                  </button>
                </div>
              </div>

              <hr className={Styles["divider"]} />

              {/* Pet-friendly */}
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
                    setChildren(0);
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
          )}
        </div>

        <button className={Styles["search-btn"]} onClick={() => handleSearch()}>
          <FaSearch />
        </button>
      </div>

      {/* ✅ No results */}
      {!loading && hotels.length === 0 && (
        <p className={Styles["no-results"]}>No hotel found.</p>
      )}

      {/* ✅ Hotel List */}
      {!loading && hotels.length > 0 && (
        <div className={Styles["hotel-list"]}>
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
              <div className={Styles["hotel-card"]}>
                <div className={Styles["image-container"]}>
                  <img
                    src={`/images/${hotel.image}` || "/default-hotel.jpg"}
                    alt={hotel.Hname}
                  />
                  {hotel.badge && <span className={Styles["badge"]}>{hotel.badge}</span>}
                </div>

                <div className={Styles["hotel-info"]}>
                  <div className={Styles["subtitle"]}>
                    <FaMapMarkerAlt /> {hotel.Haddress}
                  </div>
                  <h3 className={Styles["title"]}>{hotel.Hname}</h3>

                  <div className={Styles["bottom"]}>
                    <div className={Styles["rating"]}>
                      <FaStar className={Styles["star"]} />
                      <span>{hotel.rating}</span>
                      <span className={Styles["reviews"]}>
                         reviews
                      </span>
                    </div>
                    <div className={Styles["price"]}>
                      <strong>${hotel.startingPrice}</strong> <small>/night</small>
                      <div className={Styles["total"]}>
                        ${hotel.startingPrice} total
                      </div>
                    </div>
                  </div>
                </div>

                <button className={Styles["favorite"]}>
                  <FaRegHeart />
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
