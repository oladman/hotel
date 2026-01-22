import React from "react";
import Styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className={Styles['footer']}>

      <div className={Styles['promo']}>
        <h2 className={Styles['promo-title']}>Get discounts instantly</h2>
        <p className={Styles['promo-text']}>
          Create an account and enjoy an <strong>instant 10%</strong> discount on your first reservation.
         
        </p>

        <div className={Styles['input-wrapper']}>
          <input
            type="email"
            placeholder="Enter your email"
            className={Styles['email-input']}
          />
          <button className={Styles['get-started']}>Get started</button>
        </div>
      </div>

 
      <div className={Styles['footer-links']}>
        <div className={Styles['column-main']}>
          <h4>Sign up for our newsletter</h4>
          <p>
            Don’t worry, we reserve our newsletter for important news so we only send a few
            updates a year.
          </p>
          <button className={Styles['subscribe-btn']}>Subscribe</button>
        </div>
        <div className={Styles['column-cover']}>
        <div className={Styles['column']}>
          <h4>Help and services</h4>
          <ul>
            <li><a href="#">How does it work</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={Styles['column']}>
          <h4>To explore</h4>
          <ul>
            <li><a href="#">Accommodations</a></li>
            <li><a href="#">Experiences</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className={Styles['column']}>
          <h4>Other possibilities</h4>
          <ul>
            <li><a href="#">Give away</a></li>
            <li><a href="#">Subscribe</a></li>
          </ul>
        </div>
         </div>
      </div>


      <div className={Styles['bottom']}>
        <p>© 2025 Oladman</p>
        <div className={Styles['socials']}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      
<div className={Styles['portfolio']}>
  <p>This project is featured in Oladimeji’s portfolio.</p>
  <Link
    href="https://oladimejiseunayo.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View here
  </Link>
</div>


    </footer>
  );
};

export default Footer;


