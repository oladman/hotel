'use client'
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import bg from "../public/images/background1.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  console.log("date", date);
  const router = useRouter();

  console.log("destination", destination);

  useEffect(() => {
    if (!navigator.geolocation) {
      // Geolocation is not supported by the browser
      // Handle the error or show a message to the user

      return;
    }

    // Get the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Store the location in the state
        setLocation({ latitude, longitude });
        console.log("Location", location);
      },

      (error) => {
        // Handle the error
      }
    );
  }, []);



  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  console.log("options", options);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    router.push("/hotels", { state: { destination, date, options } });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      // Geolocation is not supported by the browser
      // Handle the error or show a message to the user

      return;
    }

    // Get the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Store the location in the state
        setLocation({ latitude, longitude });
        console.log("Location", location);
      },

      (error) => {
        // Handle the error
      }
    );
  }, []);
  return (
    <div
      className="header_wrapper"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="container header_content">
        <h4 className="header_secondary_title">Let’s Make more Memories</h4>
        <h1 className="header_main_title">
          Camp is more than just a word, <br />
          it’s an experience!
        </h1>
        <button className="header_btn">
          <img
            src="./images/video-icon.png"
            alt=""
            className="header_btn_icon"
          />
          <span>Watch this video</span>
        </button>
      </div>

      <div className="headerSearch">
        <div className="headerSearchItem">
          <IoSearchOutline className="headerIcon" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="headerSearchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
