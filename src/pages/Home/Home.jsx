import React from "react";
import "./Home.css";
import HeaderSvg from '../../assets/svgjsx/headerSvg.jsx'
import Creative from '../../assets/svgjsx/creative.jsx'
import { blogImgs } from "../../assets/assets.js";
import TechnologySectionSvg from '../../assets/svgjsx/technologySectionSvg.jsx'
import {brandImgs, technologyIcons,  serviceSvg, expertiseAreas} from "../../assets/assets.js"
import Slider from "react-slick"; // Make sure this import is correct
import picture from "../../assets/images/picture.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";
import Experties1 from "../../assets/svgjsx/experties1.jsx";
import Experties2 from "../../assets/svgjsx/experties2.jsx";
const Home = () => {

  const blogSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // Show 3 slides at a time (adjust based on your screen size)
    slidesToScroll: 1,
    dots: true,
    centerMode: true, // For better control of spacing
    centerPadding: '0', // Disable additional padding around centered slide
    responsive: [
      {
        breakpoint: 1024, // 1024px and below
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 768, // 768px and below
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 480, // 480px and below
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        },
      },
    ],
  };

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5, // Show 3 slides at a time (adjust based on your screen size)
    slidesToScroll: 1,
    dots: false,
    centerMode: true, // For better control of spacing
    centerPadding: '0', // Disable additional padding around centered slide
    responsive: [
      {
        breakpoint: 1024, // 1024px and below
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 768, // 768px and below
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 480, // 480px and below
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        },
      },
    ],
  };
  
  const testimonialsSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3, // Show 3 slides at a time (adjust based on your screen size)
    slidesToScroll: 1,
    dots: true,
    centerMode: true, // For better control of spacing
    centerPadding: '0', // Disable additional padding around centered slide
    responsive: [
      {
        breakpoint: 1024, // 1024px and below
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 768, // 768px and below
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 480, // 480px and below
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        },
      },
    ],
  };
  

  const testimonials = [
    {
      name: "Stephen Brekke",
      position: "Legacy Integration Producer",
      message:
        "If you want real marketing that works and effective implementation - mobile app's got you covered.",
      rating: 5,  // 5-star rating


      
    },
    {
      name: "Jane Doe",
      position: "Digital Marketing Specialist",
      message:
        "Their services are unmatched, and the team truly goes above and beyond to deliver excellence.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    {
      name: "John Smith",
      position: "Product Manager",
      message:
        "A seamless experience from start to finish. Highly recommended for all your digital needs.",
      rating: 5,  // 5-star rating

    },
    
    
  ];

  const blogs = [

  {
    id: 1,
    image: blogImgs.blogImg1, // Replace with actual image paths
    title: "How a Digital Marketing Company Drives Real Business Results",
  },
  {
    id: 2,
    image: blogImgs.blogImg2, // Replace with actual image paths
    title: "How to Choose the Right Website Design Company for Your Business?",
  },
  {
    id: 3,
    image: blogImgs.blogImg3, // Replace with actual image paths
    title: "The Benefits of working with Local Software DeveDevelopers ",
  },
  {
    id: 4,
    image: blogImgs.blogImg4, // Replace with actual image paths
    title: "AI & Automation in Digital Marketing Companies 2025",
  },
  {
    id: 5,
    image: blogImgs.blogImg1, // Replace with actual image paths
    title: "How a Digital Marketing Company Drives Real Business Results",
  },
  {
    id: 6,
    image: blogImgs.blogImg2, // Replace with actual image paths
    title: "How to Choose the Right Website Design Company for Your Business?",
  },
  {
    id: 7,
    image: blogImgs.blogImg3, // Replace with actual image paths
    title: "The Benefits of working with Local Software DeveDevelopers",
  },
  {
    id: 8,
    image: blogImgs.blogImg4, // Replace with actual image paths
    title: "AI & Automation in Digital Marketing Companies 2025",
  },
  // Add more blog posts here
];




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
        <Slider {...settings}>
          {brandImgs.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt={`Client Logo ${index}`} className="logo" />
            </div>
          ))}
        </Slider>
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


<section className="expertise-section">
      {/* Background SVGs */}
      <div className="background-svg top-left"></div>
      <div className="background-svg bottom-right"></div>
      <div className="expertise-svg1">
      <Experties1/>
      </div>
      <div className="expertise-svg2">
      <Experties2/>
      </div>

      <div className="expertise-container">
        <p className="section-title-p">We Help you</p>
        <h2 className="section-title">Our Expertise</h2>

        {/* Grid of Expertise Areas */}
        <div className="grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="grid-item flex-center flex-column">
              <area.icon/>
              <h4>{area.name}</h4>
            </div>
          ))}
        </div>

        {/* Add More Section */}
        {/* <div className="add-more">
          <button className="add-more-button">Add More for Rival</button>
        </div> */}
      </div>
    </section>  


<section className="testimonial-section">
<h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        <Slider {...testimonialsSettings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="slider-img">
                <img src={picture} alt={testimonial.name} />
              </div>
              <div className="slider-star">

              <ReactStars
                count={5}
                value={testimonial.rating}
                size={24}
                activeColor={"#DC4618"}
                edit={false} // Set to true if you want the user to edit
              />



              </div>
              <p className="slider-text">"{testimonial.message}"</p>
              <div className="slider-reviewer">
              <h3>{testimonial.name}</h3>
              <p className="slider-position">{testimonial.position}</p>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>



<section>
<div className="blog-section">
      <h2>Latest Blog Posts</h2>
      <Slider {...blogSettings} className="blog-slider">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
</section>



    </div>
  );
};

export default Home;
