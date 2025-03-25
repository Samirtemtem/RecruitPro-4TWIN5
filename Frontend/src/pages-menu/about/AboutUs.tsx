//import LoginPopup from "../../common/form/login/LoginPopup";

import Funfact from "../../common/Funfact";
import FooterDefault from "../../common/Footer";
import MobileMenu from "../../common/MobileMenu";
import Header from "../../common/Header";
import CallToAction2 from "../../common/CallToAction2";
import Testimonial2 from "../../common/Testimonial";

import MenuToggler from "../../common/MenuToggler";
import Breadcrumb from "../../common/Breadcrumb";

import IntroDescriptions from "./components/IntroDescriptions";
import ImgBox from "./components/ImgBox";
import Block1 from "./components/Block";
import Partner from "./components/Partner";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../common/ScrollTop";

const AboutUs = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true,     // Run animations only once
      });
    }, []);
  return (
    <>
      {/* <!-- Header Span --> */}

      {/*<LoginPopup />
       End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

<br></br>
   <MenuToggler />
      <Breadcrumb title="About Us" meta="About Us" />
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
          <ImgBox />

          {/* <!-- Fun Fact Section --> */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}

          <IntroDescriptions />
        </div>
      </section>
      {/* <!-- End About Section Three --> */}

      <CallToAction2 />
      {/* <!-- End CallToAction2 --> */}

      <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            <img src="/images/resource/testimonial-left.png" alt="testimonial" />
          </div>
          {/* End left img group */}

          <div className="testimonial-right">
            <img
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            />
          </div>
          {/* End right img group */}

          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial2 />
            </div>
            {/* <!-- Testimonial Carousel --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="work-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

        <ScrollToTop />
      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default AboutUs;
