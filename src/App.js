import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from './component/About/About';
import CustomNavbar from './component/NavBar/NavBar';
import SimpleWavesComponent from './component/Home/Home';
import Footer from './component/footer/footer';
import ServicesPage from './component/Service/Service';
import Contact from './component/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route exact path="/" element={<SimpleWavesComponent />} />
          <Route path="/about" element={<Article />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
