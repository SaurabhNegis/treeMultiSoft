// Navbar.jsx
import React from "react";
import "./Navbar.css";
import  Logo  from '../../assets/images/tree_logo.png';
import Call_icon from '../../assets/svgjsx/call.jsx'
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo">
      <img src={Logo} alt="" />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="navbar-menu">
        <li><a href="#home">Service</a></li>
        <li><a href="#services">Industries</a></li>
        <li><a href="#about">Company</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      {/* Right Side: Call Section */}
      <div className="navbar-call">
        <div className="flex flex-center gap-sm">
        <div className="round-fulls">
                          <Call_icon
                            className="priceSection-call-icon"
                            color={"white"}
                          />
         </div>
         <div className="flex flex-column ">

          <h4>Call us</h4>
        <span className="call-text"> +123 456 7890</span>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
