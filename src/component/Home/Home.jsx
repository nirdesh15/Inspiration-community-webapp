import React, { useState,useEffect } from 'react';
import './Home.scss'; // Ensure your SCSS file is imported properly
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const SimpleWavesComponent = () => {

  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-from-right');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('active');
        }
      });
    };
  
    // Check if element is in viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
  
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    

    <div className="header" data-spy="scroll" data-target=".navbar" data-offset="50">
           <div className="carousel-container">
  <Carousel activeIndex={index} onSelect={handleSelect}  interval={1500}>
    <Carousel.Item>
      <div className="inner-header flex">
        {/* Your existing header content */}
        <div className='vision-goal-item animate__animated animate__fadeInLeft'>
          <img
            src="/r.png" // Replace with your image path
            alt="Logo" // Add alt text for accessibility
            className="header-image"
          />
          
        </div>
        <div className="text-container">
          <h1 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>DREAM • BELIEVE • LIVE</h1>
          <br />
          <h2 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>
         
            "DREAM <b>BIG</b><br />
            BELIEVE <b>IN YOURSELF</b><br />
            LIVE <b>FULLY</b>"
          </h2>
        
          <br></br>
          <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  {open ? 'Read Less' : 'Read More'}
                </Button>{' '}
          <Collapse in={open}>
            <div id="text-box">
              Encouraging individuals to dream big, leveraging support systems and adaptive technologies. Empower them through positive reinforcement and accessible resources to believe in their abilities. Foster inclusive environments where they can live fully by actively engaging in diverse, meaningful activities.
            </div>
          </Collapse>
        </div>
      </div>
    </Carousel.Item>
    
    <Carousel.Item>
      <div className="inner-header flex">
        {/* Your existing header content */}
        <div className='vision-goal-item animate__animated animate__fadeInLeft'>
          <img
            src="/couple-7793079_1280.jpg" // Replace with your image path
            alt="Logo" // Add alt text for accessibility
            className="header-image"
          />
        </div>
        <div className="text-container">
          <h1 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>  • DREAM  • </h1>
          <br />
          <h2 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>
            "DREAM <b>BIG"</b><br />
           
          </h2>
         <br/>
         <br/>
            <div id="text-box">
              Whether your dream is to live independently to manage your health condition more effectively or to simply enjoy a better quality of life, we are here to support you every step <br/>of way.
            </div>
            <br/>
            <Link to='/about'>
            <Button 
                  variant="outline-light"
                  size="lg"
                  
                > 
                Services
              
                </Button>{' '}
                </Link>
               

        
        </div>
      </div>
    </Carousel.Item>
    {/* Additional Carousel items can be added similarly if needed */}
    <Carousel.Item>
      <div className="inner-header flex">
        {/* Your existing header content */}
        <div className='vision-goal-item animate__animated animate__fadeInLeft'>
          <img
            src="/insect-7310563_1280.jpg" // Replace with your image path
            alt="Logo" // Add alt text for accessibility
            className="header-image"
          />
        </div>
        <div className="text-container">
          <h1 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>  • BELIEVE • </h1>
          <br />
          <h2 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>
            "BELIEVE  <b>IN YOURSELF"</b><br />
           
          </h2>
         <br/>
         <br/>
            <div id="text-box">
              "Believe" is more than just a word - it is a core value that guides everything we do. We believe in the power of hope and optimism and we are committed to helping our clients  cultivate those qualities with themselves.
            </div>
            <br/>
            <Link to='/about'>
            <Button 
                  variant="outline-light"
                  size="lg"
                  
                > 
                About Us
              
                </Button>{' '}
                </Link>
               

        
        </div>
      </div>
    </Carousel.Item>

   
    {/* Additional Carousel items can be added similarly if needed */}
    <Carousel.Item>
      <div className="inner-header flex">
        {/* Your existing header content */}
        <div className='vision-goal-item animate__animated animate__fadeInLeft'>
          <img
            src="/wheelchair-2322783_1280.jpg" // Replace with your image path
            alt="Logo" // Add alt text for accessibility
            className="header-image"
          />
        </div>
        <div className="text-container">
          <h1 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>  • LIVE• </h1>
          <br />
          <h2 className={open ? 'vision-goals-heading animate__animated animate__fadeInDown' : 'vision-goals-heading'}>
            "LIVE <b>FULLY"</b><br />
           
          </h2>
         <br/>
         <br/>
            <div id="text-box">
              <br/>
             We are here to help you dream big , believe in yourself and if you are <br/> looking for an ideal healthcare provider that shares your values and believe in your potential, look no further than <h4> Inspiration Community Care.</h4>
            </div>
            <br/>
            <Link to='/contact'>
            <Button 
                  variant="outline-light"
                  size="lg"
                  
                > 
                Contact Us 
              
                </Button>{' '}
                </Link>
               

        
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
 
