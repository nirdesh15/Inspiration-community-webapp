import React from 'react';
import './footer.scss'; // Ensure you have the necessary CSS styles

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
            We are NDIS service provider. We are specialised in disability support and complex nursing care. At inspiration community care, we believe every person deserve to live the life they choose and as a part of our service we work closely with our participants and their families to provide quality care and achieve their dream goals. our team is incorporated with qualified and experienced Registered nurses and support workers.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Services</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Services</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Services</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Services</a></li>
              <li><a href="http://scanfcode.com/category/android/">Services</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Services</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
             
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy;  All Rights Reserved by 
              <a href="#"> Inspiration Care Community</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
