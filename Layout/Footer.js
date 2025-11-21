import React from "react";
import Styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={Styles['footer']}>

      <div className={Styles['promo']}>
        <h2 className={Styles['promo-title']}>Get discounts instantly</h2>
        <p className={Styles['promo-text']}>
          To save you just have to log in to your account and look for the experiences
          with the green or yellow color code. On your first reservation you can enjoy a{" "}
          <strong>10% discount</strong>.
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
    </footer>
  );
};

export default Footer;


{/* =====OLD FOOTER =======
  
  
  import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best Hotel deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about_header">
            <h2 className="about_header_primary_title">Top Destinations</h2>

            <div className="Top-destination-group">
              <ul>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Bihar
                  </Link>
                  <p>50 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    New Jersey
                  </Link>
                  <p>200 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Tenerife
                  </Link>
                  <p>90 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
              </ul>

              <ul>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Lake District
                  </Link>
                  <p>160 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Lake Zanzibar
                  </Link>
                  <p>23 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Hawaii
                  </Link>
                  <p>210 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Turkey
                  </Link>
                  <p>180 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
              </ul>

              <ul>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in England
                  </Link>
                  <p>300 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Lake Ibiza
                  </Link>
                  <p>186 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Phuket Province
                  </Link>
                  <p>5500 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Isle of Wight
                  </Link>
                  <p>935 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
              </ul>

              <ul>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Bihar
                  </Link>
                  <p>50 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    New Jersey
                  </Link>
                  <p>200 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Tenerife
                  </Link>
                  <p>90 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
              </ul>

              <ul>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Bihar
                  </Link>
                  <p>50 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    New Jersey
                  </Link>
                  <p>200 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Tenerife
                  </Link>
                  <p>90 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
                <li>
                  <Link href="#" className="group-link">
                    Hotels in Santorini
                  </Link>
                  <p>120 properties</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer_container">
          <p className="footer_p">Copyright Oladman</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

  
  
  
  */}