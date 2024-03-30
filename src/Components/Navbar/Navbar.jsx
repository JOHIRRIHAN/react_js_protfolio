/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./navbar.css";
import MobileNav from "../../MobileNav/MobileNav.jsx";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./images/logo.png" alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="App.jsx">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="Skills.jsx">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={`material-symbols-outlined`}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <IoCloseCircleOutline /> : <IoMdMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
