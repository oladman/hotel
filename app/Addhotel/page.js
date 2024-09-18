"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


function page() {
  const router = useRouter();
  const [Hotel, setHotel] = useState({
    Country: "",
    Hname: "",
    Haddress: "",
    Hdescription: "",
    image: "",
  });

  console.log(Hotel)

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const res = fetch('/api/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Hotel),
      })

    
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      // Handle errors here
      console.error(e);
    }
  };

  return (
    <div className="overal-loginm">
      <div className="login-coverm">

        <h1>Post HOTELS</h1>
        <hr style={{ width: "100%" }} className="sign-line" />

        <form className="create-style" onSubmit={handleSubmit}>
          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label htmlFor="firstname" id="">
              Country
            </label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Country"
              placeholder="Enter Product Name"
              onChange={(e) => setHotel({ ...Hotel, Country: e.target.value })}
            />
          </div>
          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label htmlFor="firstname" id="">
              Hname
            </label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Hname"
              onChange={(e) => setHotel({ ...Hotel, Hname: e.target.value })}
              placeholder="Enter Selling Amount"
            />
          </div>
          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label htmlFor="firstname" id="">
              Haddress
            </label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Haddress"
              onChange={(e) => setHotel({ ...Hotel, Haddress: e.target.value })}
              placeholder="Specify Haddress"
            />
          </div>
          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label htmlFor="firstname" id="">
              Product Details
            </label>
            <textarea
              type="text"
              name="Hdescription"
              onChange={(e) =>
                setHotel({ ...Hotel, Hdescription: e.target.value })
              }
              placeholder="Enter Product Details"
            />
          </div>

          <br />
          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label htmlFor="firstname" id="">
              IMG URL
            </label>
            <input
              type="text"
              name="image"
              onChange={(e) => setHotel({ ...Hotel, image: e.target.value })}
            />
          </div>

          <div className="btn-login-stylem">
            
            <button className="login-btnm">POST PRODUCT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
