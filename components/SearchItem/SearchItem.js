const getHotels = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/hotel/", {
      catch: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch hotels");
    } 
    return res.json()
    
  } catch (error) {
    console.log("Error loading hotels:", error);
  }
};

export default async function SearchItem() {
  const hotelist  = await getHotels();
  console.log('Actual Data', hotelist)


  return (
    <>
      {hotelist && hotelist.map((h) => (
        <div className="searchItem">
          <img
            src={h.image}
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">{h.Hname}</h1>
            <span className="siDistance">{h.Haddress}</span>
            <span className="siTaxiOp">{h.Country}</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              {h.Description}
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">$112</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
