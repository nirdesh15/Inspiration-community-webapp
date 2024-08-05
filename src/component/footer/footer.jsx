import React from 'react';
import './footer.scss'; // Ensure you have the necessary CSS styles
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Country Acknowledgement</h6>
            <p className="text-justify">
            We support the objectives of the Convention on the Rights of Persons with Disabilities and show respect to the traditional owners of the land across Australia. We acknowledge their enduring connection to the land, sea, and community, and honor their cultures and traditions, as well as the elders who have come before us.
            </p>
            <h6>Contact Information</h6>
            <span>Inspiration Community Care
             <br/>61 Rynan Avenue, Edmondson Park
             <br/>Email: info@inspirationcommunitycare.com.au
              <br/>contact: 0403612048</span>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul className="footer-links">
              <li><a href="/service">Daily Personal Activities</a></li>
              <li><a href="/service-2">Household Task</a></li>
              <li><a href="/service-3">Travel and Transport assistance</a></li>
              <li><a href="/service-4">Community Nursing services</a></li>
              <li><a href="/service-5">Community Participation</a></li>
              <li><a href="/service-6">Assistance for shared living accommodation</a></li>
              <li><a href="/service-7">Specialised Disability Assistance</a></li>
              <li><a href="/service-8">24/7 support service</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="https://www.ndis.gov.au/understanding" target="_blank" rel="noopener noreferrer">
                National Disability Insurance Scheme (NDIS)
              </a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by 
              <a href="/about"> Inspiration Care Community</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/people/Inspiration-Community-Care/100092552592093/?paipv=0&eav=AfZwYG5WKeAV4Nm1FVR5S4YDwD5rEuCFQ7voZQ4mzmPOji2aT0yqDdOmIBLKijs4tNE&_rdr"><i class="bi bi-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i class="bi bi-twitter-x"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/ninja-pandey-7298411b6/?originalSubdomain=au"><i class="bi bi-linkedin"></i></a></li>   
              <li><a className="instagram" href="#"><i class="bi bi-instagram"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
