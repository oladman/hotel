'use client'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "/components/Button"

function CountryData({getCountryData}) {

  console.log(getCountryData)
  return (
    <>
    <div className="Country_Data_Header">
      <div className="Country_Data_Header-top-most">
        <p>{getCountryData.countryName}</p>
        <p>
          
          <FontAwesomeIcon icon={faAngleRight} className="headerIconNew" />
        </p>
        <p>{getCountryData.countryName}</p>
      </div>
      <div className="Country_Data_Header-bottom-most">
        <h1>{getCountryData.countryName}</h1>
        <p>Travel Guide</p>
      </div>
    </div>

    <div className="Country_Data_Section">
      <div>
        <div className="Country_Data_image">
          <div className="first-image-countryData">
            <img src={getCountryData.CountryAttach} />
          </div>
          <div className="cover-fetched-imageData">
            {getCountryData.ImageContent.map((image) => (
              <div className="cover-image-countryData" key={image.id}>
                <img className="image-countryData" src={image.content} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-countryData">
          {getCountryData.aboutCountry.map((about) => (
            <div className="cover-text-countryData" key={about.id}>
              <p className="text-p-countryData">{about.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="popular-country_Data">
        <h2>Popular cities in {getCountryData.countryName}</h2>

        <div className="cities_Country-Data">
          {getCountryData.hotel.map((hotel) => (
            <div className="Data-card" key={hotel.id}>
              <div className="Data-card-top">
                <img className="Data-card-top-image" src={hotel.image} />
                <p className="Data-card_text">{hotel.Hname}</p>
                <p className="Data-card_text">{hotel.Haddress}</p>
              </div>

              <div className="Data-card-bottom">
                <p className="desc-countryData">{hotel.Hdescription}</p>
              </div>
              <div className="visit-Country-Data">
                <h3>Reasons to visit</h3>
                <p>
                  
                  <span className="span-yes-country-Data">
                    Hotel Starting :
                  </span>
                  {hotel.hotelPrice}
                </p>
                <p>
                  
                  <span className="span-yes-country-Data">
                    Ocean View :
                  </span>
                  {hotel.oceanView ? <span> YES </span> : <span> NO </span>}
                </p>
                <p>
                  
                  <span className="span-yes-country-Data">
                    Forest View :
                  </span>
                  {hotel.forestView ? <span> YES </span> : <span> NO </span>}
                </p>
                <p>
                  
                  <span className="span-yes-country-Data">
                    Mountain View :
                  </span>
                  {hotel.mountainView ? (
                    <span> YES </span>
                  ) : (
                    <span> NO </span>
                  )}
                </p>
              </div>
              <div className="explore-city"> 
              <Button  className={'buttonExplore'}>
      Explore City
    </Button>
    <Button  className={'buttonExplore'}>
      Find Hotels
    </Button>
                
              </div>
            </div>
           
          ))}
        </div>
      </div>

      <div className="popular-places">
        <h2>Popular places to visit in {getCountryData.countryName}</h2>

        <div className="popular-card">
        {getCountryData.popularPlaces.map((popular) => (
              <div className="popular-id" key={popular.id}>
                <div className="popular-image">
                  <img src={popular.image} />
                </div>
                <div className="popular-body-text"> 
                  <h4>{popular.name}</h4>
                  <p className="popular-address">{popular.address}</p>
                  <p className="popular-about">{popular.about}</p>
                </div>
           
              </div>
            ))}
        </div>
        </div>
    </div>
  </>
  )
}

export default CountryData