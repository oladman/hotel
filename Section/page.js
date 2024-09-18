

import HeroSection from "../components/HeroSection"
import SectionCard from "../components/SectionCard";

function page() {
  

  return (
    <>
      <HeroSection />
      <div className="section-card-cover"> 
        <h1 className="about_header_topDestination">Trending Destinations</h1>
        <div className="sectionCard-style">
          <SectionCard />
        </div>
      </div>
    </>
  );
}

export default page;
