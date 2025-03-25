import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import About from "./components/About";
import AppSection from "./components/AppSection";
import Blog from "./components/Blog";
import CallToAction from "../common/CallToAction";
import AuthModal from "./components/AuthModal";
import PartnerSlider from "./components/PartnerSlider";
import FooterDefault from "../common/Footer";
//import Funfact from "./components/Funfact";
import DefaulHeader2 from "../common/Header";
import MobileMenu from "../common/MobileMenu";
import JobSearchBanner from "./components/JobSearchBanner";
import JobCategorie1 from "./components/JobCategorie";
import JobFeatured1 from "./components/JobFeatured";
//import Testimonial from "./components/Testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Run animations only once
    });
  }, []);
  return (
    <>
      <AuthModal />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      {/* <MobileMenu /> */}
      <MobileMenu />
      {/* End MobileMenu */}

      <JobSearchBanner />
      {/* End Hero Section */}

      <section className="job-categories ui-job-categories" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 style={{ color: '#D50000' }}>Popular Job Categories</h2>
            <div className="text">2025 jobs live - 293 added today.</div>
          </div>

          <div
            className="row"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="job-section" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 style={{ color: '#D50000' }}>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualifies your life
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              to="/JobListFront"
              className="theme-btn btn-style-one"
              style={{ 
                backgroundColor: '#D50000', 
                borderColor: '#D50000',
                transition: 'all 0.3s ease' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#B50000';
                e.currentTarget.style.borderColor = '#B50000';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#D50000';
                e.currentTarget.style.borderColor = '#D50000';
              }}
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}

       {/* 
      <section className="testimonial-section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-fluid">
          
          <div className="sec-title text-center">
            <h2 style={{ color: '#D50000' }}>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
         
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
           <Testimonial /> 
          </div>
        </div>
      </section>


      */}
      <section className="clients-section" style={{ backgroundColor: '#F5F5F5', border: '1px solid #D50000' }}>
        <div className="sponsors-outer" data-aos="fade">
          {/* Sponsors Carousel */}
          <ul className="sponsors-carousel">
            <PartnerSlider />
          </ul>
        </div>
      </section>
      {/* End Clients Section*/}

      <section className="about-section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="auto-container">
          <div className="row">
            <About />
          </div>

          {/* Fun Fact Section */}
          <div className="fun-fact-section">
            <div className="row">
           
            </div>
          </div>
          {/* Fun Fact Section */}
        </div>
      </section>
      {/* End About Section */}

      <section className="news-section" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 style={{ color: '#D50000' }}>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End .sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* End News Section */}
<div className="mt-5">
<CallToAction />
</div>
      {/* End App Section */}

      
      {/* End Call To Action */}

      <FooterDefault />
      {/* End Main Footer */}
    </>
  );
};

export default Home;
