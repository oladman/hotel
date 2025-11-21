'use client';
import { useState } from "react";
import Link from "next/link";
import Styles from "./Header.module.css";
import {
  CgMenuGridO
} from "react-icons/cg";
import {
  LuSearch,
  LuArrowUpRight,
  LuHome,
  LuBed,
  LuInfo,
  LuPhone,
  LuBriefcase,
  LuUser,
  LuSettings,
  LuGlobe2,
  LuDollarSign,
  LuLanguages
} from "react-icons/lu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={Styles["header-cover"]}>
      <div className={Styles["container"]}>
        <header className={Styles["header"]}>
          
          <div className={Styles["nav-cover"]}>
            <Link href="/" className={Styles["logonew"]}>
              Vac<span className={Styles["dot"]}></span>Easy
            </Link>

           
            <nav className={Styles["nav-desktop"]}>
              <a href="#" className={`${Styles["nav-link"]} ${Styles["active"]}`}>
                Home
              </a>
              <a href="#" className={Styles["nav-link"]}>
                Rooms
              </a>
              <a href="#" className={Styles["nav-link"]}>
                Services
              </a>
              <a href="#" className={Styles["nav-link"]}>
                About Us
              </a>
              <a href="#" className={Styles["nav-link"]}>
                Contact Us
              </a>
            </nav>

           
            <button
              className={Styles["menu-btn"]}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <CgMenuGridO />
            </button>
          </div>

    
          <div className={Styles["search-desktop"]}>
            <div className={Styles["search-input"]}>
              <input placeholder="Search Hotel..." />
              <LuSearch className={Styles["Search-icon"]} />
            </div>
            <Link href="#" className={Styles["Book-now"]}>
              Book Now <LuArrowUpRight className={Styles["link-icon"]} />
            </Link>
          </div>
        </header>

        
        <aside
          className={`${Styles["mobile-nav"]} ${
            menuOpen ? Styles["show"] : ""
          }`}
        >
       
          <div className={Styles["mobile-section"]}>
            <h4 className={Styles["mobile-section-title"]}>Account</h4>
            <a href="#" className={Styles["mobile-link"]}>
              <LuUser /> Sign In
            </a>
          </div>

         
          <div className={Styles["mobile-section"]}>
            <h4 className={Styles["mobile-section-title"]}>Services</h4>
            <a href="#" className={Styles["mobile-link"]}>
              <LuHome /> Home
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuBed /> Rooms
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuBriefcase /> Services
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuInfo /> About Us
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuPhone /> Contact Us
            </a>
          </div>

        
          <div className={Styles["mobile-section"]}>
            <h4 className={Styles["mobile-section-title"]}>Support</h4>
            <a href="#" className={Styles["mobile-link"]}>
              <LuLanguages /> Language
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuGlobe2 /> Country
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuDollarSign /> Currency
            </a>
            <a href="#" className={Styles["mobile-link"]}>
              <LuSettings /> Settings
            </a>
          </div>
        </aside>

       
        {menuOpen && (
          <div
            className={Styles["overlay"]}
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Header;
