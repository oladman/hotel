"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Styles from "./Checkout.module.css";
import GuestInfoForm from "./GuestInfoForm";
import PaymentMethodForm from "./PaymentMethodForm";
import CancellationPolicy from "./CancellationPolicy";
import Carousel from "./Carousel";
import BookingSummary from "./BookingSummary";

function CheckoutHotelContent() {
  const params = useSearchParams();
  const [room, setRoom] = useState(null);
  const [hname, setHname] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    setRoom(JSON.parse(localStorage.getItem("selectedHotel")));
    setHname(localStorage.getItem("HotelName"));
    setSearchData(JSON.parse(localStorage.getItem("searchData")));
  }, []);

  if (!room) return <p>Loading checkout details...</p>;

  return (
    <div className={Styles["container"]}>
      <div className={Styles["checkout-container"]}>
        
        {/* LEFT SIDE */}
        <div className={Styles["left"]}>
          <h2>Confirm & Pay</h2>

          <div className={Styles["booking-container"]}>
            <h1 className={Styles["title"]}>Secure Your Exclusive Stay</h1>

            <GuestInfoForm />
            <PaymentMethodForm />
            <CancellationPolicy />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={Styles["right"]}>
          <Carousel images={room.roomTypeImages || []} />
          <BookingSummary room={room} hname={hname} searchData={searchData} />
        </div>

      </div>
    </div>
  );
}

export default function CheckoutHotel() {
  return (
    <Suspense fallback={<p>Loading checkout details...</p>}>
      <CheckoutHotelContent />
    </Suspense>
  );
}
