import { useTranslation } from "react-i18next";
import FooterDefault from "../../common/Footer";
import DefaulHeader from "../../common/Header";
import MobileMenu from "../../common/MobileMenu";
import Address from "./components/Address";
import ContactForm from "./components/ContactForm";
import MapBox from "./components/MapBox";

const Contact = () => {
   const { t } = useTranslation();
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

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

      <section className="contact-section">
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
            <h3>{t("ContactPage.LeaveAMessage")}</h3>
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
