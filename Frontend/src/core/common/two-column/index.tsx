import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TowColData } from '../../data/json/twoColData'
import ImageWithBasePath from '../imageWithBasePath';
import { all_routes } from '../../../feature-module/router/all_routes';
import Scrollbars from "react-custom-scrollbars-2";
const TwoColumnSidebar = () => {
    const routes = all_routes
    const Location = useLocation();
    const [showSubMenusTab, SetShowSubMenusTab] = useState(true);
    const [isActive, SetIsActive] = useState<any>();
    const [subOpen, setSubopen] = useState<any>("");
    const savedMenuValue = sessionStorage.getItem('menuValue2')|| '';
    const showTabs = (res:any) => {
        sessionStorage.setItem('menuValue2', res.menuValue);
        TowColData.forEach((menus:any)=>{
            menus.menu.forEach((mainMenus:any) => {
                if (res.menuValue === mainMenus.menuValue) {
                    mainMenus.showMyTab = true;
                  } else {
                    mainMenus.showMyTab = false;
                  }
            })
        }

        )
    }
    const toggleSidebar = (title: any) => {
        localStorage.setItem("menuOpened", title);
        if (title === subOpen) {
          setSubopen("");
        } else {
          setSubopen(title);
        }
      };
      useEffect(() => {
        if(Location.pathname === '/layout-twocolumn') {
            sessionStorage.setItem('menuValue2', 'Layouts');
            SetIsActive('Layouts') 
            
            
            TowColData.forEach((menus:any)=>{
                menus.menu.forEach((mainMenus:any) => {
                    if ('Layouts' === mainMenus.menuValue) {
                        mainMenus.showMyTab = true;
                      } else {
                        mainMenus.showMyTab = false;
                      }
                })
            }
    
            )
        } 
        
        
      }, [Location.pathname,isActive,savedMenuValue])
      
  return (
    <div className="two-col-sidebar" id="two-col-sidebar">
        <div className="sidebar sidebar-twocol">
            <div className="twocol-mini">
                <Link to={routes.adminDashboard} className="logo-small">
                    <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo"/>
                </Link>
                <Scrollbars>
                <div className="sidebar-left slimscroll">
                    <div className="nav flex-column align-items-center nav-pills" id="sidebar-tabs" role="tablist"
                        aria-orientation="vertical">
                            {TowColData.map((mainMenu, index) => (
                                <React.Fragment key={`main-${index}`}>
                                {mainMenu.menu.map((title,i)=>(
                                   
                                 <Link to="#" className={`nav-link ${
                                    title?.subMenus
                                        ?.map((link: any) => link?.route)
                                        .includes(Location.pathname) 
                                        ? "active"
                                        : ""
                                    }`} onClick={()=>{showTabs(title)}} title={title.menuValue} key={i}>
                                 <i className={`ti ti-${title.icon}`}></i>
                             </Link>
                                )
                                )}
                                
                                </React.Fragment>
                            ))}
                       
                    </div>
                </div>
                </Scrollbars>

            </div>
            <div className="sidebar-right">
                <div className="sidebar-logo mb-4">
                    <Link to={routes.adminDashboard} className="logo logo-normal">
                        <ImageWithBasePath src="assets/img/logo.svg" alt="Logo"/>
                    </Link>
                    <Link to={routes.adminDashboard} className="dark-logo">
                        <ImageWithBasePath src="assets/img/logo-white.svg" alt="Logo"/>
                    </Link>
                </div>
                <div className="sidebar-scroll">
                    <h6 className="mb-3">Welcome to SmartHR</h6>
                    <div className="text-center rounded bg-light p-3 mb-4">
                        <div className="avatar avatar-lg online mb-3">
                            <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="Img" className="img-fluid rounded-circle"/>
                        </div>
                        <h6 className="fs-12 fw-normal mb-1">Adrian Herman</h6>
                        <p className="fs-10">System Admin</p>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className={`tab-pane ${showSubMenusTab ? 'd-block':'d-none'}`} id="dashboard">
                            <ul>
                            {TowColData.map((mainMenu, index) => (
                                <React.Fragment key={`main-${index}`}>
                                    {mainMenu.menu.map((title: any, i: number) => (
                                    <React.Fragment key={`title-${i}`}>
                                        {title.showMyTab === true && (
                                        <>
                                            <li className="menu-title">
                                            <span>{title.menuValue}</span>
                                            </li>
                                            {title.subMenus.map((subMenus: any, j: number) => (
                                            <React.Fragment key={`submenu-${j}`}>
                                                {title.hasSubRoute && (
                                                <li>
                                                    <Link
                                                    className={
                                                        subMenus.route === Location.pathname ? "active" : ""
                                                    }
                                                    to={subMenus.route}
                                                    >
                                                    {subMenus.menuValue}
                                                    </Link>
                                                </li>
                                                )}
                                                {title.hasSubRouteTwo && (
                                                <>
                                                    {subMenus.customSubmenuTwo ? (
                                                    <li className="submenu">
                                                        <Link
                                                        to="#"
                                                        className={`${
                                                            subMenus?.subMenus
                                                            ?.map((link: any) => link?.route)
                                                            .includes(Location.pathname)
                                                            ? "active"
                                                            : ""
                                                        } ${
                                                            subOpen === subMenus.menuValue ? "subdrop" : ""
                                                        }`}
                                                        onClick={() => toggleSidebar(subMenus.menuValue)}
                                                        >
                                                        <span>{subMenus.menuValue}</span>
                                                        <span className="menu-arrow"></span>
                                                        </Link>
                                                        <ul
                                                        style={{
                                                            display:
                                                            subOpen === subMenus.menuValue ? "block" : "none",
                                                        }}
                                                        >
                                                        {subMenus.subMenusTwo.map(
                                                            (subMenuTwo: any, k: number) => (
                                                            <li key={`submenu-two-${j}-${k}`}>
                                                                <Link
                                                                className={
                                                                    subMenuTwo.route === Location.pathname
                                                                    ? "active"
                                                                    : ""
                                                                }
                                                                to={subMenuTwo.route}
                                                                >
                                                                {subMenuTwo.menuValue}
                                                                </Link>
                                                            </li>
                                                            )
                                                        )}
                                                        </ul>
                                                    </li>
                                                    ) : (
                                                    <li key={`submenu-link-${j}`}>
                                                        <Link
                                                        to={subMenus.route}
                                                        className={
                                                            subMenus.route === Location.pathname ? "active" : ""
                                                        }
                                                        >
                                                        {subMenus.menuValue}
                                                        </Link>
                                                    </li>
                                                    )}
                                                </>
                                                )}
                                            </React.Fragment>
                                            ))}
                                        </>
                                        )}
                                    </React.Fragment>
                                    ))}
                                </React.Fragment>
                                ))}

                            </ul>
                        </div>
                        <div className="tab-pane fade" id="application">
                            <ul>
                                <li className="menu-title"><span>APPLICATION</span></li>
                                <li><Link to="voice-call.html">Voice Call</Link></li>
                                <li><Link to="video-call.html">Video Call</Link></li>
                                <li><Link to="outgoing-call.html">Outgoing Call</Link></li>
                                <li><Link to="incoming-call.html">Incoming Call</Link></li>
                                <li><Link to="call-history.html">Call History</Link></li>
                                <li><Link to="calendar.html">Calendar</Link></li>
                                <li><Link to="email.html">Email</Link></li>
                                <li><Link to="todo.html">To Do</Link></li>
                                <li><Link to="notes.html">Notes</Link></li>
                                <li><Link to="file-manager.html">File Manager</Link></li>
                                <li><Link to="kanban-view.html">Kanban</Link></li>
                                <li><Link to="invoices.html">Invoices</Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="super-admin">
                            <ul>
                                <li className="menu-title"><span>SUPER ADMIN</span></li>
                                <li><Link to="dashboard.html">Dashboard</Link></li>
                                <li><Link to="companies.html">Companies</Link></li>
                                <li><Link to="subscription.html">Subscriptions</Link></li>
                                <li><Link to="packages.html">Packages</Link></li>
                                <li><Link to="domain.html">Domain</Link></li>
                                <li><Link to="purchase-transaction.html">Purchase Transaction</Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="layout">
                            <ul>
                                <li className="menu-title"><span>LAYOUT</span></li>
                                <li><Link to="layout-horizontal.html"><span>Horizontal</span></Link></li>
                                <li><Link to="layout-detached.html"><span>Detached</span></Link></li>
                                <li><Link to="layout-modern.html"><span>Modern</span></Link></li>
                                <li><Link to="layout-two-column.html"><span>Two Column </span></Link></li>
                                <li><Link to="layout-hovered.html"><span>Hovered</span></Link></li>
                                <li><Link to="layout-box.html"><span>Boxed</span></Link></li>
                                <li><Link to="layout-horizontal-single.html"><span>Horizontal Single</span></Link></li>
                                <li><Link to="layout-horizontal-overlay.html"><span>Horizontal Overlay</span></Link>
                                </li>
                                <li><Link to="layout-horizontal-box.html"><span>Horizontal Box</span></Link></li>
                                <li><Link to="layout-horizontal-sidemenu.html"><span>Menu Aside</span></Link></li>
                                <li><Link to="layout-vertical-transparent.html"><span>Transparent</span></Link></li>
                                <li><Link to="layout-without-header.html"><span>Without Header</span></Link></li>
                                <li><Link to="layout-rtl.html"><span>RTL</span></Link></li>
                                <li><Link to="layout-dark.html"><span>Dark</span></Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="projects">
                            <ul>
                                <li className="menu-title"><span>PROJECTS</span></li>
                                <li><Link to="clients-grid.html">Clients</Link></li>
                                <li className="submenu">
                                    <Link to="#"><span>Projects</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="projects-grid.html">Projects</Link></li>
                                        <li><Link to="tasks.html">Tasks</Link></li>
                                        <li><Link to="task-board.html">Task Board</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="crm">
                            <ul>
                                <li className="menu-title"><span>CRM</span></li>
                                <li><Link to="contacts-grid.html"><span>Contacts</span></Link></li>
                                <li><Link to="companies-grid.html"><span>Companies</span></Link></li>
                                <li><Link to="deals-grid.html"><span>Deals</span></Link></li>
                                <li><Link to="leads-grid.html"><span>Leads</span></Link></li>
                                <li><Link to="pipeline.html"><span>Pipeline</span></Link></li>
                                <li><Link to="analytics.html"><span>Analytics</span></Link></li>
                                <li><Link to="activity.html"><span>Activities</span></Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="hrm">
                            <ul>
                                <li className="menu-title"><span>HRM</span></li>
                                <li className="submenu">
                                    <Link to="#"><span>Employees</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="employees.html">Employee Lists</Link></li>
                                        <li><Link to="employees-grid.html">Employee Grid</Link></li>
                                        <li><Link to="employee-details.html">Employee Details</Link></li>
                                        <li><Link to="departments.html">Departments</Link></li>
                                        <li><Link to="designations.html">Designations</Link></li>
                                        <li><Link to="policy.html">Policies</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Tickets</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="tickets.html">Tickets</Link></li>
                                        <li><Link to="ticket-details.html">Ticket Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="holidays.html"><span>Holidays</span></Link></li>
                                <li className="submenu">
                                    <Link to="#"><span>Attendance</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li className="submenu submenu-two">
                                            <Link to="#">Leaves<span
                                                    className="menu-arrow inside-submenu"></span></Link>
                                            <ul>
                                                <li><Link to="leaves.html">Leaves (Admin)</Link></li>
                                                <li><Link to="leaves-employee.html">Leave (Employee)</Link></li>
                                                <li><Link to="leave-settings.html">Leave Settings</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="attendance-admin.html">Attendance (Admin)</Link></li>
                                        <li><Link to="attendance-employee.html">Attendance (Employee)</Link></li>
                                        <li><Link to="timesheets.html">Timesheets</Link></li>
                                        <li><Link to="schedule-timing.html">Shift & Schedule</Link></li>
                                        <li><Link to="overtime.html">Overtime</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Performance</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="performance-indicator.html">Performance Indicator</Link></li>
                                        <li><Link to="performance-review.html">Performance Review</Link></li>
                                        <li><Link to="performance-appraisal.html">Performance Appraisal</Link></li>
                                        <li><Link to="goal-tracking.html">Goal List</Link></li>
                                        <li><Link to="goal-type.html">Goal Type</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Training</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="training.html">Training List</Link></li>
                                        <li><Link to="trainers.html">Trainers</Link></li>
                                        <li><Link to="training-type.html">Training Type</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="promotion.html"><span>Promotion</span></Link></li>
                                <li><Link to="resignation.html"><span>Resignation</span></Link></li>
                                <li><Link to="termination.html"><span>Termination</span></Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="finance">
                            <ul>
                                <li className="menu-title"><span>FINANCE & ACCOUNTS</span></li>
                                <li className="submenu">
                                    <Link to="#"><span>Sales</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="estimates.html">Estimates</Link></li>
                                        <li><Link to="invoices.html">Invoices</Link></li>
                                        <li><Link to="payments.html">Payments</Link></li>
                                        <li><Link to="expenses.html">Expenses</Link></li>
                                        <li><Link to="provident-fund.html">Provident Fund</Link></li>
                                        <li><Link to="taxes.html">Taxes</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Accounting</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="categories.html">Categories</Link></li>
                                        <li><Link to="budgets.html">Budgets</Link></li>
                                        <li><Link to="budget-expenses.html">Budget Expenses</Link></li>
                                        <li><Link to="budget-revenues.html">Budget Revenues</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Payroll</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="employee-salary.html">Employee Salary</Link></li>
                                        <li><Link to="payslip.html">Payslip</Link></li>
                                        <li><Link to="payroll.html">Payroll Items</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="administration">
                            <ul>
                                <li className="menu-title"><span>ADMINISTRATION</span></li>
                                <li className="submenu">
                                    <Link to="#"><span>Assets</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="assets.html">Assets</Link></li>
                                        <li><Link to="asset-categories.html">Asset Categories</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Help & Supports</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="knowledgebase.html">Knowledge Base</Link></li>
                                        <li><Link to="activity.html">Activities</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>User Management</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="users.html">Users</Link></li>
                                        <li><Link to="roles-permissions.html">Roles & Permissions</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"><span>Reports</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="expenses-report.html">Expense Report</Link></li>
                                        <li><Link to="invoice-report.html">Invoice Report</Link></li>
                                        <li><Link to="payment-report.html">Payment Report</Link></li>
                                        <li><Link to="project-report.html">Project Report</Link></li>
                                        <li><Link to="task-report.html">Task Report</Link></li>
                                        <li><Link to="user-report.html">User Report</Link></li>
                                        <li><Link to="employee-report.html">Employee Report</Link></li>
                                        <li><Link to="payslip-report.html">Payslip Report</Link></li>
                                        <li><Link to="attendance-report.html">Attendance Report</Link></li>
                                        <li><Link to="leave-report.html">Leave Report</Link></li>
                                        <li><Link to="daily-report.html">Daily Report</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        General Settings
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="profile-settings.html">Profile</Link></li>
                                        <li><Link to="security-settings.html">Security</Link></li>
                                        <li><Link to="notification-settings.html">Notifications</Link></li>
                                        <li><Link to="connected-apps.html">Connected Apps</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Website Settings
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="bussiness-settings.html">Business Settings</Link></li>
                                        <li><Link to="seo-settings.html">SEO Settings</Link></li>
                                        <li><Link to="localization-settings.html">Localization</Link></li>
                                        <li><Link to="prefixes.html">Prefixes</Link></li>
                                        <li><Link to="preferences.html">Preferences</Link></li>
                                        <li><Link to="performance-appraisal.html">Appearance</Link></li>
                                        <li><Link to="language.html">Language</Link></li>
                                        <li><Link to="authentication-settings.html">Authentication</Link></li>
                                        <li><Link to="ai-settings.html">AI Settings</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">App Settings<span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to="salary-settings.html">Salary Settings</Link></li>
                                        <li><Link to="approval-settings.html">Approval Settings</Link></li>
                                        <li><Link to="invoice-settings.html">Invoice Settings</Link></li>
                                        <li><Link to="leave-type.html">Leave Type</Link></li>
                                        <li><Link to="custom-fields.html">Custom Fields</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        System Settings
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="email-settings.html">Email Settings</Link></li>
                                        <li><Link to="email-template.html">Email Templates</Link></li>
                                        <li><Link to="sms-settings.html">SMS Settings</Link></li>
                                        <li><Link to="sms-template.html">SMS Templates</Link></li>
                                        <li><Link to="otp-settings.html">OTP</Link></li>
                                        <li><Link to="gdpr.html">GDPR Cookies</Link></li>
                                        <li><Link to="maintenance-mode.html">Maintenance Mode</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Financial Settings
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="payment-gateways.html">Payment Gateways</Link></li>
                                        <li><Link to="tax-rates.html">Tax Rate</Link></li>
                                        <li><Link to="currencies.html">Currencies</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">Other Settings<span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to="custom-css.html">Custom CSS</Link></li>
                                        <li><Link to="custom-js.html">Custom JS</Link></li>
                                        <li><Link to="cronjob.html">Cronjob</Link></li>
                                        <li><Link to="storage-settings.html">Storage</Link></li>
                                        <li><Link to="ban-ip-address.html">Ban IP Address</Link></li>
                                        <li><Link to="backup.html">Backup</Link></li>
                                        <li><Link to="clear-cache.html">Clear Cache</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="content">
                            <ul>
                                <li className="menu-title"><span>CONTENT</span></li>
                                <li><Link to="pages.html">Pages</Link></li>
                                <li className="submenu">
                                    <Link to="#">
                                        Blogs
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="blogs.html">All Blogs</Link></li>
                                        <li><Link to="blog-categories.html">Categories</Link></li>
                                        <li><Link to="blog-comments.html">Comments</Link></li>
                                        <li><Link to="blog-tags.html">Blog Tags</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Locations
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="countries.html">Countries</Link></li>
                                        <li><Link to="states.html">States</Link></li>
                                        <li><Link to="cities.html">Cities</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="testimonials.html">Testimonials</Link></li>
                                <li><Link to="faq.html">FAQ’S</Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="pages">
                            <ul>
                                <li className="menu-title"><span>PAGES</span></li>
                                <li><Link to="starter.html"><span>Starter</span></Link></li>
                                <li><Link to="profile.html"><span>Profile</span></Link></li>
                                <li><Link to="gallery.html"><span>Gallery</span></Link></li>
                                <li><Link to="search-result.html"><span>Search Results</span></Link></li>
                                <li><Link to="timeline.html"><span>Timeline</span></Link></li>
                                <li><Link to="pricing.html"><span>Pricing</span></Link></li>
                                <li><Link to="coming-soon.html"><span>Coming Soon</span></Link></li>
                                <li><Link to="under-maintenance.html"><span>Under Maintenance</span></Link></li>
                                <li><Link to="under-construction.html"><span>Under Construction</span></Link></li>
                                <li><Link to="api-keys.html"><span>API Keys</span></Link></li>
                                <li><Link to="privacy-policy.html"><span>Privacy Policy</span></Link></li>
                                <li><Link to="terms-condition.html"><span>Terms & Conditions</span></Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="authentication">
                            <ul>
                                <li className="menu-title"><span>AUTHENTICATION</span></li>
                                <li className="submenu">
                                    <Link to="#">
                                        Login<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="login.html">Cover</Link></li>
                                        <li><Link to="login-2.html">Illustration</Link></li>
                                        <li><Link to="login-3.html">Basic</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Register<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="register.html">Cover</Link></li>
                                        <li><Link to="register-2.html">Illustration</Link></li>
                                        <li><Link to="register-3.html">Basic</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Forgot Password<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="forgot-password.html">Cover</Link></li>
                                        <li><Link to="forgot-password-2.html">Illustration</Link></li>
                                        <li><Link to="forgot-password-3.html">Basic</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Reset Password<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="reset-password.html">Cover</Link></li>
                                        <li><Link to="reset-password-2.html">Illustration</Link></li>
                                        <li><Link to="reset-password-3.html">Basic</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        Email Verification<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="email-verification.html">Cover</Link></li>
                                        <li><Link to="email-verification-2.html">Illustration</Link></li>
                                        <li><Link to="email-verification-3.html">Basic</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        2 Step Verification<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="two-step-verification.html">Cover</Link></li>
                                        <li><Link to="two-step-verification-2.html">Illustration</Link></li>
                                        <li><Link to="two-step-verification-3.html">Basic</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="lock-screen.html">Lock Screen</Link></li>
                                <li><Link to="error-404.html">404 Error</Link></li>
                                <li><Link to="error-500.html">500 Error</Link></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="ui-elements">
                            <ul>
                                <li className="menu-title"><span>UI INTERFACE</span></li>
                                <li className="submenu">
                                    <Link to="#">Base UI<span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li><Link to="ui-alerts.html">Alerts</Link></li>
                                        <li><Link to="ui-accordion.html">Accordion</Link></li>
                                        <li><Link to="ui-avatar.html">Avatar</Link></li>
                                        <li><Link to="ui-badges.html">Badges</Link></li>
                                        <li><Link to="ui-borders.html">Border</Link></li>
                                        <li><Link to="ui-buttons.html">Buttons</Link></li>
                                        <li><Link to="ui-buttons-group.html">Button Group</Link></li>
                                        <li><Link to="ui-breadcrumb.html">Breadcrumb</Link></li>
                                        <li><Link to="ui-cards.html">Card</Link></li>
                                        <li><Link to="ui-carousel.html">Carousel</Link></li>
                                        <li><Link to="ui-colors.html">Colors</Link></li>
                                        <li><Link to="ui-dropdowns.html">Dropdowns</Link></li>
                                        <li><Link to="ui-grid.html">Grid</Link></li>
                                        <li><Link to="ui-images.html">Images</Link></li>
                                        <li><Link to="ui-lightbox.html">Lightbox</Link></li>
                                        <li><Link to="ui-media.html">Media</Link></li>
                                        <li><Link to="ui-modals.html">Modals</Link></li>
                                        <li><Link to="ui-offcanvas.html">Offcanvas</Link></li>
                                        <li><Link to="ui-pagination.html">Pagination</Link></li>
                                        <li><Link to="ui-popovers.html">Popovers</Link></li>
                                        <li><Link to="ui-progress.html">Progress</Link></li>
                                        <li><Link to="ui-placeholders.html">Placeholders</Link></li>
                                        <li><Link to="ui-spinner.html">Spinner</Link></li>
                                        <li><Link to="ui-sweetalerts.html">Sweet Alerts</Link></li>
                                        <li><Link to="ui-nav-tabs.html">Tabs</Link></li>
                                        <li><Link to="ui-toasts.html">Toasts</Link></li>
                                        <li><Link to="ui-tooltips.html">Tooltips</Link></li>
                                        <li><Link to="ui-typography.html">Typography</Link></li>
                                        <li><Link to="ui-video.html">Video</Link></li>
                                        <li><Link to="ui-sortable.html">Sortable</Link></li>
                                        <li><Link to="ui-swiperjs.html">Swiperjs</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"> Advanced UI <span className="menu-arrow"></span> </Link>
                                    <ul>
                                        <li><Link to="ui-ribbon.html">Ribbon</Link></li>
                                        <li><Link to="ui-clipboard.html">Clipboard</Link></li>
                                        <li><Link to="ui-drag-drop.html">Drag & Drop</Link></li>
                                        <li><Link to="ui-rangeslider.html">Range Slider</Link></li>
                                        <li><Link to="ui-rating.html">Rating</Link></li>
                                        <li><Link to="ui-text-editor.html">Text Editor</Link></li>
                                        <li><Link to="ui-counter.html">Counter</Link></li>
                                        <li><Link to="ui-scrollbar.html">Scrollbar</Link></li>
                                        <li><Link to="ui-stickynote.html">Sticky Note</Link></li>
                                        <li><Link to="ui-timeline.html">Timeline</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"> Forms <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li className="submenu submenu-two">
                                            <Link to="#">Form Elements<span
                                                    className="menu-arrow inside-submenu"></span></Link>
                                            <ul>
                                                <li><Link to="form-basic-inputs.html">Basic Inputs</Link></li>
                                                <li><Link to="form-checkbox-radios.html">Checkbox & Radios</Link></li>
                                                <li><Link to="form-input-groups.html">Input Groups</Link></li>
                                                <li><Link to="form-grid-gutters.html">Grid & Gutters</Link></li>
                                                <li><Link to="form-select.html">Form Select</Link></li>
                                                <li><Link to="form-mask.html">Input Masks</Link></li>
                                                <li><Link to="form-fileupload.html">File Uploads</Link></li>
                                                <li><Link to="form-pickers.html">Form Picker</Link></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <Link to="#">Layouts<span
                                                    className="menu-arrow inside-submenu"></span></Link>
                                            <ul>
                                                <li><Link to="form-horizontal.html">Horizontal Form</Link></li>
                                                <li><Link to="form-vertical.html">Vertical Form</Link></li>
                                                <li><Link to="form-floating-labels.html">Floating Labels</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="form-validation.html">Form Validation</Link></li>
                                        <li><Link to="form-select2.html">Select2</Link></li>
                                        <li><Link to="form-wizard.html">Form Wizard</Link></li>
                                    <li><Link to="form-pickers.html">Form Picker</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">Tables <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to="tables-basic.html">Basic Tables </Link></li>
                                        <li><Link to="data-tables.html">Data Table </Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">Charts<span className="menu-arrow"></span> </Link>
                                    <ul>
                                        <li><Link to="chart-apex.html">Apex Charts</Link></li>
                                        <li><Link to="chart-c3.html">Chart C3</Link></li>
                                        <li><Link to="chart-js.html">Chart Js</Link></li>
                                        <li><Link to="chart-morris.html">Morris Charts</Link></li>
                                        <li><Link to="chart-flot.html">Flot Charts</Link></li>
                                        <li><Link to="chart-peity.html">Peity Charts</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#" className="active">Icons<span
                                            className="menu-arrow"></span> </Link>
                                    <ul>
                                        <li><Link to="icon-fontawesome.html">Fontawesome Icons</Link></li>
                                            <li><Link to="icon-tabler.html">Tabler Icons</Link></li>
                                            <li><Link to="icon-bootstrap.html">Bootstrap Icons</Link></li>
                                            <li><Link to="icon-remix.html">Remix Icons</Link></li>
                                        <li><Link to="icon-feather.html">Feather Icons</Link></li>
                                        <li><Link to="icon-ionic.html">Ionic Icons</Link></li>
                                        <li><Link to="icon-material.html">Material Icons</Link></li>
                                        <li><Link to="icon-pe7.html">Pe7 Icons</Link></li>
                                        <li><Link to="icon-simpleline.html">Simpleline Icons</Link></li>
                                        <li><Link to="icon-themify.html">Themify Icons</Link></li>
                                        <li><Link to="icon-weather.html">Weather Icons</Link></li>
                                        <li><Link to="icon-typicon.html">Typicon Icons</Link></li>
                                        <li><Link to="icon-flag.html">Flag Icons</Link></li>
                                        <li><Link to="icon-bootstrap.html">Bootstrap Icons</Link></li>
                                        <li><Link to="icon-remix.html">Remix Icons</Link></li>
                                        <li><Link to="icon-tabler.html" className="active">Tabler Icons</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#">
                                        <span>Maps</span>
                                        <span className="menu-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to="maps-vector.html">Vector</Link>
                                        </li>
                                        <li>
                                            <Link to="maps-leaflet.html">Leaflet</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="extras">
                            <ul>
                                <li className="menu-title"><span>EXTRAS</span></li>
                                <li><Link to="#">Documentation</Link></li>
                                <li><Link to="#">Change Log</Link></li>
                                <li className="submenu">
                                    <Link to="#"><span>Multi Level</span><span
                                            className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to="#">Multilevel 1</Link></li>
                                        <li className="submenu submenu-two">
                                            <Link to="#">Multilevel 2<span
                                                    className="menu-arrow inside-submenu"></span></Link>
                                            <ul>
                                                <li><Link to="#">Multilevel 2.1</Link></li>
                                                <li className="submenu submenu-two submenu-three">
                                                    <Link to="#">Multilevel 2.2<span
                                                            className="menu-arrow inside-submenu inside-submenu-two"></span></Link>
                                                    <ul>
                                                        <li><Link to="#">Multilevel 2.2.1</Link></li>
                                                        <li><Link to="#">Multilevel 2.2.2</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Multilevel 3</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwoColumnSidebar