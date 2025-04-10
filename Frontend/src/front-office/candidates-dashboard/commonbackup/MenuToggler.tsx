import React, { useReducer, useEffect } from "react";
import "./MobileHeader.css";
import "./MenuToggler.css";

// Simple reducer for toggle state
interface ToggleState {
  isOpen: boolean;
}

type ToggleAction = { type: 'TOGGLE_SIDEBAR' };

const toggleReducer = (state: ToggleState, action: ToggleAction): ToggleState => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

// Menu Toggler Component
const MenuToggler: React.FC = () => {
  const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

  // Effect to apply/remove classes when state changes
  useEffect(() => {
    const sidebar = document.querySelector('.user-sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    
    if (sidebar) {
      if (state.isOpen) {
        sidebar.classList.add('sidebar_open');
      } else {
        sidebar.classList.remove('sidebar_open');
      }
    }
    
    if (backdrop) {
      if (state.isOpen) {
        backdrop.classList.add('active');
      } else {
        backdrop.classList.remove('active');
      }
    }
  }, [state.isOpen]);

  // Menu toggle handler
  const menuToggleHandler = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      const backdrop = document.querySelector('.sidebar-backdrop');
      if (e.target === backdrop) {
        dispatch({ type: 'TOGGLE_SIDEBAR' });
      }
    };

    document.addEventListener('click', handleBackdropClick);
    
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <div className="mb-4 ms-0 show-1023">
      <button
        onClick={menuToggleHandler}
        type="button"
        className="theme-btn toggle-filters"
        aria-label="Toggle Sidebar"
      >
        <span className="flaticon-menu-1"></span> Menu
      </button>
    </div>
  );
};

export { MenuToggler }; 