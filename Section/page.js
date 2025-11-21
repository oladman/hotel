import HomeCard from "../components/HomeCard/HomeCard";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button";


function page() {
  

  return (
    <>
      
      <Hero />
      <div className="container section-card-cover"> 
        <div className="explore-city">
      <h1 className="about_header_topDestination">Explore Nearby</h1>
      <div>
        <p>Recomendation place for you</p>
        <Button className="all-destination-btn" >Explore More</Button>
      </div>
      </div> 
        <div className="sectionCard-style">
          <HomeCard />
        </div>
      </div>
    </>
  );
}

export default page;
