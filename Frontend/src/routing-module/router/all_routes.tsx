
export const all_routes = {

  // main
  //main: "/index",
  // main page
  IndexPage: "/index",

  // home page menu 
  AboutUs: "/AboutUs",
  Contact: "/Contact",
  Terms: "/Terms",

  // Other sections for the front for landing page
  Home: "/home",
  About: "/about",
  AppSection: "/app-section",
  AuthModal: "/auth-modal",
  Blog: "/blog",
  CallToAction: "/call-to-action",
  Footer: "/footer",
  Funfact: "/funfact",
  Header: "/header",
  JobCategorie: "/job-categorie",
  JobFeatured: "/job-featured",
  JobSearchBanner: "/job-search-banner",
  PartnerSlider: "/partner-slider",
  Testimonial: "/testimonial",

  // Candidate Dashboard Routes
  candidatesDashboard: "/DashboardCandidate",
  candidatesMyProfile: "/candidates-dashboard/my-profile",
  candidatesMyResume: "/candidates-dashboard/my-resume",
  candidatesAppliedJobs: "/candidates-dashboard/applied-jobs",
  candidatesJobAlerts: "/candidates-dashboard/job-alerts",
  candidatesShortlistedJobs: "/candidates-dashboard/shortlisted-jobs",
  candidatesCvManager: "/candidates-dashboard/cv-manager",
  candidatesPackages: "/candidates-dashboard/packages",
  candidatesMessages: "/candidates-dashboard/messages",
  candidatesChangePassword: "/candidates-dashboard/change-password",


  // job listing routes
  CallToActions: "/call-to-actions",
  Categories: "/categories",
  DatePosted: "/date-posted",
  DestinationRangeSlider: "/destination-range-slider",
  ExperienceLevel: "/experience-level",
  JobSelect: "/job-select",
  JobType: "/job-type",
  ListingShowing: "/listing-showing",
  LocationBox: "/location-box",
  Pagination: "/pagination",
  SalaryRangeSlider: "/salary-range-slider",
  SearchBox: "/search-box",
  Tag: "/tag",
 // MapJobFinder:"/MapJobFinder",
  JobListFront:"/JobListFront",

  DashboardCandidate: "/DashboardCandidate",


  // dashboard routes
  adminDashboard: "/adminDashboard",
  UserHome: "/UserHome",

  //profile routes
  profile: "/profile",

  // public routes
  LoginUser : "/LoginUser",
  register : "/register",
  VerifyEmail: "/VerifyEmail",
  



  // auth routes
  forgotPassword: "/forgotpassword",
  resetPassword: "/reset-password",
  resetPasswordSuccess: "/successPasswordSuccess",
  SocialAuthHandler : "/SocialAuthHandler",
  TwostepVerification: "/2FA",


  /// dump
  employeeDashboard: "/employeeDashboard",
  leadsDashboard: "/leads-dashboard",
  dealsDashboard: "/deals-dashboard",

  //Application routes
  chat: "/application/chat",
  voiceCall: "/application/voice-call",
  videoCall: "/application/video-call",
  outgoingCall: "/application/outgoing-call",
  incomingCall: "/application/incoming-call",
  callHistory: "/application/call-history",
  todo: "/application/todo",
  TodoList: "/application/todo-list",
  email: "/application/email",
  EmailReply: "/application/email-reply",
  audioCall: "/application/audio-call",
  fileManager: "/application/file-manager",
  socialFeed: "/application/social-feed",
  kanbanView: "/application/kanban-view",
  invoice: "/application/invoices",

  //super admin module
  superAdminDashboard: "/super-admin/dashboard",
  superAdminCompanies: "/super-admin/companies",
  superAdminSubscriptions: "/super-admin/subscription",
  superAdminPackages: "/super-admin/package",
  superAdminPackagesGrid: "/super-admin/package-grid",
  superAdminDomain: "/super-admin/domain",
  superAdminPurchaseTransaction: "/super-admin/purchase-transaction",

  calendar: "/calendar",
  dataTables: "/data-tables",
  tablesBasic: "/tables-basic",
  notes: "/notes",




  //page module
  starter: "/starter",
  //profile: "/pages/profile",
  gallery: "/gallery",
  searchresult: "/search-result",
  timeline: "/timeline",
  pricing: "/pricing",
  comingSoon: "/coming-soon",
  underMaintenance: "/under-maintenance",
  underConstruction: "/under-construction",
  error404: "/error-404",
  error500: "/error-500",
  apikey: "/api-keys",
  privacyPolicy: "/privacy-policy",
  termscondition: "/terms-condition",

  // auth routes routes
  login: "/login",
  login2: "/login-2",
  login3: "/login-3",
  register2: "/register-2",
  register3: "/register-3",
  forgotPassword2: "/forgot-password-2",
  forgotPassword3: "/forgot-password-3",
  //twoStepVerification: "/two-step-verification",
  twoStepVerification2: "/two-step-verification-2",
  twoStepVerification3: "/two-step-verification-3",
  success: "/success",
  emailVerification: "/email-verification",
  emailVerification2: "/email-verification-2",
  emailVerification3: "/email-verification-3",
  lockScreen: "/lock-screen",
 
  resetPassword2: "/reset-password-2",
  resetPassword3: "/reset-password-3",

  resetPasswordSuccess2: "/success-2",
  resetPasswordSuccess3: "/success-3",

  //ui routes
  alert: "/ui-alert",
  accordion: "/ui-accordion",
  avatar: "/ui-avatar",
  badges: "/ui-badges",
  border: "/ui-border",
  breadcrums: "/ui-breadcrums",
  button: "/ui-buttons",
  buttonGroup: "/ui-button-group",
  cards: "/ui-cards",
  carousel: "/ui-carousel",
  colors: "/ui-colors",
  dropdowns: "/ui-dropdowns",
  grid: "/ui-grid",
  images: "/ui-images",
  lightbox: "/ui-lightbox",
  media: "/ui-media",
  modals: "/ui-modals",
  navTabs: "/ui-navtabs",
  offcanvas: "/ui-offcanvas",
  pagination: "/ui-pagination",
  placeholder: "/ui-placeholder",
  popover: "/ui-popover",
  progress: "/ui-progress",
  rangeSlider: "/ui-rangeslider",
  spinner: "/ui-spinner",
  sweetalert: "/sweetalert",
  toasts: "/ui-toasts",
  tooltip: "/ui-tooltip",
  typography: "/ui-typography",
  video: "/ui-video",
  clipboard: "/ui-clipboard",
  counter: "/ui-counter",
  dragandDrop: "/ui-drag-drop",
  rating: "/ui-rating",
  ribbon: "/ui-ribbon",
  stickyNotes: "/ui-sticky-notes",
  textEditor: "/ui-text-editor",
  timeLine: "/ui-timeline",
  scrollBar: "/ui-scrollbar",
  apexChart: "/ui-apexchart",
  primeChart: "/ui-prime-chart",
  chartJs: "/ui-chart-js",

  chart: "/ui-chartjs",
  featherIcons: "/ui-feather-icon",
  falgIcons: "/ui-flag-icon",
  fontawesome: "/ui-fontawesome",
  materialIcon: "/ui-material-icon",
  pe7icon: "/ui-icon-pe7",
  simpleLineIcon: "/ui-simpleline",
  themifyIcon: "/ui-themify",
  typicon: "/ui-typicon",
  weatherIcon: "/ui-weather-icon",
  basicInput: "/forms-basic-input",
  checkboxandRadion: "/form-checkbox-radios",
  inputGroup: "/form-input-groups",
  gridandGutters: "/form-grid-gutters",
  formSelect: "/form-select",
  formMask: "/form-mask",
  fileUpload: "/form-fileupload",
  horizontalForm: "/form-horizontal",
  formPicker: "/form-pickers",
  verticalForm: "/form-vertical",
  floatingLable: "/form-floating-labels",
  formValidation: "/form-validation",
  reactSelect: "/select",
  formWizard: "/form-wizard",
  iconicIcon: "/icon-ionic",
  sortable: "/ui-sortable",
  swiperjs: "/ui-swiperjs",
  bootstrapIcons: "/icon-bootstrap",
  RemixIcons: "/icon-remix",
  FlagIcons: "/icon-flag",

  //base-ui
  uiAlerts: "/ui-alerts",
  uiAccordion: "/ui-accordion",
  uiAvatar: "/ui-avatar",
  uiBadges: "/ui-badges",
  uiBorders: "/ui-borders",
  uiButtons: "/ui-buttons",
  uiButtonsGroup: "/ui-buttons-group",
  uiBreadcrumb: "/ui-breadcrumb",
  uiCards: "/ui-cards",
  uiCarousel: "/ui-carousel",
  uiColor: "/ui-color",
  uiDropdowns: "ui-dropdowns",

  //Maps
  mapLeaflet: "/map-leaflet",




  // settings routes
  customFields: "/app-settings/custom-fields",
  invoiceSettings: "/app-settings/invoice-settings",

  currencies: "/financial-settings/currencies",
  paymentGateways: "/financial-settings/payment-gateways",
  taxRates: "/financial-settings/tax-rates", 

  schoolSettings: "/academic-settings/school-settings",
  religion: "/academic-settings/religion",

  connectedApps: "/general-settings/connected-apps",
  notificationssettings: "/general-settings/notifications-settings",
  profilesettings: "/general-settings/profile-settings",
  securitysettings: "/general-settings/security-settings",

  bussinessSettings : "/website-settings/bussiness-settings",
  seoSettings: "/website-settings/seo-settings",
  localizationSettings: "/website-settings/localization-settings",
  prefixes: "/website-settings/prefixes",
  preference: "/website-settings/preferences",
  appearance: "/website-settings/appearance",
  authenticationSettings: "/website-settings/authentication-settings",
  aiSettings: "/website-settings/ai-settings",

  salarySettings: "/app-settings/salary-settings",
  approvalSettings: "/app-settings/approval-settings",
  leaveType: "/app-settings/leave-type",

  banIpAddress: "/other-settings/ban-ip-address",
  customCss: "/other-settings/custom-css",
  customJs: "/other-settings/custom-js",
  cronjob: "/other-settings/cronjob",
  Cronjobschedule: "/other-settings/cronjob-schedule",
  storage: "/other-settings/storage-settings",
  backup: "/other-settings/backup",
  clearcache: "/other-settings/clear-cache",

  emailSettings: "/system-settings/email-settings",
  emailTemplates: "/system-settings/email-templates",
  gdprCookies: "/system-settings/gdpr-cookies",
  smsSettings: "/system-settings/sms-settings",
  smsTemplate: "/system-settings/sms-template",
  otpSettings: "/system-settings/otp-settings",
  maintenanceMode: "/system-settings/maintenance-mode",

  socialAuthentication: "/website-settings/social-authentication",
  companySettings: "/website-settings/company-settings",
  language: "/website-settings/language",
  addLanguage: "/website-settings/add-language",
  languageWeb: "/website-settings/language-web",
  localization: "/website-settings/localization",


  //content routes
  pages: "/content/pages",
  countries: "countries",
  states: "/content/states",
  cities: "/content/cities",
  testimonials: "testimonials",
  faq: "faq",





  // blog
  blogs: "blogs",
  blogCategories: "blog-categories",
  blogComments: "blog-comments",
  blogTags: "blog-tags",

  //userManagement routes
  deleteRequest: "/user-management/delete-request",
  rolesPermissions: "/user-management/roles-permissions",
  manageusers: "/user-management/manage-users",
  permissions: "/user-management/permissions",

  //support routes
  contactMessages: "/support/contact-messages",
  tickets: "/tickets/ticket-list",
  ticketGrid: "/tickets/ticket-grid",
  ticketList: "/support/ticket-list",
  ticketDetails: "/tickets/ticket-details",

  // Performance

  performanceIndicator: "/performance/performance-indicator",
  performanceReview: "/performance/performance-review",
  performanceAppraisal: "/preformance/performance-appraisal",
  goalTracking: "/performance/goal-tracking",
  goalType: "/performance/goal-type",

  // Training

  trainingList: "/training/training-list",
  trainers: "/training/trainers",
  trainingType: "/training/training-type",

  // membership routes
  membershipplan: "/membership-plans",
  membershipAddon: "/membership-addons",
  membershipTransaction: "/membership-transactions",



  layoutDefault: "/layout-default",
  layoutMini: "/layout-mini",
  layoutRtl: "/layout-rtl",
  layoutBox: "/layout-box",
  layoutDark: "/layout-dark",
  Horizontal: "/layout-horizontal",
  Detached: "/layout-detached",
  Hovered: "/layout-hovered",
  Boxed: "/layout-box",
  Modern: "/layout-modern",
  TwoColumn: "/layout-twocolumn",
  HorizontalSingle: "/layout-horizontal-single",
  HorizontalOverlay: "/layout-horizontal-overlay",
  HorizontalBox: "/layout-horizontal-box",
  MenuAside: "/layout-horizontal-sidemenu",
  Transparent: "/layout-transparent",
  WithoutHeader: "/layout-without-header",
  RTL: "/layout-rtl",
  Dark: "/layout-dark",

  // finance & accounts routes
  accountsIncome: "/accounts/accounts-income",
  accountsInvoices: "/accounts/accounts-invoices",
  accountsTransactions: "/accounts/accounts-transactions",
  expense: "/accounts/expense",
  expenseCategory: "/accounts/expense-category",
  
  addInvoice: "/accounts/add-invoice",
  editInvoice: "/accounts/edit-invoice",
  categories: "/accounting/categories",
  budgets: "/accounting/budgets",
  budgetexpenses: "/accounting/budgets-expenses",
  budgetrevenues: "accounting/budget-revenues",




  //crm

  clientgrid: "/clients-grid",
  clientlist: "/clients",
  clientdetils: "/clients-details",
  project: "/projects-grid",
  projectlist: "/projects",
  projectdetails: "/projects-details/:id",
  tasks: "/tasks",
  tasksdetails: "/task-details",
  taskboard: "/task-board",
  contactGrid: "/contact-grid",
  contactList: "/contact-list",
  contactDetails: "/contact-details",
  companiesGrid: "/companies-grid",
  companiesList: "/companies-list",
  companiesDetails: "/companies-details",
  dealsGrid: "/deals-grid",
  dealsList: "/deals-list",
  dealsDetails: "/deals-details",
  leadsList: "/leads-list",
  leadsGrid: "/leads-grid",
  leadsDetails: "/leads-details",
  pipeline: "/pipeline",
  analytics: "/analytics",
  activities: "/",

  //HRM
  employeeList: "/employees",
  employeeGrid: "/employees-grid",
  departments: "/departments",
  designations: "/designations",
  policy: "/policy",
  holidays: "/hrm/holidays",
  leaveadmin: "/leaves",
  leaveemployee: "/leaves-employee",
  leavesettings: "/leave-settings",
  attendanceadmin: "/attendance-admin",
  attendanceemployee: "/attendance-employee",
  timesheet: "/timesheets",
  scheduletiming: "/schedule-timing",
  overtime: "/overtime",
  promotion: "/promotion",
  resignation: "/resignation",
  termination: "/termination",
  // RECRUITMENT
  jobgrid: "/jobgrid",
  joblist: "/job-list",
  candidatesGrid: "/candidates-grid",
  candidateslist: "/candidates",
  candidateskanban: "/candidates-kanban",
  refferal: "/refferals",
  //FINANCE & ACCOUNTS
  estimate: "/estimates",
  invoices:"/invoices",
  addinvoice:"/add-invoices",
  editinvoice:"/edit-invoices",
  invoicesdetails:"/invoice-details",
  payments: "/payments",
  expenses: "/expenses",
  providentfund: "/provident-fund",
  taxes: "/taxes",
  invoiceDetails: "/invoice-details",
  employeesalary: "/employee-salary",
  payslip: "/payslip",
  payrollAddition: "/payroll",
  payrollOvertime: "/payroll-overtime",
  payrollDeduction: "/payroll-deduction",
  //ADMINISTRATION
  knowledgebase: "/knowledgebase",
  activity: "/activity",
  users: "/users",
  rolePermission: "/roles-permissions",
  permissionpage: "/permission",
  assetCategories: "/asset-categories",
  assetList: "/assets",
  //Report
  expensesreport: "/expenses-report",
  invoicereport: "/invoice-report",
  paymentreport: "/payment-report",
  projectreport: "/project-report",
  taskreport: "/task-report",
  userreport: "/user-report",
  employeereport: "/employee-report",
  employeedetails: "/employee-details",
  payslipreport: "/payslip-report",
  attendancereport: "/attendance-report",
  leavereport: "/leave-report",
  dailyreport: "/daily-report",



};
