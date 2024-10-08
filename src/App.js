import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchByCategory from './components/SearchByCategory';
import WhyChoose from './components/WhyChoose';
import BrandsSlider from './components/BrandsSlider';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import SearchForm from './components/SearchForm';
import DiscountBanner from './components/DiscountBanner';
import AboutCompany from './components/AboutCompany';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="relative">
          <Navbar />
          <SearchForm />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Element name="categories">
                <SearchByCategory />
              </Element>
              <Element name="whychoose">
                <WhyChoose />
              </Element>
              <Element name="brands">
                <BrandsSlider />
              </Element>
              <Element name="about">
                <AboutCompany />
              </Element>
              <Element name="testimonials">
                <Testimonial />
              </Element>
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
