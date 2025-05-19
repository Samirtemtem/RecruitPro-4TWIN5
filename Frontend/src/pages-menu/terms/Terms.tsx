import { useTranslation } from "react-i18next";
//import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../common/Footer";
import DefaulHeader from "../../common/Header";
import MobileMenu from "../../common/MobileMenu";

import MenuToggler from "../../common/MenuToggler";
import Breadcrumb from "../../common/Breadcrumb";

import TermsText from "./TermsText";

const Terms = () => {
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

      <br></br>
      <MenuToggler />
      <Breadcrumb 
        title={t("TermsPage.Title")} 
        meta={t("TermsPage.Meta")} 
      />
      {/* <!--End Page Title--> */}
      <section className="tnc-section">
        <div className="auto-container">
          <TermsText />
        </div>
      </section>
      {/* <!-- End TNC Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Terms;
