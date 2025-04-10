import React, { useState, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { candidatesMenuData } from "./data";
import "./MobileHeader.css";
import "./Sidebar.css";

// Simple reducer for toggle state
interface ToggleState {
  menu: boolean;
}

type ToggleAction = { type: 'TOGGLE_MENU' };

const toggleReducer = (state: ToggleState, action: ToggleAction): ToggleState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, menu: !state.menu };
    default:
      return state;
  }
};

// Sidebar Component
const Sidebar: React.FC = () => {
  const [state, dispatch] = useReducer(toggleReducer, { menu: false });
  const percentage = 30;
  const location = useLocation();
  
  // Helper function to check if a route is active
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  // Menu toggle handler
  const menuToggleHandler = () => {
    const sidebar = document.querySelector('.user-sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    
    if (sidebar) {
      sidebar.classList.remove('sidebar_open');
    }
    
    if (backdrop) {
      backdrop.classList.remove('active');
    }
    
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <div className={`user-sidebar ${state.menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}
      <div className="sidebar-inner">
        <ul className="navigation">
          {candidatesMenuData.map((item) => (
            <li
              className={`${
                isActiveLink(item.routePath) ? "active" : ""
              } mb-1`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              <Link to={item.routePath}>
                <i className={`la ${item.icon}`}></i> {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* End navigation */}

        <div className="skills-percentage">
          <h4>Skills Percentage</h4>
          <p>
            Put value for <strong>Cover Image</strong> field to increase your
            skill up to <strong>85%</strong>
          </p>
          <div style={{ width: 200, height: 200, margin: "auto" }}>
            <div style={{ 
              position: 'relative', 
              width: 200, 
              height: 200, 
              borderRadius: '50%', 
              backgroundColor: '#7367F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%',
                background: `conic-gradient(#fff ${percentage}%, transparent ${percentage}%)`,
              }}></div>
              <div style={{ 
                position: 'relative', 
                color: '#fff', 
                fontSize: '2rem', 
                fontWeight: 'bold' 
              }}>
                {`${percentage}%`}
              </div>
            </div>
          </div>
          {/* <!-- Pie Graph --> */}
        </div>
      </div>
    </div>
  );
};

export { Sidebar }; 