import React from 'react';
import Styles from './Hero.module.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import bg from "../../public/images/room4.jpg";
import SearchBar from '../SearchBar/SearchBar';

export default function Hero() {
  return (
    <section className={Styles['hero']} >
      <div className={Styles['hero-content']}>
        <div className={`${Styles['text-section']} ${Styles['container']}`} >
          <h1>
            Find <span>deals on hotels,</span> <br />
            resorts and much more...
          </h1>
          <h2>Discover comfort, book smart, and travel better every time.</h2>
         <p>
  We've got you covered with amazing deals at thousands upon
  thousands of top hotels in cities &amp; countries worldwide.
</p>

          <div className={Styles['the-search']}>
            <SearchBar />
            </div>

          <div className={Styles['newsletter']}>
            <span className={Styles['badge']}>New</span>
            <input type="text" placeholder="Stay connect to get upcoming news" />
          </div>
        </div>

        <div className={Styles['image-section']}>
          <div className={Styles['info-box']}>
            <h3>Luxury Hotels</h3>
            <p><span>46,072</span> Properties</p>
          </div>

          <div className={Styles['hotel-card']}>
            <h4>Sanirah Hotel</h4>
            <p>Yogyakarta, Indonesia</p>
            <ul>
              <li>340 sqm</li>
              <li>1 Bed</li>
              <li>1 Bathroom</li>
            </ul>
            <div className={Styles['price']}>
              <h2>$42 <span>/ night</span></h2>
              <button>View Room</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
