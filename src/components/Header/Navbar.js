import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="navbar">
      <GiHamburgerMenu size={23} className="hamburger" />
      <div className="nav-eleement-container">
        <span className="nav_element all">
          <strong>All</strong>
        </span>
        <span className="nav_element nav_element-border">Today's Deals</span>
        <span className="nav_element nav_element-border">Customer Service</span>
        <span className="nav_element nav_element-border">Registry</span>
        <span className="nav_element nav_element-border">Gift Cards</span>
        <span className="nav_element nav_element-border">Sell</span>
      </div>
      <span className="nav_element nav-element-right">
        Shop Mother's Day Gifts
      </span>
    </div>
  );
}

export default Navbar;
