import { FaBuilding, FaBed, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import Styles from "./Checkout.module.css";

export default function BookingSummary({ room, hname, searchData }) {
  return (
    <div className={Styles["hotel-info-right"]}>
      <h2>Booking Summary</h2>
      <hr />

      <div className={Styles["hotel-info-cover"]}>
        <div><FaBuilding /> Hotel</div>
        <p>{hname}</p>
      </div>

      <div className={Styles["hotel-info-cover"]}>
        <div><FaBed /> Room</div>
        <p>{room.name}</p>
      </div>

      {searchData && (
        <>
          <div className={Styles["hotel-info-cover"]}>
            <div><FaUsers /> Guests</div>
            <p>{searchData.adults} adults, {searchData.children} children</p>
          </div>

          <div className={Styles["hotel-info-cover"]}>
            <div><FaCalendarAlt /> Check-in/out</div>
            <p>
              {new Date(searchData.checkIn).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              {" "} <LuArrowRight /> {" "}
              {new Date(searchData.checkOut).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
          </div>
        </>
      )}

      <p style={{ display:'flex', flexDirection:'column' }}>
        <span style={{ fontSize:'12px', color:'#555' }}>Total:</span>
        <strong style={{ fontSize:'18px', fontWeight:500 }}>${room.basePrice}</strong> 
      </p>


      <div style={{ fontSize:'12px', marginTop:'10px', fontWeight:300 }}>
        <Link style={{ color:'#0070f3' }} href="#">View Rules</Link> | <Link style={{ color:'#0070f3',  }} href="#">Get Direction</Link> | <Link style={{ color:'#0070f3' }} href="#">Call Hotel</Link>
      </div>
    </div>
  );
}
