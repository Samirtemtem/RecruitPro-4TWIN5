import { all_routes } from "../../../feature-module/router/all_routes";
const routes = all_routes;

export const TowColData = [
    {
        tittle: 'Main',
        icon: 'airplay',
        showAsTab: true,
        showMyTab:true,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Dashboard',
            route: routes.adminDashboard,
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'smart-home',
            base: 'dashboard',
            materialicons: 'home',
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
            menuValue: 'Application',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'layout-grid-add',
            base: 'application',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Chat',
                route: routes.chat,
                base:'Application',
                base2: 'Chat',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Calls',
                customSubmenuTwo: true,
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.calendar,
                base: 'calls',
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
                    route: routes.voiceCall,
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
                base:'calender'
              },
  
              {
                menuValue: 'Email',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.email,
                customSubmenuTwo: false,
                base:'email'
              },
              {
                menuValue: 'To Do',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.todo,
                customSubmenuTwo: false,
                base:'todo'
              },
              {
                menuValue: 'Notes',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.notes,
                customSubmenuTwo: false,
                base:'notes'
              },
              {
                menuValue: 'File Manager',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.fileManager,
                customSubmenuTwo: false,
                base:'file-manager'
              },
              {
                menuValue: 'Kanban',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.kanbanView,
                customSubmenuTwo: false,
                base:'kanban-view'
              },
              {
                menuValue: 'Invoices',
                hasSubRoute: true,
                showSubRoute: false,
                route: routes.invoice,
                customSubmenuTwo: false,
                base:'invoices'
              },
            ],
          },
          {
            menuValue: 'Super Admin',
            route: routes.superAdminDashboard,
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'user-star',
            base: 'super-admin',
            materialicons: 'home',
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
                base: 'deals',
              },
              {
                menuValue: 'Packages',
                route: routes.superAdminPackages,
                base: 'leads',
              },
              {
                menuValue: 'Domain',
                route: routes.superAdminDomain,
                base: 'leads',
              },
              {
                menuValue: 'Purchase Transaction',
                route: routes.superAdminPurchaseTransaction,
                base: 'leads',
              },
            ],
          },
        ],
      },
      {
        tittle: 'Layout',
        icon: 'file',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Layouts',
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'layout-board-split',
            base: 'layout-horizontal',
            base2: 'layout-two-column',
            materialicons: 'home',
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
                base: 'crm',
              },
              {
                menuValue: 'Modern',
                route: routes.Modern,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
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
                base: 'crm',
              },
              {
                menuValue: 'Horizontal Single',
                route: routes.HorizontalSingle,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'Horizontal Overlay',
                route: routes.HorizontalOverlay,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'Horizontal Box',
                route: routes.HorizontalBox,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'Menu Aside',
                route: routes.MenuAside,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'Transparent',
                route: routes.Transparent,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'Without Header',
                route: routes.WithoutHeader,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'RTL',
                route: routes.RTL,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
              {
                menuValue: 'Dark',
                route: routes.Dark,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'crm',
              },
            ],
          },
        ],
      },
      {
        tittle: 'Projects',
        icon: 'layers',
        showAsTab: false,
        separateRoute: false,
        base: 'projects',
        menu: [
          {
            menuValue: 'Projects',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'users-group',
            base: 'client',
            base2:'projects',
            materialicons: 'dashboard',
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
            ],
          },
        ],
      },
      {
        tittle: 'Crm',
        icon: 'file',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Crm',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'user-shield',
            base: 'crm',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Contacts',
                route: routes.contactList,
                base: 'contact',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Companies',
                route: routes.companiesGrid,
                base: 'company',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Deals',
                route: routes.dealsList,
                base: 'deals',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Leads',
                route: routes.leadsList,
                base: 'leads',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Pipeline',
                route: routes.pipeline,
                base: 'pipeline',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Analytics',
                route: routes.analytics,
                base: 'analytics',
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Activities',
                route: routes.activities,
                base: 'activities',
                customSubmenuTwo: false,
              },
            ],
          },
        ],
      },
      {
        tittle: 'Hrm',
        icon: 'file',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Hrm',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'user',
            base: 'employees',
            base2:'tickets',
            base3:'holidays',
            base4: 'attendance',
            base5: 'performance',
            base7: 'trainings',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Employees',
                route: routes.employeeList,
                hasSubRoute: true,
                customSubmenuTwo: true,
                showSubRoute: false,
                base: 'employees',
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
                route: routes.ticketList,
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'tickets',
                subMenusTwo: [
                  {
                    menuValue: 'Tickets',
                    route: routes.ticketList,
                    base: 'tickets',
                    base2:'ticket-list'
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
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Attendance',
                route: routes.attendanceadmin,
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'attendance',
                subMenusTwo: [
                  {
                    menuValue: 'Leaves (Admin)',
                    route: routes.leaveadmin,
                    hasSubRoute: false,
                    showSubRoute: false,
                    base:'leave-admin'
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
                    customSubmenuTwo: false,
                  },
                  {
                    menuValue: 'Attendance (Employee)',
                    route: routes.attendanceemployee,
                    base: 'attendance-employee',
                    customSubmenuTwo: false,
                  },
  
                  {
                    menuValue: 'Timesheet',
                    route: routes.timesheet,
                    base: 'timesheet',
                    customSubmenuTwo: false,
                  },
                  {
                    menuValue: 'Shift & Schedule',
                    route: routes.scheduletiming,
                    base: 'shift-schedule',
                    customSubmenuTwo: false,
                  },
                  {
                    menuValue: 'Overtime',
                    route: routes.overtime,
                    base: 'overtime',
                    customSubmenuTwo: false,
                  },
                ],
              },
              {
                menuValue: 'Performance',
                route: routes.performanceIndicator,
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'performance',
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
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'trainings',
                subMenusTwo: [
                  {
                    menuValue: 'Training List',
                    route: routes.trainingList,
                    base: 'training-list',
                  },
                  {
                    menuValue: 'Trainers',
                    route: routes.trainers,
                    base: 'trainers',
                  },
                  {
                    menuValue: 'Training Type',
                    route: routes.trainingType,
                    base: 'types',
                  },
                ],
              },
              {
                menuValue: 'Promotion',
                route: routes.promotion,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'promotion',
              },
              {
                menuValue: 'Resignation',
                route: routes.resignation,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'resignation',
              },
              {
                menuValue: 'Termination',
                route: routes.termination,
                hasSubRoute: false,
                showSubRoute: false,
                base: 'termination',
              },
            ],
          },
        ],
      },
  
      {
        tittle: 'Finance & Accounts',
        icon: 'file',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Finance & Accounts',
            route: routes.pages,
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'shopping-cart-dollar',
            base: 'sales',
            base2:'accounting',
            base3:'payroll',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Sales',
                base: 'sales',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Estimates',
                    route: routes.estimate,
                    base: '/sales/estimates',
                  },
                  {
                    menuValue: 'Invoices',
                    route: routes.invoice,
                    base: '/sales/invoices',
                  },
                  {
                    menuValue: 'Payments',
                    route: routes.payments,
                    base: '/sales/payments',
                  },
                  {
                    menuValue: 'Expenses',
                    route: routes.expenses,
                    base: '/sales/expenses',
                  },
                  {
                    menuValue: 'Provident Fund',
                    route: routes.providentfund,
                    base: '/sales/provident-fund',
                  },
                  {
                    menuValue: 'Taxes',
                    route: routes.taxes,
                    base: '/sales/taxes',
                  },
                ],
              },
              {
                menuValue: 'Accounting',
                base: 'accounting',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Categories',
                    route: routes.categories,
                    base: '/accounting/categories',
                  },
                  {
                    menuValue: 'Budgets',
                    route: routes.budgets,
                    base: '/accounting/budgets',
                  },
                  {
                    menuValue: 'Budget Expenses',
                    route: routes.budgetexpenses,
                    base: '/accounting/budget-expenses',
                  },
                  {
                    menuValue: 'Budget Revenues',
                    route: routes.budgetrevenues,
                    base: '/accounting/budget-revenues',
                  },
                ],
              },
              {
                menuValue: 'Payroll',
                base: 'payroll',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Employee Salary',
                    route: routes.employeesalary,
                    base: '/payroll/employee-salary',
                  },
                  {
                    menuValue: 'Payslip',
                    route: routes.payslip,
                    base: '/payroll/payslip',
                  },
                  {
                    menuValue: 'Payroll Items',
                    route: routes.payrollAddition,
                    base: '/payroll/payroll',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tittle: 'Administration',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Administration',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'cash',
            base: 'assets',
            base2:'support',
            base3:'user-management',
            base4:'reports',
            base5:'settings',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Assets',
                base: 'asset',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Assets',
                    route: routes.assetList,
                    base: '/asset/assets',
                  },
                  {
                    menuValue: 'Asset Categories',
                    route: routes.assetCategories,
                    base: '/asset/asset-categories',
                  },
                ],
              },
              {
                menuValue: 'Help & Supports',
                base: 'supports',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Knowledge Base',
                    route: routes.knowledgebase,
                    base: '/supports/knowledgebase',
                  },
                  {
                    menuValue: 'Activities',
                    route: routes.activities,
                    base: '/supports/activities',
                  },
                ],
              },
              {
                menuValue: 'User Management',
                base: 'user-management',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Users',
                    route: routes.manageusers,
                    base: '/user-management/users',
                  },
                  {
                    menuValue: 'Roles & Permissions',
                    route: routes.rolesPermissions,
                    base: '/user-management/roles-permissions',
                  },
                ],
              },
              {
                menuValue: 'Reports',
                base: 'reports',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                subMenusTwo: [
                  {
                    menuValue: 'Expense Report',
                    route: routes.expensesreport,
                    base: '/reports/expenses-report',
                  },
                  {
                    menuValue: 'Invoice Report',
                    route: routes.invoicereport,
                    base: '/reports/invoice-report',
                  },
                  {
                    menuValue: 'Payment Report',
                    route: routes.paymentreport,
                    base: '/reports/payment-report',
                  },
                  {
                    menuValue: 'Project Report',
                    route: routes.projectreport,
                    base: '/reports/project-report',
                  },
                  {
                    menuValue: 'Task Report',
                    route: routes.taskreport,
                    base: '/reports/task-report',
                  },
                  {
                    menuValue: 'User Report',
                    route: routes.userreport,
                    base: '/reports/user-report',
                  },
                  {
                    menuValue: 'Employee Report',
                    route: routes.employeereport,
                    base: '/reports/employee-report',
                  },
                  {
                    menuValue: 'Payslip Report',
                    route: routes.payslipreport,
                    base: '/reports/payslip-report',
                  },
                  {
                    menuValue: 'Attendance Report',
                    route: routes.attendancereport,
                    base: '/reports/attendance-report',
                  },
                  {
                    menuValue: 'Leave Report',
                    route: routes.leavereport,
                    base: '/reports/leave-report',
                  },
                  {
                    menuValue: 'Daily Report',
                    route: routes.dailyreport,
                    base: '/reports/daily-report',
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
        ],
      },
      {
        tittle: 'Content',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Content',
            route: 'routes.apps',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'license',
            base: 'pages',
            base2: 'blogs',
            base3: 'locations',
            base4:'testimonials',
            base5: 'faq',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Pages',
                route: routes.pages,
                base: 'pages',
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
              {
                menuValue: 'Blogs',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'blog',
                subMenusTwo: [
                  {
                    menuValue: 'All Blogs',
                    route: routes.blogs,
                    base: 'All Blogs',
                  },
                  {
                    menuValue: 'Categories',
                    route: routes.blogCategories,
                    base: 'Categories',
                  },
                  {
                    menuValue: 'Comments',
                    route: routes.blogComments,
                    base: 'Comments',
                  },
                  {
                    menuValue: 'Blog Tags',
                    route: routes.blogTags,
                    base: 'Blog Tags',
                  },
                ],
              },
              {
                menuValue: 'Locations',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'location',
                subMenusTwo: [
                  {
                    menuValue: 'Countries',
                    route: routes.countries,
                    base: '/location/countries',
                  },
                  {
                    menuValue: 'States',
                    route: routes.states,
                    base: '/location/states',
                  },
                  {
                    menuValue: 'Cities',
                    route: routes.cities,
                    base: '/location/cities',
                  },
                ],
              },
              {
                menuValue: 'Testimonials',
                route: routes.testimonials,
                base: 'testimonials',
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
              {
                menuValue: 'FAQ’S',
                route: routes.faq,
                base: 'faq',
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
            ],
          },
        ],
      },
      {
        tittle: 'Pages',
        showAsTab: false,
        showMyTab:true,
        icon: 'airplay',
        separateRoute: false,
        menu: [
          {
            menuValue: 'Pages',
            hasSubRoute: true,
            showSubRoute: false,
            icon: 'page-break',
            base: 'starter',
            base2: 'profile',
            base3: 'gallery',
            base4: 'search-result',
            base5: 'timeline',
            base7: 'pricing',
            base8: 'api-keys',
            base9: 'privacy-policy',
            base10: 'terms-condition',
            materialicons: 'dashboard',
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
            ],
          },
        ],
      },
      {
        tittle: 'Authentication',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'Authentication',
            route: '',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'lock-check',
            base: 'apps',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Login',
                hasSubRoute: true,
                showSubRoute: false,
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
                hasSubRoute: true,
                showSubRoute: false,
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
                hasSubRoute: true,
                showSubRoute: false,
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
                hasSubRoute: true,
                showSubRoute: false,
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
                hasSubRoute: true,
                showSubRoute: false,
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
                hasSubRoute: true,
                showSubRoute: false,
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
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
              {
                menuValue: '404 Error',
                route: '/error-404',
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
              {
                menuValue: '500 Error',
                route: '/error-500',
                hasSubRoute: false,
                showSubRoute: false,
                customSubmenuTwo: false,
              },
            ],
          },
        ],
      },
      {
        tittle: 'UI Interface',
        icon: 'file',
        showAsTab: false,
        separateRoute: false,
        menu: [
          {
            menuValue: 'UI Interface',
            route: '',
            hasSubRouteTwo: true,
            showSubRoute: false,
            icon: 'ux-circle',
            base: 'base-ui',
            base2:'advanced-ui',
            base3:'charts',
            base4:'icon',
            base5:'forms',
            base7:'table',
            materialicons: 'dashboard',
            subMenus: [
              {
                menuValue: 'Base UI',
                hasSubRoute: true,
                showSubRoute: false,
                customSubmenuTwo: true,
                base: 'base-ui',
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
                menuValue: 'Advanced Ui',
                hasSubRoute: true,
                showSubRoute: false,
                base: 'advanced-ui',
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
                menuValue: 'Charts',
                hasSubRoute: true,
                showSubRoute: false,
                base: 'charts',
                customSubmenuTwo: true,
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
                hasSubRoute: true,
                showSubRoute: false,
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
              {
                menuValue: 'Forms',
                customSubmenuTwo: true,
                base: 'forms',
                showSubRoute: false,
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
                route: routes.tablesBasic,
                hasSubRoute: true,
                showSubRoute: false,
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
            ],
          },
        ],
      },
      
];