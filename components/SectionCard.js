import Link from "next/link";

const getCountry = async () => {
 
 try {
    const res = await fetch("http://localhost:3000/api/country", {
      cache: "no-store",  // Fixed typo here
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch Country");
    }
  
    // Ensure that the response content is JSON
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return res.json();
    } else {
      throw new Error("Unexpected response format, expected JSON");
    }
    
  } catch (error) {
    console.log("Error fetching country:", error);
  }

  


};

const SectionCard = async () => {
  const countryList  = await getCountry();
  console.log('Country Data fetch', countryList)
  return (
    <> 
   
    {countryList && countryList.map((country) => (
      
    <Link key={country.id} href={`http://localhost:3000/country/${country.id}`}><section className="">
    <div className="container about_container">
      <div className="about_cards">
        <div className="card_cover">
          <img
            src={country.CountryAttach}
            alt={country.countryName}
            className="card_img"
          />
          <h3 className="card_title">{country.countryName}</h3>
          <p className="card_p">
           {country.CountryDescription}
          </p>
        </div>
       
        
        
      </div>
    </div>
  </section > </Link>))   }

 
</> 
  )
}

export default SectionCard