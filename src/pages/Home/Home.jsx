import React from "react";
import "./Home.css";
import HeaderSvg from '../../assets/svgjsx/headerSvg.jsx'
import Creative from '../../assets/svgjsx/creative.jsx'
import TechnologySectionSvg from '../../assets/svgjsx/technologySectionSvg.jsx'
import {brandImgs, technologyIcons,  serviceSvg} from "../../assets/assets.js"





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
        <div className="flex">
          <div className="technology-container">

        <h2>Technologies We Use</h2>
        <p>Our development & integration expertise spreads across all modern technologies and platforms, while constantly adapting to cutting-edge trends that are here to stay!</p>
        <div className="technology-grid">
        {technologyIcons.map((tech, index) => (
          <img key={index} src={tech} alt={tech.alt} className="technology" />
        ))}
        </div>
          </div>
        <TechnologySectionSvg/>

        </div>

      </section>

      {/* Services Section */}
<section className="services-section">
  <h2>Our Services</h2>
  <h3>"Services meticulously shaped to fit your business."</h3>
  <p>Explore our wide range of services crafted to help businesses thrive in the digital age.</p>

  <h4>Web Development & Design</h4>
  <div className="services-grid">
    <div className="service-item">
    <serviceSvg.webdesigndevelopment/>
      <h3>Web Design & Development</h3>
      <p>Stunning, user-friendly designs that captivate your audience and reflect your brand identity.</p>
    </div>
    <div className="service-item">
    <serviceSvg.Hostingsslsvg/>
      <h3>Web Hosting & SSL Setup</h3>
      <p>Reliable hosting solutions and SSL certificates to keep your site secure and fast.</p>
    </div>
    <div className="service-item">
    <serviceSvg.cmssvg/>
      <h3>Content Management Systems</h3>
      <p>Effortless content control and updates with our robust CMS solutions.</p>
    </div>
  </div>

  <h4>Digital Marketing</h4>
  <div className="services-grid">
    <div className="service-item">
    <serviceSvg.DigitalMarketingsvg/>
      <h3>Digital Marketing</h3>
      <p>Drive growth with SEO, social media marketing, and PPC campaigns tailored to your goals.</p>
    </div>
    <div className="service-item">
      <serviceSvg.smsMarketingsvg/>
      <h3>Bulk SMS Marketing</h3>
      <p>Reach customers instantly with engaging bulk messaging solutions that drive results.</p>
    </div>
  </div>

  <h4>Creative Solutions</h4>
  <div className="services-grid">
    <div className="service-item">
    <serviceSvg.webdesigndevelopment/>
      <h3>CG Design</h3>
      <p>High-quality computer graphics, 3D designs, and animations to elevate your brand's storytelling.</p>
    </div>
    <div className="service-item">
    <serviceSvg.domainregistrationsvg/>

      <h3>Domain Registration</h3>
      <p>Secure your digital identity with professional domain registration services.</p>
    </div>
  </div>
    {/* Other Services Button */}
    <button className="other-services-button">
    Other Services <span className="arrow">→</span>
  </button>

</section>


<section className="findyour-Solution">
  <div className="findyour-container">
  <hr className="custom-line" />
  <p>"Services meticulously shaped to fit your business." <span >      <a href="https://www.example.com" target="_blank" className="main-color" rel="noopener noreferrer">
  FIND YOUR SOLUTION
      </a>
</span>
  </p>
<hr className="custom-line" />

  </div>

</section>



<section className="industries-container flex flex-column">
<div className="industries-title">
  <p>We Help You</p>
  <h2>Our Expertise</h2>
  </div>
<div className="industries ">
 
  

  <div className="industry-item   gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
    <p className="industry-name ">Education</p>
  </div>

  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
    <p className="industry-name">Energy & Utility</p>
  </div>

  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
    <p className="industry-name">Real Estate</p>
  </div>

  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
    <p className="industry-name">Government</p>
  </div>

  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
  <p className="industry-name">Media & Entertainment</p>
  </div>


  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
  <p className="industry-name">Ads & Marketing</p>
  </div>

  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
  <p className="industry-name">Hospital</p>
  </div>

  <div className="industry-item  gap-sm">
  <div className="industry-card">
    {/* <img className="industry-icon" src="path_to_your_image_1.png" alt="Education Icon" /> */}
  </div>
  <p className="industry-name">E-Commerce</p>
  </div>
  </div>


    <button className="other-services-button">
    Other industries <span className="arrow">→</span>
  </button>

</section>

    </div>
  );
};

export default Home;
