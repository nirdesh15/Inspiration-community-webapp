import React from 'react';
import { Link } from 'react-router-dom';
 // Adjust import if using a different Button component
import './contactcard.scss';
import { Button } from 'react-bootstrap';

const CommunityCareSection = () => {
  return (
    <section>
      <div className="p-5">
        <div className="title-4">
          <h1><span>Inspir</span>ation Community Care</h1>
          <h3>Contact Us Today for More Information</h3>
        </div>
        <div className="button-container">
          <Link to='/contact'>
            <Button variant="contained" color="primary">Contact Us</Button>
          </Link>
          <br />
          <span>Only takes a few seconds!</span>
        </div>
      </div>
    </section>
  );
};

export default CommunityCareSection;
