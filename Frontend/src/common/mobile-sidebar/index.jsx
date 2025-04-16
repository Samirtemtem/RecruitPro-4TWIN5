import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useNavigate, useLocation } from "react-router-dom";  // Add useLocation

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />

      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            {Array.isArray(mobileMenuData) && mobileMenuData.map((item) => (
              <MenuItem
                className={
                  currentPath === item.routePath ? "menu-active-link" : ""
                }
                key={item.id || item.name}
                onClick={() => navigate(item.routePath)}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <SidebarFooter />
    </div>
  );
};

export default Index;