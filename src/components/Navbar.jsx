import React from "react";
import {Link} from 'react-scroll';

import myLogo from "../myLogo.PNG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={myLogo} alt="my brand logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" className="nav-link" href="#">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="skills" className="nav-link" href="#">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="" className="nav-link" href="#">
                How work
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link smooth={true} to="" className="nav-link" href="#">
                Contacts
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
