import React from "react";
import "./Footer.css"; // Import the CSS file for styles
import  Logo  from '../../assets/images/tree_logo.png';
import LinkdinSvg from "../../assets/svgjsx/linkdinSvg.jsx";
import FacebookSvg from "../../assets/svgjsx/facebookSvg.jsx";
import Tweeter from "../../assets/svgjsx/tweetersvg.jsx";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-title">Product</h3>
          <ul>
            <li>WhatsApp and Bulk SMS </li>
            <li>Marketing Services</li>
            <li>CG Design Services</li>
            <li>Development Services</li>
            <li>Digital Marketing Services</li>
            <li>Other Services</li>
          </ul>
        </div>

        {/* Product Information and Company */}
        <div className="footer-section">
          <h3 className="footer-title"> Information</h3>
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>

                {/* about Company */}
                <div className="footer-section">
          <h3 className="footer-title"> Information</h3>
          <ul>
            <li>About us</li>
            <li>Career us</li>
            <li>Contact us</li>
          </ul>
        </div>


        {/* Contact Information */}
        <div className="footer-section footer-contect-info">
          <h3 className="footer-title">Get In Touch</h3>
          <p>+91-9759282960</p>
          <p>+91-8266000033</p>
          <p>
            10-B Mothorowala Road, Near Rawat Wedding Point and opp. PNB Bank,
            Ajabpur Kalan, Dehradun, Uttarakhand, India
          </p>
          <p>Email: info@treemultisoft.com</p>
        </div>

      </div>
      <hr  className= "custom-lines"/>
      <div className="footer-bottom">
<div className="flex-between">
          <img src={Logo} alt="" />
    
    <ul className="flex gap-xl">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Cookies</li>
    </ul>
    <div className="Social-link  ">
       <ul className="flex-between gap-xl">
        <li><LinkdinSvg/></li>
        <li><FacebookSvg/></li>
        <li><Tweeter/></li>
       </ul>

       
    </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
