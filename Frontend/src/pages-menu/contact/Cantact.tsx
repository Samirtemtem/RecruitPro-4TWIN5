//import LoginPopup from "../../common/form/login/LoginPopup";

import FooterDefault from "../../common/Footer";
import DefaulHeader from "../../common/Header";
import MobileMenu from "../../common/MobileMenu";



import Address from "./components/Address";
import ContactForm from "./components/ContactForm";
import MapBox from "./components/MapBox";

const Contact = () => {
  return (
    <>
      {/* <!-- Header Span --> */}

     {/* <LoginPopup />
       End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="map-section">
        <div className="map-outer">
          <MapBox />
        </div>
      </section>
      {/* <!-- End Map Section --> */}

      <section className="contact-section job-categories ui-job-categories" style={{ backgroundColor: '#FFFFFF' , margin:'-40px' }}>
        <div className="auto-container">
          <div className="upper-box">
            <div className="row">
              <Address />
            </div>
            {/* End .row */}
          </div>
          {/* End upperbox */}

          {/* <!-- Contact Form --> */}
          <div className="contact-form default-form">
            <h3>Leave A Message</h3>
            <ContactForm />
            {/* <!--Contact Form--> */}
          </div>
          {/* <!--End Contact Form --> */}
        </div>
      </section>
      {/* <!-- Contact Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Contact;
