import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import About from "./components/About";
import AppSection from "./components/AppSection";
import Blog from "./components/Blog";
import CallToAction from "./components/CallToAction";
import AuthModal from "./components/AuthModal";
import PartnerSlider from "./components/PartnerSlider";
import FooterDefault from "./components/Footer";
import Funfact from "./components/Funfact";
import DefaulHeader2 from "./components/Header";
// import MobileMenu from "./components/MobileMenu";
import JobSearchBanner from "./components/JobSearchBanner";
import JobCategorie1 from "./components/JobCategorie";
import JobFeatured1 from "./components/JobFeatured";
import Testimonial from "./components/Testimonial";
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
      {/* End MobileMenu */}

      <JobSearchBanner />
      {/* End Hero Section */}

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
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

      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualifies your life
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              to="/job-list/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}

      <section className="testimonial-section">
        <div className="container-fluid">
          {/* Sec Title */}
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          {/* Testimonial Carousel */}
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section>
      {/* End Testimonial Section */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* Sponsors Carousel */}
          <ul className="sponsors-carousel">
            <PartnerSlider />
          </ul>
        </div>
      </section>
      {/* End Clients Section*/}

      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <About />
          </div>

          {/* Fun Fact Section */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* Fun Fact Section */}
        </div>
      </section>
      {/* End About Section */}

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
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

      <section className="app-section">
        <div className="auto-container">
          <AppSection />
        </div>
      </section>
      {/* End App Section */}

      <CallToAction />
      {/* End Call To Action */}

      <FooterDefault />
      {/* End Main Footer */}
    </>
  );
};

export default Home;
