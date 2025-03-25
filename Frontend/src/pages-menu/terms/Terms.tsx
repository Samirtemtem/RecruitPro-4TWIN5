//import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../common/Footer";
import DefaulHeader from "../../common/Header";
import MobileMenu from "../../common/MobileMenu";

import MenuToggler from "../../common/MenuToggler";
import Breadcrumb from "../../common/Breadcrumb";

import TermsText from "./TermsText";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}

      {/* <LoginPopup />
      End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <br></br>
   <MenuToggler />
      <Breadcrumb title="Terms and Conditions" meta="Terms" />
      {/* <!--End Page Title--> */}
      <section className="tnc-section">
        <div className="auto-container">
         {/* <div className="sec-title text-center">
            <h2>Terms and Conditions</h2>
            <div className="text">Home / Terms and Conditions</div>
          </div>
           End sec-title */}
          <TermsText />
        </div>
      </section>
      {/* <!-- End TNC Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
