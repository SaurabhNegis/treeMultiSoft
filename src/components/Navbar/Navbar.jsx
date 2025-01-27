import React from "react";
import { motion } from "framer-motion";
import Logo from '../../assets/images/tree_logo.png';
import Call_icon from '../../assets/svgjsx/call.jsx';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1.2, scale: 1 }}
          transition={{ duration: 1.2 }}
          src={Logo}
          alt="Logo"
        />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="navbar-menu ">
        <li><a href="#home">Service</a></li>
        <li><a href="#services">Industries</a></li>
        {/* Company dropdown */}
        <li className="dropdown">
          <a href="#company">Company</a>
          <ul className="dropdown-menu">
            <li><a href="#about">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#career">Career</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      {/* Right Side: Call Section */}
      <div className="navbar-call">
        <div className="flex flex-center gap-sm">
          <div className="round-fulls">
            <Call_icon className="priceSection-call-icon" color={"white"} />
          </div>
          <div className="flex flex-column">
            <h4>Call us</h4>
            <span className="call-text">+123 456 7890</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
