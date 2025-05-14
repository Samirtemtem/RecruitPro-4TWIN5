import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { base_path } from "./environment";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/style/css/feather.css";
import "../src/index.scss";
import "./i18n"; // Import i18next configuration
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "./i18n"; // Import i18n instance
import store from "./core/data/redux/store";
import { Provider } from "react-redux";
import "../src/style/icon/boxicons/boxicons/css/boxicons.min.css";
import "../src/style/icon/weather/weathericons.css";
import "../src/style/icon/typicons/typicons.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../src/style/icon/ionic/ionicons.css";
import "../src/style/icon/tabler-icons/webfont/tabler-icons.css";
import ALLRoutes from "./routing-module/router/router";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <ALLRoutes />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
  // </React.StrictMode>
);