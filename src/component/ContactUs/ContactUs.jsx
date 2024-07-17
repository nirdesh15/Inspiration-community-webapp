import React from 'react';
import './ContactUs.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
         Connect with us.
        </div>
  
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
              
                <i className="bi bi-geo-alt"></i>
               
                <h4>Location:</h4>
                <p>61 Rynan Avenue, Edmondson Park, Sydney, NSW</p>
              </div>
  
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@inspirationcommunitycare.com.au</p>
              </div>
  
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>0403612048</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6618.785141442971!2d150.849571!3d-33.956748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12935274f2ecf9%3A0xc6723a3d31cb2625!2s61%20Rynan%20Ave%2C%20Edmondson%20Park%20NSW%202174%2C%20Australia!5e0!3m2!1sen!2sus!4v1720718707121!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0, width: '100%', height: '290px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
  
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="" method="post" role="form" className="php-email-form" noValidate>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
