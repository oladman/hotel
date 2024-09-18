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
