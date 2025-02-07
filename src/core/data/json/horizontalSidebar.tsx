import { all_routes } from "../../../feature-module/router/all_routes";
const routes = all_routes;

export const HorizontalSidebarData = [
    {
        title: 'Main',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Dashboard',
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'smart-home',
            base: 'dashboard',
            subMenus: [
              {
                menuValue: 'Admin Dashboard',
                route: routes.adminDashboard,
                base: 'index',
              },
              {
                menuValue: 'Employee Dashboard',
                route: routes.employeeDashboard,
                base: 'employee',
              },
              {
                menuValue: 'Deals Dashboard',
                route: routes.dealsDashboard,
                base: 'deals',
              },
              {
                menuValue: 'Leads Dashboard',
                route: routes.leadsDashboard,
                base: 'leads',
              },
            ],
          },
          {
            menuValue: 'Super Admin',
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'user-star',
            base: 'super-admin',
            subMenus: [
              {
                menuValue: 'Dashboard',
                route: routes.superAdminDashboard,
                base: 'super-admin-dashboard',
              },
              {
                menuValue: 'Companies',
                route: routes.superAdminCompanies,
                base: 'companies',
              },
              {
                menuValue: 'Subscriptions',
                route: routes.superAdminSubscriptions,
                base: 'subscriptions',
              },
              {
                menuValue: 'Packages',
                route: routes.superAdminPackages,
                base: 'packages',
                base2: 'packages-grid',
              },
              {
                menuValue: 'Domain',
                route: routes.superAdminDomain,
                base: 'domain',
              },
              {
                menuValue: 'Purchase Transaction',
                route: routes.superAdminPurchaseTransaction,
                base: 'purchase-transaction',
              },
            ],
          },
          {
            menuValue: 'Application',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'layout-grid-add',
            base: 'application',
            subMenus: [
              {
                menuValue: 'Chat',
                route: routes.chat,
                base: 'chats',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Calls',
                customSubmenuTwo: true,
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.calendar,
                base:'calls',
                subMenusTwo: [
                  {
                    menuValue: 'Voice Call',
                    route: routes.voiceCall,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'voice-call',
                  },
                  {
                    menuValue: 'Video Call',
                    route: routes.videoCall,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'video-call',
                  },
                  {
                    menuValue: 'Outgoing Call',
                    route: routes.outgoingCall,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'outgoing-call',
                  },
                  {
                    menuValue: 'Incoming Call',
                    route: routes.incomingCall,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'incoming-call',
                  },
                  {
                    menuValue: 'Call History',
                    route: routes.callHistory,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'call-history',
                  },
                ],
              },
              {
                menuValue: 'Calendar',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.calendar,
                customSubmenuTwo: false,
                base: 'calendar',
              },
  
              {
                menuValue: 'Email',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.email,
                customSubmenuTwo: false,
                base: 'email',
              },
              {
                menuValue: 'To Do',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.todo,
                customSubmenuTwo: false,
                base: 'todo',
              },
              {
                menuValue: 'Notes',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.notes,
                customSubmenuTwo: false,
                base: 'notes',
              },
              {
                menuValue: 'Social Feed',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.socialFeed,
                customSubmenuTwo: false,
                base: 'social-feed',
              },
              {
                menuValue: 'File Manager',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.fileManager,
                customSubmenuTwo: false,
                base: 'file-manager',
              },
              {
                menuValue: 'Kanban',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.kanbanView,
                customSubmenuTwo: false,
                base: 'kanban',
              },
              {
                menuValue: 'Invoices',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.invoice,
                customSubmenuTwo: false,
                base: 'invoices',
              },
            ],
          },
          {
            menuValue: 'Layouts',
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'layout-board-split',
            base: 'layout-horizontal',
            base2: 'layout-vertical-transparent',
            base3: 'layout-horizontal-box',
            base4: 'layout-horizontal-overlay',
            base5: 'layout-horizontal-single',
            base6: 'layout-modern',
            base7: 'layout-detached',
            subMenus: [
              {
                menuValue: 'Horizontal',
                route: routes.Horizontal,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-horizontal',
              },
              {
                menuValue: 'Detached',
                route: routes.Detached,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-detached',
              },
              {
                menuValue: 'Modern',
                route: routes.Modern,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-modern',
              },
              {
                menuValue: 'Two Column',
                route: routes.TwoColumn,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-two-column',
              },
              {
                menuValue: 'Hovered',
                route: routes.Hovered,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-hovered',
              },
              {
                menuValue: 'Boxed',
                route: routes.Boxed,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-boxed',
              },
              {
                menuValue: 'Horizontal Single',
                route: routes.HorizontalSingle,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-horizontal-single',
              },
              {
                menuValue: 'Horizontal Overlay',
                route: routes.HorizontalOverlay,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-horizontal-overlay',
              },
              {
                menuValue: 'Horizontal Box',
                route: routes.HorizontalBox,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-horizontal-box',
              },
              {
                menuValue: 'Menu Aside',
                route: routes.MenuAside,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-horizontal-sidemenu',
              },
              {
                menuValue: 'Transparent',
                route: routes.Transparent,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-vertical-transparent',
              },
              {
                menuValue: 'Without Header',
                route: routes.WithoutHeader,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-without-header',
              },
              {
                menuValue: 'RTL',
                route: routes.RTL,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-rtl',
              },
              {
                menuValue: 'Dark',
                route: routes.Dark,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'layout-dark',
              },
            ],
          },
          {
            menuValue: 'Projects',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'user-star',
            base: 'client',
            base2: 'project',
            base3: 'crm',
            base4: 'employee',
            base5: 'ticket',
            subMenus: [
              {
                menuValue: 'Clients',
                route: routes.clientgrid,
                base: 'client',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Projects',
                base: 'project',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Projects',
                    route: routes.project,
                    base: 'project-grid',
                    base2: 'project-list',
                    base3: 'project-details',
                  },
                  { menuValue: 'Tasks', route: routes.tasks, base: 'tasks' },
                  {
                    menuValue: 'Task Board',
                    route: routes.taskboard,
                    base: 'task-board',
                  },
                ],
              },
              {
                menuValue: 'Crm',
                base: 'crm',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Contacts',
                    route: routes.contactGrid,
                    base: 'contact',
                  },
                  {
                    menuValue: 'Companies',
                    route: routes.companiesGrid,
                    base: 'company',
                  },
                  {
                    menuValue: 'Deals',
                    route: routes.dealsGrid,
                    base: 'deals',
                  },
                  {
                    menuValue: 'Leads',
                    route: routes.leadsGrid,
                    base: 'leads',
                  },
                  {
                    menuValue: ' Pipeline',
                    route: routes.pipeline,
                    base: 'pipeline',
                  },
                  {
                    menuValue: 'Analytics',
                    route: routes.analytics,
                    base: 'analytics',
                  },
                  {
                    menuValue: 'Activities',
                    route: routes.activities,
                    base: 'activities',
                  },
                ],
              },
              {
                menuValue: 'Employee',
                base: 'employee',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Employees List',
                    route: routes.employeeList,
                    base: 'employees',
                    base2: 'employee-list',
                  },
                  {
                    menuValue: 'Employees Grid',
                    route: routes.employeeGrid,
                    base: 'employees',
                    base2: 'employee-grid',
                  },
                  {
                    menuValue: 'Employees Details',
                    route: routes.employeedetails,
                    base: 'employees',
                    base2: 'employee-details',
                  },
                  {
                    menuValue: 'Departments',
                    route: routes.departments,
                    base: 'departments',
                  },
                  {
                    menuValue: 'Designations',
                    route: routes.designations,
                    base: 'designations',
                  },
                  {
                    menuValue: 'Policies',
                    route: routes.policy,
                    base: 'employees',
                    base2: 'policy',
                  },
                ],
              },
              {
                menuValue: 'Tickets',
                base: 'ticket',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Tickets',
                    route: routes.ticketList,
                    base: 'ticket-list',
                  },
                  {
                    menuValue: 'Tickets Detail',
                    route: routes.ticketDetails,
                    base: 'ticket-details',
                  },
                ],
              },
              {
                menuValue: 'Holidays',
                route: routes.holidays,
                base: 'holidays',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Attendance',
                base: 'attendance',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Leaves (Admin)',
                    route: routes.leaveadmin,
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                  {
                    menuValue: 'Leaves (Employee)',
                    route: routes.leaveemployee,
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                  {
                    menuValue: 'Leave Settings',
                    route: routes.leavesettings,
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                  {
                    menuValue: 'Attendance (Admin)',
                    route: routes.attendanceadmin,
                    base: 'attendance-admin',
                  },
                  {
                    menuValue: 'Attendance (Employee)',
                    route: routes.attendanceemployee,
                    base: 'attendance-employee',
                  },
  
                  {
                    menuValue: 'Timesheet',
                    route: routes.timesheet,
                    base: 'timesheet',
                  },
                  {
                    menuValue: 'Shift & Schedule',
                    route: routes.scheduletiming,
                    base: 'shift-schedule',
                  },
                  {
                    menuValue: 'Overtime',
                    route: routes.overtime,
                    base: 'overtime',
                  },
                ],
              },
              {
                menuValue: 'Performance',
                base: 'performance',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Performance Indicator',
                    route: routes.performanceIndicator,
                    base: 'indicator',
                  },
                  {
                    menuValue: 'Performance Review',
                    route: routes.performanceReview,
                    base: 'review',
                  },
                  {
                    menuValue: 'Performance Appraisal',
                    route: routes.performanceAppraisal,
                    base: 'appraisal',
                  },
                  {
                    menuValue: 'Goal List',
                    route: routes.goalTracking,
                    base: 'appraisal',
                  },
                  {
                    menuValue: 'Goal Type',
                    route: routes.goalType,
                    base: 'appraisal',
                  },
                ],
              },
              {
                menuValue: 'Training',
                base: 'training',
                customSubmenuTwo: true,
                subMenusTwo: [
                  { menuValue: 'Training List', route: routes.trainingList, base: 'lists' },
                  { menuValue: 'Trainers', route: routes.trainers, base: 'trainer' },
                  { menuValue: 'Training Type', route: routes.trainingType, base: 'types' },
                ],
              },
              {
                menuValue: 'Promotion',
                route: routes.promotion,
                base: 'promotion',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Resignation',
                route: routes.resignation,
                base: 'resignation',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Termination',
                route: routes.termination,
                base: 'termination',
                customSubmenuTwo: false,
              },
            ],
          },
          {
            menuValue: 'Administration',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'user-star',
            base: 'jobs',
            base2: 'candidates',
            base3: 'refferals',
            base4: 'sales',
            base5: 'accounting',
            base6: 'payroll',
            base7: 'assets',
            base8: 'support',
            base9: 'user-management',
            base10: 'reports',
            subMenus: [
              {
                menuValue: 'Requirment',
                base: 'jobs',
                base2: 'candidates',
                base3: 'refferals',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Jobs',
                    route: routes.jobgrid,
                    base: 'jobs-grid',
                  },
                  {
                    menuValue: 'Candidates',
                    route: routes.candidatesGrid,
                    base: 'candidates-grid',
                  },
                  {
                    menuValue: 'Referrals',
                    route: routes.refferal,
                    base: 'refferals',
                  },
                ],
              },
              {
                menuValue: 'Sales',
                base: 'sales',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Estimates',
                    route: routes.estimate,
                    base: 'estimates',
                  },
                  {
                    menuValue: 'Invoices',
                    route: routes.invoice,
                    base: 'invoices',
                  },
                  {
                    menuValue: 'Payments',
                    route: routes.payments,
                    base: 'payments',
                  },
                  {
                    menuValue: 'Expenses',
                    route: routes.expenses,
                    base: 'expenses',
                  },
                  {
                    menuValue: 'Provident Fund',
                    route: routes.providentfund,
                    base: 'provident-fund',
                  },
                  {
                    menuValue: 'Taxes',
                    route: routes.taxes,
                    base: 'taxes',
                  },
                ],
              },
              {
                menuValue: 'Accounting',
                base: 'accounting',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Categories',
                    route: '/accounting/categories',
                    base: 'categories',
                  },
                  {
                    menuValue: 'Budgets',
                    route: '/accounting/budgets',
                    base: 'budgets',
                  },
                  {
                    menuValue: 'Budget Expenses',
                    route: '/accounting/budget-expenses',
                    base: 'budget-expenses',
                  },
                  {
                    menuValue: 'Budget Revenues',
                    route: '/accounting/budget-revenues',
                    base: 'budget-revenues',
                  },
                ],
              },
              {
                menuValue: 'Payroll',
                base: 'payroll',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Employee Salary',
                    route: '/payroll/employee-salary',
                    base: 'employee-salary',
                  },
                  {
                    menuValue: 'Payslip',
                    route: '/payroll/payslip',
                    base: 'payslip',
                  },
                  {
                    menuValue: 'Payroll Items',
                    route: '/payroll/payroll-items',
                    base: 'payroll-items',
                  },
                ],
              },
              {
                menuValue: 'Assets',
                base: 'assets',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Assets',
                    route: '/assets/asset-list',
                    base: 'asset-list',
                  },
                  {
                    menuValue: 'Asset Categories',
                    route: '/assets/asset-categories',
                    base: 'asset-categories',
                  },
                ],
              },
              {
                menuValue: 'Help & Supports',
                base: 'supports',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Knowledge Base',
                    route: routes.knowledgebase,
                    base: 'knowledgebase',
                    base2: 'knowledgebase-view',
                    base3: 'knowledgebase-details',
                  },
                  {
                    menuValue: 'Activities',
                    route: routes.activities,
                    base: 'activities',
                  },
                ],
              },
              {
                menuValue: 'User Management',
                base: 'user-management',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Users',
                    route: routes.manageusers,
                    base: 'users',
                  },
                  {
                    menuValue: 'Roles & Permissions',
                    route: routes.rolesPermissions,
                    base: 'roles-permissions',
                  },
                ],
              },
              {
                menuValue: 'Reports',
                base: 'reports',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Expense Report',
                    route: '/reports/expenses-report',
                    base: 'expenses-report',
                  },
                  {
                    menuValue: 'Invoice Report',
                    route: '/reports/invoice-report',
                    base: 'invoice-report',
                  },
                  {
                    menuValue: 'Payment Report',
                    route: '/reports/payment-report',
                    base: 'payment-report',
                  },
                  {
                    menuValue: 'Project Report',
                    route: '/reports/project-report',
                    base: 'project-report',
                  },
                  {
                    menuValue: 'Task Report',
                    route: '/reports/task-report',
                    base: 'task-report',
                  },
                  {
                    menuValue: 'User Report',
                    route: '/reports/user-report',
                    base: 'user-report',
                  },
                  {
                    menuValue: 'Employee Report',
                    route: '/reports/employee-report',
                    base: 'employee-report',
                  },
                  {
                    menuValue: 'Payslip Report',
                    route: '/reports/payslip-report',
                    base: 'payslip-report',
                  },
                  {
                    menuValue: 'Attendance Report',
                    route: '/reports/attendance-report',
                    base: 'attendance-report',
                  },
                  {
                    menuValue: 'Leave Report',
                    route: '/reports/leave-report',
                    base: 'leave-report',
                  },
                  {
                    menuValue: 'Daily Report',
                    route: '/reports/daily-report',
                    base: 'daily-report',
                  },
                ],
              },
              {
                menuValue: 'General Settings',
                customSubmenuTwo: true,
                base: 'general-settings',
                subMenusTwo: [
                  {
                    menuValue: 'Profile',
                    route: routes.profilesettings,
                    base: 'profile-settings',
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                  {
                    menuValue: 'Security',
                    route: routes.securitysettings,
                    base: 'security-settings',
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                  {
                    menuValue: 'Notifications',
                    route: routes.notificationssettings,
                    base: 'notification-settings',
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                  {
                    menuValue: 'Connected Apps',
                    route: routes.connectedApps,
                    base: 'connected-apps',
                    hasSubRoute: false,
                    showSubRoute: false,
                  },
                ],
              },
              {
                menuValue: 'Website Settings',
                customSubmenuTwo: true,
                base: 'website-settings',
                subMenusTwo: [
                  {
                    menuValue: 'Business Settings',
                    route: routes.bussinessSettings,
                    base: 'bussiness-settings',
                  },
                  {
                    menuValue: 'SEO Settings',
                    route: routes.seoSettings,
                    base: 'seo-settings',
                  },
                  {
                    menuValue: 'Localization',
                    route: routes.localizationSettings,
                    base: 'localization-settings',
                  },
                  {
                    menuValue: 'Prefixes',
                    route: routes.prefixes,
                    base: 'prefixes',
                  },
                  {
                    menuValue: 'Preferences',
                    route: routes.preference,
                    base: 'preferences',
                  },
                  {
                    menuValue: 'Appearance',
                    route: routes.appearance,
                    base: 'appearance',
                  },
                  {
                    menuValue: 'Language',
                    route: routes.language,
                    base: 'language',
                    base2: 'add-language',
                  },
                  {
                    menuValue: 'Authentication',
                    route: routes.authenticationSettings,
                    base: 'authentication-settings',
                  },
                  {
                    menuValue: 'AI Settings',
                    route: routes.aiSettings,
                    base: 'ai-settings',
                  },
                ],
              },
              {
                menuValue: 'App Settings',
                customSubmenuTwo: true,
                base: 'app-settings',
                subMenusTwo: [
                  {
                    menuValue: 'Salary Settings',
                    route: routes.salarySettings,
                    base: 'salary-settings',
                  },
                  {
                    menuValue: 'Approval Settings',
                    route: routes.approvalSettings,
                    base: 'approval-settings',
                  },
                  {
                    menuValue: 'Invoice Settings',
                    route: routes.invoiceSettings,
                    base: 'invoice-settings',
                  },
                  {
                    menuValue: 'Leave Type',
                    route: routes.leaveType,
                    base: 'leave-type',
                  },
                  {
                    menuValue: 'Custom Fields',
                    route: routes.customFields,
                    base: 'custom-fields',
                  },
                ],
              },
              {
                menuValue: 'System Settings',
                customSubmenuTwo: true,
                base: 'system-settings',
                subMenusTwo: [
                  {
                    menuValue: 'Email Settings',
                    route: routes.emailSettings,
                    base: 'email-settings',
                  },
                  {
                    menuValue: 'Email Templates',
                    route: routes.emailTemplates,
                    base: 'email-template',
                  },
                  {
                    menuValue: 'SMS Settings',
                    route: routes.smsSettings,
                    base: 'sms-settings',
                  },
                  {
                    menuValue: 'SMS Templates',
                    route: routes.smsTemplate,
                    base: 'sms-template',
                  },
                  {
                    menuValue: 'OTP',
                    route: routes.otpSettings,
                    base: 'otp-settings',
                  },
                  {
                    menuValue: 'GDPR Cookies',
                    route: routes.gdprCookies,
                    base: 'gdpr',
                  },
                  {
                    menuValue: 'Maintenance Mode',
                    route: routes.maintenanceMode,
                    base: 'maintenance-mode',
                  },
                ],
              },
              {
                menuValue: 'Financial Settings',
                customSubmenuTwo: true,
                base: 'financial-settings',
                subMenusTwo: [
                  {
                    menuValue: 'Payment Gateways',
                    route: routes.paymentGateways,
                    base: 'payment-gateways',
                  },
                  {
                    menuValue: 'Tax Rate',
                    route: routes.taxRates,
                    base: 'tax-rates',
                  },
                  {
                    menuValue: 'Currencies',
                    route: routes.currencies,
                    base: 'currencies',
                  },
                ],
              },
              {
                menuValue: 'Other Settings',
                customSubmenuTwo: true,
                base: 'other-settings',
                subMenusTwo: [
                  {
                    menuValue: 'Custom CSS',
                    route: routes.customCss,
                    base: 'custom-css',
                  },
                  {
                    menuValue: 'Custom JS',
                    route: routes.customJs,
                    base: 'custom-js',
                  },
                  {
                    menuValue: 'Cronjob',
                    route: routes.cronjob,
                    base: 'cronjob',
                  },
                  {
                    menuValue: 'Storage',
                    route: routes.storage,
                    base: 'storage-settings',
                  },
                  {
                    menuValue: 'Ban IP Address',
                    route: routes.banIpAddress,
                    base: 'ban-ip-address',
                  },
                  {
                    menuValue: 'Backup',
                    route: routes.backup,
                    base: 'backup',
                  },
                  {
                    menuValue: 'Clear Cache',
                    route: routes.clearcache,
                    base: 'clear-cache',
                  },
                ],
              },
            ],
          },
          {
            menuValue: 'Pages',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'page-break',
            base: 'blog',
            base1: 'locations',
            base2: 'base-ui',
            base3: 'base-ui',
            base4: 'advanced-ui',
            base5: 'forms',
            base6: 'table',
            base7: 'charts',
            base8: 'icon',
            subMenus: [
              {
                menuValue: 'Starter',
                route: routes.starter,
                base: 'starter',
              },
              {
                menuValue: 'Profile',
                route: routes.profile,
                base: 'profile',
              },
              {
                menuValue: 'Gallery',
                route: '/gallery',
                base: 'gallery',
              },
              {
                menuValue: 'Search Results',
                route: '/search-result',
                base: 'search-result',
              },
              {
                menuValue: 'Timeline',
                route: '/timeline',
                base: 'timeline',
              },
              {
                menuValue: 'Pricing',
                route: '/pricing',
                base: 'pricing',
              },
              {
                menuValue: 'Coming Soon',
                route: '/coming-soon',
                base: 'coming-soon',
              },
              {
                menuValue: 'Under Maintenance',
                route: '/under-maintenance',
                base: 'under-maintenance',
              },
              {
                menuValue: 'Under Construction',
                route: '/under-construction',
                base: 'under-construction',
              },
              {
                menuValue: 'API Keys',
                route: '/api-keys',
                base: 'api-keys',
              },
              {
                menuValue: 'Privacy Policy',
                route: '/privacy-policy',
                base: 'privacy-policy',
              },
              {
                menuValue: 'Terms & Conditions',
                route: '/terms-condition',
                base: 'terms-condition',
              },
              {
                menuValue: 'Pages',
                route: '/pages',
                base: 'pages',
              },
              {
                menuValue: 'Blogs',
                base: 'blogs',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'All Blogs',
                    route: '/blog/blogs',
                    base: 'blogs',
                  },
                  {
                    menuValue: 'Categories',
                    route: '/blog/blog-categories',
                    base: 'blog-categories',
                  },
                  {
                    menuValue: 'Comments',
                    route: '/blog/blog-comments',
                    base: 'blog-comments',
                  },
                  {
                    menuValue: 'Blog Tags',
                    route: '/blog/blog-tags',
                    base: 'blog-tags',
                  },
                ],
              },
              {
                menuValue: 'Locations',
                base: 'locations',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Countries',
                    route: '/locations/countries',
                    base: 'countries',
                  },
                  {
                    menuValue: 'States',
                    route: '/locations/states',
                    base: 'states',
                  },
                  {
                    menuValue: 'Cities',
                    route: '/locations/cities',
                    base: 'cities',
                  },
                ],
              },
              {
                menuValue: 'Testimonials',
                route: '/testimonials',
                base: 'testimonials',
              },
              {
                menuValue: 'FAQ’S',
                route: '/faq',
                base: 'faq',
              },
              {
                menuValue: 'Login',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Cover',
                    route: '/login',
                  },
                  {
                    menuValue: 'Illustration',
                    route: '/login-2',
                  },
                  {
                    menuValue: 'Basic',
                    route: '/login-3',
                  },
                ],
              },
              {
                menuValue: 'Register',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Cover',
                    route: '/register',
                  },
                  {
                    menuValue: 'Illustration',
                    route: '/register-2',
                  },
                  {
                    menuValue: 'Basic',
                    route: '/register-3',
                  },
                ],
              },
              {
                menuValue: 'Forgot Password',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Cover',
                    route: '/forgot-password',
                  },
                  {
                    menuValue: 'Illustration',
                    route: '/forgot-password-2',
                  },
                  {
                    menuValue: 'Basic',
                    route: '/forgot-password-3',
                  },
                ],
              },
              {
                menuValue: 'Reset Password',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Cover',
                    route: '/reset-password',
                  },
                  {
                    menuValue: 'Illustration',
                    route: '/reset-password-2',
                  },
                  {
                    menuValue: 'Basic',
                    route: '/reset-password-3',
                  },
                ],
              },
              {
                menuValue: 'Email Verification',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Cover',
                    route: '/email-verification',
                  },
                  {
                    menuValue: 'Illustration',
                    route: '/email-verification-2',
                  },
                  {
                    menuValue: 'Basic',
                    route: '/email-verification-3',
                  },
                ],
              },
              {
                menuValue: '2 Step Verification',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Cover',
                    route: '/two-step-verification',
                  },
                  {
                    menuValue: 'Illustration',
                    route: '/two-step-verification-2',
                  },
                  {
                    menuValue: 'Basic',
                    route: '/two-step-verification-3',
                  },
                ],
              },
              {
                menuValue: 'Lock Screen',
                route: '/lock-screen',
              },
              {
                menuValue: '404 Error',
                route: '/error-404',
              },
              {
                menuValue: '500 Error',
                route: '/error-500',
              },
              {
                menuValue: 'Base UI',
                base: 'baseui',
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Alerts',
                    route: routes.alert,
                    base: 'ui-alerts',
                  },
                  {
                    menuValue: 'Accordions',
                    route: routes.accordion,
                    base: 'ui-accordion',
                  },
                  { menuValue: 'Avatar', route: routes.avatar, base: 'ui-avatar' },
                  { menuValue: 'Badges', route: routes.badges, base: 'ui-badges' },
                  { menuValue: 'Borders', route: routes.border, base: 'ui-borders' },
                  {
                    menuValue: 'Buttons',
                    route: routes.button,
                    base: 'ui-buttons',
                  },
                  {
                    menuValue: 'Button Group',
                    route: routes.buttonGroup,
                    base: 'ui-buttons-group',
                  },
                  {
                    menuValue: 'Breadcrumb',
                    route: routes.breadcrums,
                    base: 'ui-breadcrumb',
                  },
                  { menuValue: 'Cards', route: routes.cards, base: 'ui-cards' },
                  {
                    menuValue: 'Carousel',
                    route: routes.carousel,
                    base: 'ui-carousel',
                  },
                  {
                    menuValue: 'Colors',
                    route: routes.colors,
                    base: 'ui-colors',
                  },
                  {
                    menuValue: 'Dropdowns',
                    route: routes.dropdowns,
                    base: 'ui-dropdowns',
                  },
                  { menuValue: 'Grid', route: routes.grid, base: 'ui-grid' },
                  { menuValue: 'Images', route: routes.images, base: 'ui-images' },
                  {
                    menuValue: 'Lightbox',
                    route: routes.lightbox,
                    base: 'ui-lightbox',
                  },
                  { menuValue: 'Media', route: routes.media, base: 'ui-media' },
                  { menuValue: 'Modals', route: routes.modals, base: 'ui-modals' },
                  {
                    menuValue: 'Offcanvas',
                    route: routes.offcanvas,
                    base: 'ui-offcanvas',
                  },
                  {
                    menuValue: 'Pagination',
                    route: routes.pagination,
                    base: 'ui-pagination',
                  },
  
                  {
                    menuValue: 'Progress Bars',
                    route: routes.progress,
                    base: 'ui-progress',
                  },
                  {
                    menuValue: 'Placeholders',
                    route: routes.placeholder,
                    base: 'ui-placeholders',
                  },
  
                  {
                    menuValue: 'Spinner',
                    route: routes.spinner,
                    base: 'ui-spinner',
                  },
                  {
                    menuValue: 'Range Slider',
                    route: routes.rangeSlider,
                    base: 'ui-rangeslider',
                  },
  
                  { menuValue: 'Toasts', route: routes.toasts, base: 'ui-toasts' },
                  {
                    menuValue: 'Tooltip',
                    route: routes.tooltip,
                    base: 'ui-tooltips',
                  },
                  {
                    menuValue: 'Typography',
                    route: routes.typography,
                    base: 'ui-typography',
                  },
                  { menuValue: 'Videos', route: routes.video, base: 'ui-video' },
                ],
              },
              {
                menuValue: 'Advanced UI',
                base: 'advancedui',
                customSubmenuTwo: true,
                subMenusTwo: [
                  { menuValue: 'Ribbon', route: routes.ribbon, base: 'ui-ribbon' },
                  {
                    menuValue: 'Clipboard',
                    route: routes.clipboard,
                    base: 'ui-clipboard',
                  },
                  {
                    menuValue: 'Drag & Drop',
                    route: routes.dragandDrop,
                    base: 'ui-drag-drop',
                  },
                  {
                    menuValue: 'Rating',
                    route: routes.rating,
                    base: 'ui-rating',
                  },
                  {
                    menuValue: 'Text Editor',
                    route: routes.textEditor,
                    base: 'ui-text-editor',
                  },
                  {
                    menuValue: 'Counter',
                    route: routes.counter,
                    base: 'ui-counter',
                  },
                  {
                    menuValue: 'Scrollbar',
                    route: routes.scrollBar,
                    base: 'ui-scrollbar',
                  },
                  {
                    menuValue: 'Timeline',
                    route: routes.timeLine,
                    base: 'ui-timeline',
                  },
                ],
              },
              {
                menuValue: 'Forms',
                customSubmenuTwo: true,
                base: 'forms',
                base1: 'form-elements',
                base2: 'form-layouts',
                subMenusTwo: [
                  {
                    menuValue: 'Basic Inputs',
                    route: routes.basicInput,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-basic-inputs',
                  },
                  {
                    menuValue: 'Checkbox & Radios',
                    route: routes.checkboxandRadion,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-checkbox-radios',
  
                  },
                  {
                    menuValue: 'Input Groups',
                    route: routes.inputGroup,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-input-groups',
  
                  },
                  {
                    menuValue: 'Grid & Gutters',
                    route: routes.gridandGutters,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-grid-gutters',
                  },
                  {
                    menuValue: 'Form Select',
                    route: routes.formSelect,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-select',
  
                  },
                  {
                    menuValue: 'Input Masks',
                    route: routes.formMask,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-mask',
                  },
                  {
                    menuValue: 'File Uploads',
                    route: routes.fileUpload,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-fileupload',
                  },
                  {
                    menuValue: 'Horizontal Form',
                    route: routes.horizontalForm,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-horizontal'
                  },
                  {
                    menuValue: 'Vertical Form',
                    route: routes.verticalForm,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-vertical',
                  },
                  {
                    menuValue: 'Floating Labels',
                    route: routes.floatingLable,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-floating-labels',
  
                  },
                  {
                    menuValue: 'Form Validation',
                    route: routes.formValidation,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base: 'form-validation',
                  },
  
                ],
              },
              {
                menuValue: 'Tables',
                customSubmenuTwo: true,
                base: 'tables',
                subMenusTwo: [
                  {
                    menuValue: 'Basic Tables',
                    route: routes.tablesBasic,
                    base: 'tables-basic',
                  },
                  {
                    menuValue: 'Data Tables',
                    route: routes.dataTables,
                    base: 'data-basic',
                  },
                ],
              },
              {
                menuValue: 'Charts',
                customSubmenuTwo: true,
                base: 'charts',
                subMenusTwo: [
                  {
                    menuValue: 'Apex Charts',
                    route: routes.apexChart,
                    base: 'apex-charts',
                  },
                  {
                    label: 'Prime Charts',
                    route: routes.primeChart,
                    base: 'prime-charts',
                  },
                  {
                    label: 'Chart JS',
                    route: routes.chartJs,
                    base: 'chart-js',
                  },
                ],
              },
              {
                menuValue: 'Icons',
                customSubmenuTwo: true,
                base: 'icon',
                subMenusTwo: [
                  {
                    menuValue: 'Fontawesome Icons',
                    route: routes.fontawesome,
                    base: 'icon-fontawesome',
                  },
                  {
                    menuValue: 'Feather Icons',
                    route: routes.featherIcons,
                    base: 'icon-feather',
                  },
                  {
                    menuValue: 'Ionic Icons',
                    route: routes.iconicIcon,
                    base: 'icon-ionic',
                  },
                  {
                    menuValue: 'Material Icons',
                    route: routes.materialIcon,
                    base: 'icon-material',
                  },
                  { menuValue: 'pe7 Icons', route: routes.pe7icon, base: 'icon-pe7' },
                  {
                    menuValue: 'Simpleline Icons',
                    route: routes.simpleLineIcon,
                    base: 'icon-simple-line',
                  },
                  {
                    menuValue: 'Themify Icons',
                    route: routes.themifyIcon,
                    base: 'icon-themify',
                  },
                  {
                    menuValue: 'Weather Icons',
                    route: routes.weatherIcon,
                    base: 'icon-weather',
                  },
                  {
                    menuValue: 'Typicon Icons',
                    route: routes.typicon,
                    base: 'icon-typicon',
                  },
                  { menuValue: 'Flag Icons', route: routes.FlagIcons, base: 'icon-flag' },
                ],
              },
            ],
          },
        ],
      },
];