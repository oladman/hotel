import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";

function page() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container nav_container">
          <Link href="/" className="nav_logo">
            <Image
              src={logo}
              alt=""
              width="150"
              height="90"
              className="nav_logo_img"
            />
          </Link>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
            </li>
            <li className="nav_item">
              {" "}
              <Link className="nav_link" href="/login">
                Sign In
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" href="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_btn">
                Book Now
              </a>
            </li>
          </ul>
          <span className="menu_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
        <ul className="mobile_nav_list mobile_nav_toggle">
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              Home
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              About
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              Campground
            </a>
          </li>
          <li className="mobile_nav_item mobile_nav_link_last">
            <a href="#" className="mobile_nav_link">
              Contact
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="" className="mobile_nav_btn">
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default page;
