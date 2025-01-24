import React from "react";
import "./Home.css";
import HeaderSvg from '../../assets/svgjsx/headerSvg.jsx'
import Creative from '../../assets/svgjsx/creative.jsx'
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.webp";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.webp";
import brand7 from "../../assets/images/brand7.webp";
import brand8 from "../../assets/images/brand8.png";
import brand9 from "../../assets/images/brand9.png";
import {brandImgs} from "../../assets/assets.js"

const brandLogos = [
  { src: brand1, alt: "Brand 1" },
  { src: brand2, alt: "Brand 2" },
  { src: brand3, alt: "Brand 3" },
  { src: brand4, alt: "Brand 4" },
  { src: brand5, alt: "Brand 5" },
  { src: brand6, alt: "Brand 6" },
  { src: brand7, alt: "Brand 7" },
  { src: brand9, alt: "Brand 9" },
];


const texhnologyIcon = [
  {src:"", alt:"icon 1"},
  {src:"", alt:"icon 1"},
  {src:"", alt:"icon 1"},
  {src:"", alt:"icon 1"},
  {src:"", alt:"icon 1"},
  {src:"", alt:"icon 1"},
]
const Home = () => {


  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          <h1>
            Crafting <span className="main-color">Digital Experiences</span> That <br/> Drive Growth and Success
          </h1>
          <p>
            We provide cutting-edge IT solutions and digital marketing
            strategies to help businesses grow, connect, and thrive in the
            ever-evolving digital landscape.
          </p>
        </div>

        <div className="header-stats flex gap-xxxl align-items  ">
          <button className="cta-button bg-primary ">Connect with us</button>
          <div className="stat-item">
            <h2>1100<span className="main-color">+</span></h2>
            <p className="text-color-gray-700">Projects Completed</p>
          </div>
          <div className="stat-item">
            <h2>500 <span className="main-color">+</span></h2>
            <p className="text-color-gray-700">Satisfied Clients</p>
  
          </div>
          <div className="stat-item">
            <h2>11<span className="main-color">+</span></h2>
            <p className="text-color-gray-700">Years of Experience</p>
          </div>
        </div>
       
      </header>
      <div className="svg-container" > 
            <HeaderSvg className="headerSvg"/>
       </div>

      <section className="clients-section">
      <div className="clients-text">
        <h2>With great work comes great clients.</h2>
        {/* <p>Here are a few of them.</p> */}
        <h3 className="main-color">Trusted by</h3>
      </div>
      <div className="clients-logos">
        {brandImgs.map((logo, index) => (
          <img key={index} src={logo} alt={logo.alt} className="logo" />
        ))}
      </div>
    </section>


          {/* About and Values Section */}
    <section className="about-values-section">
            <div className="flex flex-center">
        <Creative className="headerSvg"/>

        <div className="about-content">
          <h2>Creativity at the Heart of Everything We Do</h2>
          <p>
          At TreeMultiSoft, creativity is at the core of our approach. We believe that innovative ideas, fresh perspectives, and imaginative solutions are what set us apart. Whether it’s designing a visually stunning website, crafting a digital marketing campaign that engages and excites, or developing custom software that enhances user experiences, our creative team brings a unique flair to every project. We don’t just follow trends—we set them, ensuring that your business stands out in a crowded digital landscape.           </p>
        </div>
        </div>

        <div className="values-section">
          <div className="values-grid">
            <div className="value-item">
              <p>Customer-Centric Approach</p>
            </div>
            <div className="value-item">
              <p>Continuous Improvement</p>
            </div>
            <div className="value-item">
              <p>Innovation, Integrity & Collaboration</p>
            </div>
            <div className="value-item">
              <p>Creativity at Our Core</p>
            </div>
            <div className="value-item">
              <p>Proven Results</p>
            </div>
            <div className="value-item">
              <p>Fast and Scalable Solutions</p>
            </div>
          </div>
        </div>

        <div className="svg-container1" > 
            <HeaderSvg className="headerSvg"/>
       </div>
      </section>


            {/* Technology Section */}
            <section className="technology-section">
        <h2>Technologies We Use</h2>
        <p>Our development & integration expertise spreads across all modern technologies and platforms, while constantly adapting to cutting-edge trends that are here to stay!</p>
        <div className="technology-grid">
          <div className="technology-item">React</div>
          <div className="technology-item">Node.js</div>
          <div className="technology-item">Python</div>
          <div className="technology-item">Java</div>
          <div className="technology-item">AWS</div>
          <div className="technology-item">Docker</div>
          <div className="technology-item">Kubernetes</div>
          <div className="technology-item">MySQL</div>
        </div>
      </section>
 
    </div>
  );
};

export default Home;
