import React from "react";
import "./Nav.css";

const Nav = ({ onPageChange }) => {
  return (
    <div>
      <div id="links">
        <button className="home" onClick={() => onPageChange("home")}>
          Home
        </button>
        <button className="about" onClick={() => onPageChange("about")}>
          About
        </button>
        <button className="portfolio" onClick={() => onPageChange("portfolio")}>
          Portfolio
        </button>
        <button className="contact" onClick={() => onPageChange("contact")}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Nav;
