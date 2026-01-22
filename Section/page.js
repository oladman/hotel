import HomeCard from "../components/HomeCard/HomeCard";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button";
import { getCountry } from "../lib/api/getCountry";
import { getRandomHotels } from "../lib/api/getRandomHotels";
import HotelCardHome from "../components/HotelCardHome/HotelCardHome";


async function page() {
  const countryList = await getCountry();
  const randomHotels = await getRandomHotels();

  return (
    <>
      <Hero />
      <div className="container section-card-cover"> 
        <div className="explore-city">
          <h1 className="about_header_topDestination">Explore Nearby</h1>
          <div>
            <p>Recommendation place for you</p>
            <Button className="all-destination-btn" >Explore More</Button>
          </div>
        </div> 
        <div className="sectionCard-style">
          <HomeCard countryList={countryList}/>
        </div>
      </div>

      <div className="container section-card-cover">
        <div className="explore-city">
          <h1 className="about_header_topDestination">Featured Hotels</h1>
          <div>
            <p>Handpicked hotels for your next stay</p>
            <Button className="all-destination-btn" >View All Hotels</Button>
          </div>
        </div>
        <div className="sectionCard-style hotel-grid-home">
          {randomHotels.map((hotel) => (
            <HotelCardHome key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;

