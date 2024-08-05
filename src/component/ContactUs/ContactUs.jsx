import React, { useState, useEffect } from 'react';
import './ContactUs.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import emailjs from '@emailjs/browser';

const statesCities = {
  NSW: ['Sydney', 'Newcastle', 'Wollongong'],
  VIC: ['Melbourne', 'Geelong', 'Ballarat'],
  QLD: ['Brisbane', 'Gold Coast', 'Cairns'],
};

const countryCodes = [
  { code: '+1', name: 'USA' },
  { code: '+61', name: 'Australia' },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    countryCode: '+61',
    address: '',
    state: '',
    city: ''
  });

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (formFields.state) {
      setCities(statesCities[formFields.state] || []);
    } else {
      setCities([]);
    }
  }, [formFields.state]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prevFields => ({ ...prevFields, [name]: value }));

    if (name === 'email') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        email: validateEmail(value) ? '' : 'Please enter a valid email address.'
      }));
    }

    if (name === 'phone') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        phone: validatePhoneNumber(value) ? '' : 'Please enter a valid phone number.'
      }));
    }

    if (name === 'name' && !value.trim()) {
      setFormErrors(prevErrors => ({ ...prevErrors, name: 'Please enter your name.' }));
    }

    // Clear errors for other fields on change
    if (['subject', 'message', 'address', 'state', 'city'].includes(name)) {
      setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const isFormValid = () => {
    return !(
      !formFields.name.trim() ||
      !validateEmail(formFields.email.trim()) ||
      !formFields.subject.trim() ||
      !formFields.message.trim() ||
      !validatePhoneNumber(formFields.phone.trim()) ||
      !formFields.address.trim() ||
      !formFields.state ||
      !formFields.city
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message, phone, address, state, city } = formFields;
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Please enter your name.';
      isValid = false;
    }
    if (!email.trim() || !validateEmail(email.trim())) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!subject.trim()) {
      errors.subject = 'Please enter a subject.';
      isValid = false;
    }
    if (!message.trim()) {
      errors.message = 'Please enter a message.';
      isValid = false;
    }
    if (!phone.trim() || !validatePhoneNumber(phone.trim())) {
      errors.phone = 'Please enter a valid phone number.';
      isValid = false;
    }
    if (!address.trim()) {
      errors.address = 'Please enter your address.';
      isValid = false;
    }
    if (!state) { 
      errors.state = 'Please select your state.';
      isValid = false;
    }
    if (!city) {
      errors.city = 'Please select your city.';
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
      setIsSubmitted(true);
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm('service_6m24qo9', 'template_ftp1jfb', e.target, 'Ttc75A3IfLbUBRPdM')
      .then((result) => {
          console.log(result.text);
          alert('Form submitted successfully!');
      }, (error) => {
          console.log(error.text);
          alert('There was an error submitting the form. Please try again later.');
      });

    setIsSubmitted(false);
    setFormFields({ name: '', email: '', subject: '', message: '', phone: '', countryCode: '+61', address: '', state: '', city: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
        <i class="bi bi-envelope-paper-heart"></i>  Connect with us.
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
                <i className="bi bi-envelope" ></i>
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
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                    id="name"
                    value={formFields.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                    id="email"
                    value={formFields.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="countryCode">Country Code  <span className="required">*</span></label>
                  <select
                    name="countryCode"
                    id="countryCode"
                    className={`form-control ${formErrors.countryCode ? 'is-invalid' : ''}`}
                    value={formFields.countryCode}
                    onChange={handleChange}
                  >
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.code} {country.name}
                      </option>
                    ))}
                  </select>
                  {formErrors.countryCode && <div className="invalid-feedback">{formErrors.countryCode}</div>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Your Phone <span className="required">*</span></label>
                  <input
                    type="text"
                    name="phone"
                    className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    value={formFields.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address <span className="required">*</span></label>
                <input
                  type="text"
                  name="address"
                  className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                  id="address"
                  value={formFields.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
                {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
              </div>

              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="state">State <span className="required">*</span></label>
                  <select
                    name="state"
                    id="state"
                    className={`form-control ${formErrors.state ? 'is-invalid' : ''}`}
                    value={formFields.state}
                    onChange={handleChange}
                  >
                    <option value="">Select State</option>
                    {Object.keys(statesCities).map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {formErrors.state && <div className="invalid-feedback">{formErrors.state}</div>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="city">City <span className="required">*</span></label>
                  <select
                    name="city"
                    id="city"
                    className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
                    value={formFields.city}
                    onChange={handleChange}
                    disabled={!formFields.state}
                  >
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span className="required">*</span></label>
                <input
                  type="text"
                    name="subject"
                    className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`}
                    id="subject"
                    value={formFields.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  name="message"
                  className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                  id="message"
                  rows="10"
                  value={formFields.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                ></textarea>
                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
              </div>

              <div className="my-3">
                <div className={`loading ${isSubmitted ? 'show' : ''}`}>Loading</div>
                <div className={`error-message ${isSubmitted ? 'show' : ''}`}></div>
                <div className={`sent-message ${isSubmitted ? 'show' : ''}`}>Your message has been sent. Thank you!</div>
              </div>

              <div className="text-center">
                <button type="submit" disabled={!isFormValid()}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
