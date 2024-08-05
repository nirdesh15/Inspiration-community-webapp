import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from './component/About/About';
import CustomNavbar from './component/NavBar/NavBar';
import SimpleWavesComponent from './component/Home/Home';
import Footer from './component/footer/footer';
import ServicesPage from './component/Service/Service1/Service';
import Contact from './component/ContactUs/ContactUs';
import ServicesPage2 from './component/Service/Service2/Service2';
import ServicesPage3 from './component/Service/Service3/Service3';
import ServicesPage4 from './component/Service/Service4/Service4';
import ServicesPage5 from './component/Service/Service5/Service5';
import ServicesPage6 from './component/Service/Service6/Service6';
import ServicesPage7 from './component/Service/Service7/Service7';
import ServicesPage8 from './component/Service/Service8/Service8';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <CustomNavbar />
        <Routes>
          <Route exact path="/" element={<SimpleWavesComponent />} />
          <Route path="/about" element={<Article />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-2" element={<ServicesPage2 />} />
          <Route path="/service-3" element={<ServicesPage3 />} />
          <Route path="/service-4" element={<ServicesPage4 />} />
          <Route path="/service-5" element={<ServicesPage5 />} />
          <Route path="/service-6" element={<ServicesPage6 />} />
          <Route path="/service-7" element={<ServicesPage7 />} />
          <Route path="/service-8" element={<ServicesPage8 />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
