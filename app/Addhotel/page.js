"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const [Hotel, setHotel] = useState({
    Country: "",
    Hname: "",
    Haddress: "",
    Hdescription: "",
    image: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/hotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Hotel),
      });

      if (!res.ok) throw new Error(await res.text());

      // Optional redirect after successful post
      // router.push("/your-success-page");
    } catch (e) {
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
            <label>Country</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Country"
              placeholder="Enter Country"
              onChange={(e) => setHotel({ ...Hotel, Country: e.target.value })}
            />
          </div>

          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label>Hname</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Hname"
              placeholder="Enter Hotel Name"
              onChange={(e) => setHotel({ ...Hotel, Hname: e.target.value })}
            />
          </div>

          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label>Haddress</label>
            <input
              style={{ padding: "10px" }}
              type="text"
              name="Haddress"
              placeholder="Specify Hotel Address"
              onChange={(e) =>
                setHotel({ ...Hotel, Haddress: e.target.value })
              }
            />
          </div>

          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label>Hotel Details</label>
            <textarea
              name="Hdescription"
              placeholder="Enter Hotel Details"
              onChange={(e) =>
                setHotel({ ...Hotel, Hdescription: e.target.value })
              }
            />
          </div>

          <br />
          <div className="input-loginm" style={{ marginTop: "10px" }}>
            <label>IMG URL</label>
            <input
              type="text"
              name="image"
              onChange={(e) => setHotel({ ...Hotel, image: e.target.value })}
            />
          </div>

          <div className="btn-login-stylem">
            <button className="login-btnm">POST HOTEL</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