</div>
     
      
      
      
      
   

      {/* Waves Container */}
      <div className="waves-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}

      {/* Vision, Mission, and Values Section */}
      <div className="vision-mission-values-container">
        <h2 className="section-heading animate-from-right"><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg> Our Vision, Mission, & Values</b></h2>
        <div className="vision-mission-values-list">
          <div className="card-item animate-from-right">
            
            <h3> Our Vision</h3>
            <p>Empowering individuals to achieve their full potential and live fulfilling lives.</p>
          </div>
          <div className="card-item animate-from-right">
            <h3>Our Mission</h3>
            <p>Providing high-quality, person-centered care that supports independence and inclusion.</p>
          </div>
          <div className="card-item animate-from-right">
            <h3>Our Values</h3>
            <p>We believe in integrity, respect, and collaboration with families and communities.</p>
          </div>
        </div>
      </div>


      {/* Waves Container */}
      <div className="waves-container">
        <svg
          className="waves1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255, 87, 34, 0.8)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(230, 78, 2, 0.9)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 87, 34, 0.6)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(245, 124, 0, 0.4)" />
          </g>
        </svg>
      </div>
      {/* Waves end */}

      {/* Services Section */}
      <div className="services-container">
        <h2 className="services-heading animate__animated animate__fadeInRight">Our Services</h2>
        <div className="services-list">
  <div className="service-item"> 
    <Link to='/service'>
      <button>    
        <h3><i className="bi bi-calendar2"></i></h3>
        <p>Daily Personal Activities</p>
      </button>
    </Link>
  </div> 
  <div className="service-item">
    <Link to='/service-2'>
      <button>
        <h3><i className="bi bi-stars"></i><i className="bi bi-house-fill"></i></h3>
        <p>Household Task Assistance</p>
      </button>
    </Link>
  </div>
  <div className="service-item"> 
    <Link to='/service-3'>
      <button>
        <h3><i className="bi bi-car-front-fill"></i></h3>
        <p>Travel and Transport Assistance</p>
      </button>
    </Link>
  </div>
  <div className="service-item">
    <Link to='/service-4'>
      <button>
        <h3><i className="bi bi-balloon-heart"></i><i className="bi bi-people-fill"></i></h3>
        <p>Community Nursing Services</p>
      </button>
    </Link>
  </div>
  <div className="service-item">  
    <Link to='/service-5'>
      <button>    
        <h3><i className="bi bi-stack"></i></h3>
        <p>Community Participation</p>
      </button>
    </Link>
  </div>
  <div className="service-item">
    <Link to='/service-6'>
      <button>
        <h3><i className="bi bi-person-wheelchair"></i></h3>
        <p>Assistance for Shared Living Accommodation</p>
      </button>
    </Link>
  </div>
  <div className="service-item">
    <Link to='/service-7'>
      <button>
        <h3><i className="bi bi-alexa"></i></h3>
        <p>Specialised Disability Assistance</p>
      </button>
    </Link>
  </div>
  <div className="service-item">
    <Link to='/service-8'>
      <button>
        <h3><i className="bi bi-clock"></i></h3>
        <p>24/7 Support Service</p>
      </button>
    </Link>
  </div>
</div>

      </div>
      <section>
        <div className="parallax-one">
          <div className="title-container">
            <h1><span>Inspiration </span> Community Care</h1>
            <h3>Contact Us Today for More Information</h3>


          </div>
          <div className="button-container">
            <Link to='/contact'>
              <Button>Contact Us</Button>
            </Link>
            <br />
            <span>Only takes a few seconds!</span>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default SimpleWavesComponent;