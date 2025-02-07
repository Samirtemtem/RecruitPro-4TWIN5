import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Countries from "../content/location/countries";
import DataTable from "../tables/dataTable";
import BasicTable from "../tables/basicTable";
import DeleteRequest from "../userManagement/deleteRequest";
import Membershipplan from "../membership/membershipplan";
import MembershipAddon from "../membership/membershipaddon";
import Notes from "../application/notes";
import ComingSoon from "../pages/comingSoon";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import TwoStepVerification from "../auth/twoStepVerification/twoStepVerification";
import EmailVerification from "../auth/emailVerification/emailVerification";
import ResetPassword from "../auth/resetPassword/resetPassword";
import ForgotPassword from "../auth/forgotPassword/forgotPassword";
import Accordion from "../uiInterface/base-ui/accordion";
import Avatar from "../uiInterface/base-ui/avatar";
import Borders from "../uiInterface/base-ui/borders";
import Breadcrumb from "../uiInterface/base-ui/breadcrumb";
import Buttons from "../uiInterface/base-ui/buttons";
import ButtonsGroup from "../uiInterface/base-ui/buttonsgroup";
import Cards from "../uiInterface/base-ui/cards";
import Carousel from "../uiInterface/base-ui/carousel";
import Colors from "../uiInterface/base-ui/colors";
import Dropdowns from "../uiInterface/base-ui/dropdowns";
import Grid from "../uiInterface/base-ui/grid";
import Images from "../uiInterface/base-ui/images";
import Lightboxes from "../uiInterface/base-ui/lightbox";
import Media from "../uiInterface/base-ui/media";
import Modals from "../uiInterface/base-ui/modals";
import NavTabs from "../uiInterface/base-ui/navtabs";
import Offcanvas from "../uiInterface/base-ui/offcanvas";
import Pagination from "../uiInterface/base-ui/pagination";
import Popovers from "../uiInterface/base-ui/popover";
import RangeSlides from "../uiInterface/base-ui/rangeslider";
import Progress from "../uiInterface/base-ui/progress";
import Spinner from "../uiInterface/base-ui/spinner";
import Toasts from "../uiInterface/base-ui/toasts";
import Typography from "../uiInterface/base-ui/typography";
import Video from "../uiInterface/base-ui/video";
import Error404 from "../pages/error/error-404";
import Error500 from "../pages/error/error-500";
import UnderMaintenance from "../pages/underMaintenance";
import Email from "../application/email";
import Chat from "../application/chat";
import CallHistory from "../application/call/callHistory";
import FileManager from "../application/fileManager";
import MembershipTransaction from "../membership/membershiptrasaction";
import ClipBoard from "../uiInterface/advanced-ui/clipboard";
import Counter from "../uiInterface/advanced-ui/counter";
import DragAndDrop from "../uiInterface/advanced-ui/dragdrop";
import Rating from "../uiInterface/advanced-ui/rating";
import Stickynote from "../uiInterface/advanced-ui/stickynote";
import TextEditor from "../uiInterface/advanced-ui/texteditor";
import Timeline from "../uiInterface/advanced-ui/timeline";
import Scrollbar from "../uiInterface/advanced-ui/uiscrollbar";
import Apexchart from "../uiInterface/charts/apexcharts";
import FeatherIcons from "../uiInterface/icons/feathericon";
import FontawesomeIcons from "../uiInterface/icons/fontawesome";
import MaterialIcons from "../uiInterface/icons/materialicon";
import PE7Icons from "../uiInterface/icons/pe7icons";
import SimplelineIcons from "../uiInterface/icons/simplelineicon";
import ThemifyIcons from "../uiInterface/icons/themify";
import TypiconIcons from "../uiInterface/icons/typicons";
import WeatherIcons from "../uiInterface/icons/weathericons";
import BasicInputs from "../uiInterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../uiInterface/forms/formelements/checkbox-radios";
import InputGroup from "../uiInterface/forms/formelements/input-group";
import GridGutters from "../uiInterface/forms/formelements/grid-gutters";
import FormSelect from "../uiInterface/forms/formelements/form-select";
import FormMask from "../uiInterface/forms/formelements/form-mask";
import FileUpload from "../uiInterface/forms/formelements/fileupload";
import FormHorizontal from "../uiInterface/forms/formelements/layouts/form-horizontal";
import FormVertical from "../uiInterface/forms/formelements/layouts/form-vertical";
import FloatingLabel from "../uiInterface/forms/formelements/layouts/floating-label";
import FormValidation from "../uiInterface/forms/formelements/layouts/form-validation";
import FormSelect2 from "../uiInterface/forms/formelements/layouts/form-select2";
import FormWizard from "../uiInterface/forms/formelements/form-wizard";
import DataTables from "../uiInterface/table/data-tables";
import TablesBasic from "../uiInterface/table/tables-basic";
import IonicIcons from "../uiInterface/icons/ionicicons";
import Badges from "../uiInterface/base-ui/badges";
import Placeholder from "../uiInterface/base-ui/placeholder";
import Alert from "../uiInterface/base-ui/alert";
import Tooltips from "../uiInterface/base-ui/tooltips";
import Ribbon from "../uiInterface/advanced-ui/ribbon";
import AdminDashboard from "../mainMenu/adminDashboard";
import AlertUi from "../uiInterface/base-ui/alert-ui";

import Login2 from "../auth/login/login-2";
import Login3 from "../auth/login/login-3";
import ResetPassword2 from "../auth/resetPassword/resetPassword-2";
import ResetPassword3 from "../auth/resetPassword/resetPassword-3";
import TwoStepVerification2 from "../auth/twoStepVerification/twoStepVerification-2";
import TwoStepVerification3 from "../auth/twoStepVerification/twoStepVerification-3";
import Register2 from "../auth/register/register-2";
import Register3 from "../auth/register/register-3";
import RegisterWizard from "../../user-management/register-wizard";
import ForgotPassword2 from "../auth/forgotPassword/forgotPassword-2";
import ForgotPassword3 from "../auth/forgotPassword/forgotPassword-3";
import ResetPasswordSuccess from "../auth/resetPasswordSuccess/resetPasswordSuccess";
import ResetPasswordSuccess2 from "../auth/resetPasswordSuccess/resetPasswordSuccess-2";
import ResetPasswordSuccess3 from "../auth/resetPasswordSuccess/resetPasswordSuccess-3";

import RolesPermissions from "../userManagement/rolesPermissions";
import Permission from "../userManagement/permission";
import Manageusers from "../userManagement/manageusers";
import Profilesettings from "../settings/generalSettings/profile-settings";
import Securitysettings from "../settings/generalSettings/security-settings";
import Notificationssettings from "../settings/generalSettings/notifications-settings";
import ConnectedApps from "../settings/generalSettings/connected-apps";
import Bussinesssettings from "../settings/websiteSettings/bussiness-settings";
import Seosettings from "../settings/websiteSettings/seo-settings";
import CompanySettings from "../settings/websiteSettings/companySettings";
import Localizationsettings from "../settings/websiteSettings/localization-settings";
import Prefixes from "../settings/websiteSettings/prefixes";
import Preference from "../settings/websiteSettings/preferences";
import Authenticationsettings from "../settings/websiteSettings/authentication-settings";
import Languagesettings from "../settings/websiteSettings/language";
import InvoiceSettings from "../settings/appSettings/invoiceSettings";
import CustomFields from "../settings/appSettings/customFields";
import EmailSettings from "../settings/systemSettings/emailSettings";
import Emailtemplates from "../settings/systemSettings/email-templates";
import SmsSettings from "../settings/systemSettings/smsSettings";
import OtpSettings from "../settings/systemSettings/otp-settings";
import GdprCookies from "../settings/systemSettings/gdprCookies";
import PaymentGateways from "../settings/financialSettings/paymentGateways";
import TaxRates from "../settings/financialSettings/taxRates";
import Storage from "../settings/otherSettings/storage";
import BanIpAddress from "../settings/otherSettings/banIpaddress";
import BlogCategories from "../content/blog/blogCategories";
import BlogComments from "../content/blog/blogComments";
import BlogTags from "../content/blog/blogTags";
import Faq from "../content/faq";
import Cities from "../content/location/cities";
import States from "../content/location/states";
import Testimonials from "../content/testimonials";
import Profile from "../pages/profile";
import LockScreen from "../auth/lockScreen";
import EmailVerification2 from "../auth/emailVerification/emailVerification-2";
import EmailVerification3 from "../auth/emailVerification/emailVerification-3";
import EmployeeDashboard from "../mainMenu/employeeDashboard/employee-dashboard";
import LeadsDasboard from "../mainMenu/leadsDashboard";
import DealsDashboard from "../mainMenu/dealsDashboard";
import Leaflet from "../uiInterface/map/leaflet";
import BootstrapIcons from "../uiInterface/icons/bootstrapicons";
import RemixIcons from "../uiInterface/icons/remixIcons";
import FlagIcons from "../uiInterface/icons/flagicons";
import Swiperjs from "../uiInterface/base-ui/swiperjs";
import Sortable from "../uiInterface/base-ui/ui-sortable";
import PrimeReactChart from "../uiInterface/charts/prime-react-chart";
import ChartJSExample from "../uiInterface/charts/chartjs";
import FormPikers from "../uiInterface/forms/formelements/formpickers";
import VoiceCall from "../application/call/voiceCall";
import Videocallss from "../application/call/videocalls";
import OutgoingCalls from "../application/call/outgingcalls";
import IncomingCall from "../application/call/incomingcall";
import Calendars from "../mainMenu/apps/calendar";
import SocialFeed from "../application/socialfeed";
import KanbanView from "../application/kanbanView";
import Todo from "../application/todo/todo";
import TodoList from "../application/todo/todolist";
import StarterPage from "../pages/starter";
import SearchResult from "../pages/search-result";
import TimeLines from "../pages/timeline";
import Pricing from "../pages/pricing";
import ApiKeys from "../pages/api-keys";
import UnderConstruction from "../pages/underConstruction";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsCondition from "../pages/terms-condition";
import Gallery from "../pages/gallery";
import EmailReply from "../application/emailReply";
import Blogs from "../content/blog/blogs";
import Page from "../content/page";
import Assets from "../administration/asset";
import AssetsCategory from "../administration/asset-category";
import Knowledgebase from "../administration/help-support/knowledgebase";
import Activity from "../administration/help-support/activity";
import Users from "../administration/user-management/users";
import RolesPermission from "../administration/user-management/rolePermission";
import Categories from "../accounting/categories";
import Budgets from "../accounting/budgets";
import BudgetExpenses from "../accounting/budget-expenses";
import BudgetRevenues from "../accounting/budget-revenues";
import Appearance from "../settings/websiteSettings/appearance";
import SuperAdminDashboard from "../super-admin/dashboard";
import LayoutDemo from "../mainMenu/layout-dashoard";
import ExpensesReport from "../administration/reports/expensereport";
import InvoiceReport from "../administration/reports/invoicereport";
import PaymentReport from "../administration/reports/paymentreport";
import ProjectReport from "../administration/reports/projectreport";
import InvoiceDetails from "../sales/invoiceDetails";
import TaskReport from "../administration/reports/taskreport";
import UserReports from "../administration/reports/userreports";
import EmployeeReports from "../administration/reports/employeereports";
import EmployeeDetails from "../hrm/employees/employeedetails";
import PayslipReport from "../administration/reports/payslipreport";
import AttendanceReport from "../administration/reports/attendencereport";
import LeaveReport from "../administration/reports/leavereport";
import DailyReport from "../administration/reports/dailyreport";
import PermissionPage from "../administration/user-management/permissionpage";
import JobGrid from "../recruitment/jobs/jobgrid";
import JobList from "../recruitment/joblist/joblist";
import CandidateGrid from "../recruitment/candidates/candidategrid";
import CandidateKanban from "../recruitment/candidates/candidatekanban";
import CandidatesList from "../recruitment/candidates/candidatelist";
import RefferalList from "../recruitment/refferal/refferallist";
import ClienttGrid from "../projects/clinet/clienttgrid";
import ClientList from "../projects/clinet/clientlist";
import ClientDetails from "../projects/clinet/clientdetails";
import Project from "../projects/project/project";
import ProjectDetails from "../projects/project/projectdetails";
import ProjectList from "../projects/project/projectlist";
import Task from "../projects/task/task";
import TaskDetails from "../projects/task/taskdetails";
import TaskBoard from "../projects/task/task-board";
import Extimates from "../finance-accounts/sales/estimates";
import AddInvoice from "../finance-accounts/sales/add_invoices";
import EditInvoice from "../finance-accounts/payrool/payslip";
import Payments from "../finance-accounts/sales/payment";
import Expenses from "../finance-accounts/sales/expenses";
import ProvidentFund from "../finance-accounts/sales/provident_fund";
import Taxes from "../finance-accounts/sales/taxes";
import EmployeeSalary from "../finance-accounts/payrool/employee_salary";
import PaySlip from "../finance-accounts/payrool/payslip";
import PayRoll from "../finance-accounts/payrool/payroll";
import PayRollOvertime from "../finance-accounts/payrool/payrollOvertime";
import PayRollDeduction from "../finance-accounts/payrool/payrollDedution";
import Tickets from "../tickets/tickets";
import TicketGrid from "../tickets/tickets-grid";
import TicketDetails from "../tickets/ticket-details";
import PerformanceIndicator from "../performance/performanceIndicator";
import Aisettings from "../settings/websiteSettings/ai-settings";
import Salarysettings from "../settings/appSettings/salary-settings";
import Approvalsettings from "../settings/appSettings/approval-settings";
import LeaveType from "../settings/appSettings/leave-type";
import SmsTemplate from "../settings/systemSettings/sms-template";
import Maintenancemode from "../settings/systemSettings/maintenance-mode";
import Currencies from "../settings/financialSettings/currencies";
import Customcss from "../settings/otherSettings/custom-css";
import Customjs from "../settings/otherSettings/custom-js";
import Cronjob from "../settings/otherSettings/cronjob";
import Cronjobschedule from "../settings/otherSettings/cronjobSchedule";
import Backup from "../settings/otherSettings/backup";
import Clearcache from "../settings/otherSettings/clearCache";
import Languageweb from "../settings/websiteSettings/language-web";
import Addlanguage from "../settings/websiteSettings/add-language";
import EmployeeList from "../hrm/employees/employeesList";
import EmployeesGrid from "../hrm/employees/employeesGrid";
import Department from "../hrm/employees/deparment";
import Designations from "../hrm/employees/designations";
import Policy from "../hrm/employees/policy";
import CompaniesGrid from "../crm/companies/companiesGrid";
import ContactDetails from "../crm/contacts/contactDetails";
import ContactList from "../crm/contacts/contactList";
import ContactGrid from "../crm/contacts/contactGrid";
import CompaniesList from "../crm/companies/companiesList";
import CompaniesDetails from "../crm/companies/companiesDetails";
import LeadsGrid from "../crm/leads/leadsGrid";
import LeadsList from "../crm/leads/leadsList";
import LeadsDetails from "../crm/leads/leadsDetails";
import DealsGrid from "../crm/deals/dealsGrid";
import DealsList from "../crm/deals/dealsList";
import DealsDetails from "../crm/deals/dealsDetails";
import Pipeline from "../crm/pipeline/pipeline";
import Analytics from "../crm/analytics/analytics";
import Holidays from "../hrm/holidays";
import PerformanceReview from "../performance/performanceReview";
import PerformanceAppraisal from "../performance/performanceAppraisal";
import GoalTracking from "../performance/goalTracking";
import GoalType from "../performance/goalType";

import LeaveAdmin from "../hrm/attendance/leaves/leaveAdmin";
import LeaveEmployee from "../hrm/attendance/leaves/leaveEmployee";
import LeaveSettings from "../hrm/attendance/leaves/leavesettings";
import AttendanceAdmin from "../hrm/attendance/attendanceadmin";
import AttendanceEmployee from "../hrm/attendance/attendance_employee";
import TimeSheet from "../hrm/attendance/timesheet";
import ScheduleTiming from "../hrm/attendance/scheduletiming";
import OverTime from "../hrm/attendance/overtime";
import Companies from "../super-admin/companies";
import Subscription from "../super-admin/subscription";
import Packages from "../super-admin/packages/packagelist";
import PackageGrid from "../super-admin/packages/packagelist";
import TrainingType from "../training/trainingType";
import Domain from "../super-admin/domin";
import PurchaseTransaction from "../super-admin/purchase-transaction";
import Termination from "../hrm/termination";
import Resignation from "../hrm/resignation";
import Promotion from "../hrm/promotion";
import Trainers from "../training/trainers";
import TrainingList from "../training/trainingList";
import Invoices from "../finance-accounts/sales/invoices";
const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.employeeDashboard,
    element: <EmployeeDashboard />,
    route: Route,
  },
  {
    path: routes.leadsDashboard,
    element: <LeadsDasboard />,
    route: Route,
  },
  {
    path: routes.dealsDashboard,
    element: <DealsDashboard />,
    route: Route,
  },
  {
    path: routes.estimate,
    element: <Extimates />,
  },
  {
    path: routes.termination,
    element: <Termination />,
  },
  {
    path: routes.resignation,
    element: <Resignation />,
  },
  {
    path: routes.promotion,
    element: <Promotion />,
  },
  {
    path: routes.trainingType,
    element: <TrainingType />,
  },
  {
    path: routes.trainers,
    element: <Trainers />,
  },
  {
    path: routes.trainingList,
    element: <TrainingList />,
  },


  //Application
  {
    path: routes.chat,
    element: <Chat />,
    route: Route,
  },
  {
    path: routes.voiceCall,
    element: <VoiceCall />,
    route: Route,
  },

  {
    path: routes.videoCall,
    element: <Videocallss />,
    route: Route,
  },
  {
    path: routes.outgoingCall,
    element: <OutgoingCalls />,
    route: Route,
  },
  {
    path: routes.incomingCall,
    element: <IncomingCall />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },
  {
    path: routes.socialFeed,
    element: <SocialFeed />,
    route: Route,
  },
  {
    path: routes.kanbanView,
    element: <KanbanView />,
    route: Route,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.starter,
    element: <StarterPage />,
    route: Route,
  },
  {
    path: routes.calendar,
    element: <Calendars />,
    route: Route,
  },
  {
    path: routes.superAdminDashboard,
    element: <SuperAdminDashboard />,
    route: Route,
  },

  {
    path: routes.membershipplan,
    element: <Membershipplan />,
  },
  {
    path: routes.membershipAddon,
    element: <MembershipAddon />,
  },
  {
    path: routes.membershipTransaction,
    element: <MembershipTransaction />,
  },
  {
    path: routes.notes,
    element: <Notes />,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
    route: Route,
  },
  {
    path: routes.dataTables,
    element: <DataTable />,
    route: Route,
  },
  {
    path: routes.tablesBasic,
    element: <BasicTable />,
    route: Route,
  },

  {
    path: routes.deleteRequest,
    element: <DeleteRequest />,
    route: Route,
  },
  {
    path: routes.cities,
    element: <Cities />,
    route: Route,
  },

  {
    path: routes.accordion,
    element: <Accordion />,
    route: Route,
  },
  {
    path: routes.avatar,
    element: <Avatar />,
    route: Route,
  },
  {
    path: routes.badges,
    element: <Badges />,
    route: Route,
  },
  {
    path: routes.border,
    element: <Borders />,
    route: Route,
  },
  {
    path: routes.breadcrums,
    element: <Breadcrumb />,
    route: Route,
  },
  {
    path: routes.button,
    element: <Buttons />,
    route: Route,
  },
  {
    path: routes.buttonGroup,
    element: <ButtonsGroup />,
    route: Route,
  },
  {
    path: routes.cards,
    element: <Cards />,
    route: Route,
  },
  {
    path: routes.carousel,
    element: <Carousel />,
    route: Route,
  },
  {
    path: routes.colors,
    element: <Colors />,
    route: Route,
  },
  {
    path: routes.dropdowns,
    element: <Dropdowns />,
    route: Route,
  },
  {
    path: routes.grid,
    element: <Grid />,
    route: Route,
  },
  {
    path: routes.images,
    element: <Images />,
    route: Route,
  },
  {
    path: routes.lightbox,
    element: <Lightboxes />,
    route: Route,
  },
  {
    path: routes.media,
    element: <Media />,
    route: Route,
  },
  {
    path: routes.modals,
    element: <Modals />,
    route: Route,
  },
  {
    path: routes.navTabs,
    element: <NavTabs />,
    route: Route,
  },
  {
    path: routes.offcanvas,
    element: <Offcanvas />,
    route: Route,
  },
  {
    path: routes.pagination,
    element: <Pagination />,
    route: Route,
  },
  {
    path: routes.popover,
    element: <Popovers />,
    route: Route,
  },
  {
    path: routes.rangeSlider,
    element: <RangeSlides />,
    route: Route,
  },
  {
    path: routes.progress,
    element: <Progress />,
    route: Route,
  },
  {
    path: routes.spinner,
    element: <Spinner />,
    route: Route,
  },

  {
    path: routes.typography,
    element: <Typography />,
    route: Route,
  },
  {
    path: routes.video,
    element: <Video />,
    route: Route,
  },
  {
    path: routes.sortable,
    element: <Sortable />,
    route: Route,
  },
  {
    path: routes.swiperjs,
    element: <Swiperjs />,
    route: Route,
  },
  {
    path: routes.bootstrapIcons,
    element: <BootstrapIcons />,
    route: Route,
  },
  {
    path: routes.toasts,
    element: <Toasts />,
    route: Route,
  },
  {
    path: routes.mapLeaflet,
    element: <Leaflet />,
    route: Route,
  },
  {
    path: routes.RemixIcons,
    element: <RemixIcons />,
    route: Route,
  },
  {
    path: routes.FlagIcons,
    element: <FlagIcons />,
    route: Route,
  },
  {
    path: routes.banIpAddress,
    element: <BanIpAddress />,
    route: Route,
  },
  {
    path: routes.todo,
    element: <Todo />,
    route: Route,
  },
  {
    path: routes.TodoList,
    element: <TodoList />,
    route: Route,
  },
  {
    path: routes.email,
    element: <Email />,
    route: Route,
  },
  {
    path: routes.EmailReply,
    element: <EmailReply />,
    route: Route,
  },
  {
    path: routes.chat,
    element: <Chat />,
    route: Route,
  },
  {
    path: routes.pages,
    element: <Page />,
    route: Route,
  },

  {
    path: routes.fileManager,
    element: <FileManager />,
    route: Route,
  },
  {
    path: routes.faq,
    element: <Faq />,
    route: Route,
  },

  {
    path: routes.states,
    element: <States />,
    route: Route,
  },
  {
    path: routes.testimonials,
    element: <Testimonials />,
    route: Route,
  },
  {
    path: routes.clipboard,
    element: <ClipBoard />,
    route: Route,
  },
  {
    path: routes.counter,
    element: <Counter />,
    route: Route,
  },
  {
    path: routes.dragandDrop,
    element: <DragAndDrop />,
    route: Route,
  },
  {
    path: routes.rating,
    element: <Rating />,
    route: Route,
  },
  {
    path: routes.stickyNotes,
    element: <Stickynote />,
    route: Route,
  },
  {
    path: routes.textEditor,
    element: <TextEditor />,
    route: Route,
  },
  {
    path: routes.timeLine,
    element: <Timeline />,
    route: Route,
  },
  {
    path: routes.scrollBar,
    element: <Scrollbar />,
    route: Route,
  },
  {
    path: routes.apexChart,
    element: <Apexchart />,
    route: Route,
  },
  {
    path: routes.primeChart,
    element: <PrimeReactChart />,
    route: Route,
  },
  {
    path: routes.chartJs,
    element: <ChartJSExample />,
    route: Route,
  },
  {
    path: routes.featherIcons,
    element: <FeatherIcons />,
    route: Route,
  },
  {
    path: routes.fontawesome,
    element: <FontawesomeIcons />,
    route: Route,
  },
  {
    path: routes.materialIcon,
    element: <MaterialIcons />,
    route: Route,
  },
  {
    path: routes.pe7icon,
    element: <PE7Icons />,
    route: Route,
  },
  {
    path: routes.simpleLineIcon,
    element: <SimplelineIcons />,
    route: Route,
  },
  {
    path: routes.themifyIcon,
    element: <ThemifyIcons />,
    route: Route,
  },
  {
    path: routes.typicon,
    element: <TypiconIcons />,
    route: Route,
  },
  {
    path: routes.basicInput,
    element: <BasicInputs />,
    route: Route,
  },
  {
    path: routes.weatherIcon,
    element: <WeatherIcons />,
    route: Route,
  },
  {
    path: routes.checkboxandRadion,
    element: <CheckboxRadios />,
    route: Route,
  },
  {
    path: routes.inputGroup,
    element: <InputGroup />,
    route: Route,
  },
  {
    path: routes.gridandGutters,
    element: <GridGutters />,
    route: Route,
  },
  {
    path: routes.formSelect,
    element: <FormSelect />,
    route: Route,
  },
  {
    path: routes.formMask,
    element: <FormMask />,
    route: Route,
  },
  {
    path: routes.fileUpload,
    element: <FileUpload />,
    route: Route,
  },
  {
    path: routes.horizontalForm,
    element: <FormHorizontal />,
    route: Route,
  },
  {
    path: routes.verticalForm,
    element: <FormVertical />,
    route: Route,
  },
  {
    path: routes.floatingLable,
    element: <FloatingLabel />,
    route: Route,
  },
  {
    path: routes.formValidation,
    element: <FormValidation />,
    route: Route,
  },
  {
    path: routes.reactSelect,
    element: <FormSelect2 />,
    route: Route,
  },
  {
    path: routes.formWizard,
    element: <FormWizard />,
    route: Route,
  },
  {
    path: routes.formPicker,
    element: <FormPikers />,
    route: Route,
  },
  {
    path: routes.dataTables,
    element: <DataTables />,
    route: Route,
  },
  {
    path: routes.tablesBasic,
    element: <TablesBasic />,
    route: Route,
  },
  {
    path: routes.iconicIcon,
    element: <IonicIcons />,
    route: Route,
  },
  // {
  //   path: routes.chart,
  //   element: <ChartJs />,
  //   route: Route,
  // },

  {
    path: routes.placeholder,
    element: <Placeholder />,
    route: Route,
  },
  {
    path: routes.sweetalert,
    element: <Alert />,
    route: Route,
  },
  {
    path: routes.alert,
    element: <AlertUi />,
    route: Route,
  },
  {
    path: routes.tooltip,
    element: <Tooltips />,
    route: Route,
  },
  {
    path: routes.ribbon,
    element: <Ribbon />,
    route: Route,
  },
  {
    path: routes.categories,
    element: <Categories />,
    route: Route,
  },
  {
    path: routes.budgets,
    element: <Budgets />,
    route: Route,
  },
  {
    path: routes.budgetexpenses,
    element: <BudgetExpenses />,
    route: Route,
  },
  {
    path: routes.budgetrevenues,
    element: <BudgetRevenues />,
    route: Route,
  },
  {
    path: routes.tickets,
    element: <Tickets />,
    route: Route,
  },
  {
    path: routes.ticketGrid,
    element: <TicketGrid />,
    route: Route,
  },
  {
    path: routes.ticketDetails,
    element: <TicketDetails />,
    route: Route,
  },
  {
    path: routes.performanceIndicator,
    element: <PerformanceIndicator />,
    route: Route,
  },
  {
    path: routes.holidays,
    element: <Holidays />,
    route: Route,
  },
  {
    path: routes.performanceReview,
    element: <PerformanceReview />,
    route: Route,
  },
  {
    path: routes.performanceAppraisal,
    element: <PerformanceAppraisal />,
    route: Route,
  },
  {
    path: routes.goalTracking,
    element: <GoalTracking />,
    route: Route,
  },
  {
    path: routes.goalType,
    element: <GoalType />,
    route: Route,
  },
  {
    path: routes.trainingList,
    element: <TrainingList />,
    route: Route,
  },
  {
    path: routes.trainers,
    element: <Trainers />,
    route: Route,
  },
  {
    path: routes.trainingType,
    element: <TrainingType />,
    route: Route,
  },




  {
    path: routes.Horizontal,
    element: <LayoutDemo />,
  },
  {
    path: routes.Detached,
    element: <LayoutDemo />,
  },
  {
    path: routes.Modern,
    element: <LayoutDemo />,
  },
  {
    path: routes.TwoColumn,
    element: <LayoutDemo />,
  },
  {
    path: routes.Hovered,
    element: <LayoutDemo />,
  },
  {
    path: routes.layoutBox,
    element: <LayoutDemo />,
  },
  {
    path: routes.HorizontalSingle,
    element: <LayoutDemo />,
  },
  {
    path: routes.HorizontalOverlay,
    element: <LayoutDemo />,
  },
  {
    path: routes.HorizontalBox,
    element: <LayoutDemo />,
  },
  {
    path: routes.MenuAside,
    element: <LayoutDemo />,
  },
  {
    path: routes.Transparent,
    element: <LayoutDemo />,
  },
  {
    path: routes.WithoutHeader,
    element: <LayoutDemo />,
  },
  {
    path: routes.layoutRtl,
    element: <LayoutDemo />,
  },
  {
    path: routes.layoutDark,
    element: <LayoutDemo />,
  },

  //Settings

  {
    path: routes.profilesettings,
    element: <Profilesettings />,
  },
  {
    path: routes.securitysettings,
    element: <Securitysettings />,
  },
  {
    path: routes.notificationssettings,
    element: <Notificationssettings />,
  },
  {
    path: routes.connectedApps,
    element: <ConnectedApps />,
  },
  {
    path: routes.bussinessSettings,
    element: <Bussinesssettings />,
  },
  {
    path: routes.seoSettings,
    element: <Seosettings />,
  },
  {
    path: routes.companySettings,
    element: <CompanySettings />,
  },
  {
    path: routes.localizationSettings,
    element: <Localizationsettings />,
  },
  {
    path: routes.prefixes,
    element: <Prefixes />,
  },
  {
    path: routes.preference,
    element: <Preference />,
  },
  {
    path: routes.authenticationSettings,
    element: <Authenticationsettings />,
  },
  {
    path: routes.aiSettings,
    element: <Aisettings />,
  },
  {
    path: routes.salarySettings,
    element: <Salarysettings />,
  },
  {
    path: routes.approvalSettings,
    element: <Approvalsettings />,
  },
  {
    path: routes.appearance,
    element: <Appearance />,
  },
  {
    path: routes.language,
    element: <Languagesettings />,
  },
  {
    path: routes.languageWeb,
    element: <Languageweb />,
  },
  {
    path: routes.addLanguage,
    element: <Addlanguage />,
  },
  {
    path: routes.invoiceSettings,
    element: <InvoiceSettings />,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
  },
  {
    path: routes.leaveType,
    element: <LeaveType />,
  },
  {
    path: routes.emailSettings,
    element: <EmailSettings />,
  },
  {
    path: routes.emailTemplates,
    element: <Emailtemplates />,
  },
  {
    path: routes.smsSettings,
    element: <SmsSettings />,
  },
  {
    path: routes.smsTemplate,
    element: <SmsTemplate />,
  },
  {
    path: routes.otpSettings,
    element: <OtpSettings />,
  },
  {
    path: routes.gdprCookies,
    element: <GdprCookies />,
  },
  {
    path: routes.maintenanceMode,
    element: <Maintenancemode />,
  },

  {
    path: routes.paymentGateways,
    element: <PaymentGateways />,
  },
  {
    path: routes.taxRates,
    element: <TaxRates />,
  },
  {
    path: routes.currencies,
    element: <Currencies />,
  },
  {
    path: routes.backup,
    element: <Backup />,
  },
  {
    path: routes.clearcache,
    element: <Clearcache />,
  },
  {
    path: routes.customCss,
    element: <Customcss />,
  },
  {
    path: routes.customJs,
    element: <Customjs />,
  },
  {
    path: routes.cronjob,
    element: <Cronjob />,
  },
  {
    path: routes.Cronjobschedule,
    element: <Cronjobschedule />,
  },
  {
    path: routes.storage,
    element: <Storage />,
  },
  {
    path: routes.rolesPermissions,
    element: <RolesPermissions />,
  },
  {
    path: routes.permissionpage,
    element: <PermissionPage />,
  },
  {
    path: routes.expensesreport,
    element: <ExpensesReport />,
  },
  {
    path: routes.invoicereport,
    element: <InvoiceReport />,
  },
  {
    path: routes.paymentreport,
    element: <PaymentReport />,
  },
  {
    path: routes.projectreport,
    element: <ProjectReport />,
  },
  {
    path: routes.manageusers,
    element: <Manageusers />,
  },
  {
    path: routes.blogs,
    element: <Blogs />,
  },
  {
    path: routes.blogCategories,
    element: <BlogCategories />,
    route: Route,
  },
  {
    path: routes.blogComments,
    element: <BlogComments />,
  },
  {
    path: routes.blogTags,
    element: <BlogTags />,
  },

  {
    path: routes.profile,
    element: <Profile />,
  },
  {
    path: routes.gallery,
    element: <Gallery />,
  },
  {
    path: routes.searchresult,
    element: <SearchResult />,
  },
  {
    path: routes.timeline,
    element: <TimeLines />,
  },
  {
    path: routes.pricing,
    element: <Pricing />,
  },
  {
    path: routes.apikey,
    element: <ApiKeys />,
  },

  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  {
    path: routes.termscondition,
    element: <TermsCondition />,
  },
  {
    path: routes.assetList,
    element: <Assets />,
  },
  {
    path: routes.assetCategories,
    element: <AssetsCategory />,
  },
  {
    path: routes.knowledgebase,
    element: <Knowledgebase />,
  },
  {
    path: routes.activity,
    element: <Activity />,
  },
  {
    path: routes.users,
    element: <Users />,
  },
  {
    path: routes.rolePermission,
    element: <RolesPermission />,
  },
  {
    path: routes.permissionpage,
    element: <Permission />,
  },
  {
    path: routes.invoiceDetails,
    element: <InvoiceDetails />,
  },
  {
    path: routes.taskreport,
    element: <TaskReport />,
  },
  {
    path: routes.userreport,
    element: <UserReports />,
  },
  {
    path: routes.employeereport,
    element: <EmployeeReports />,
  },
  {
    path: routes.employeedetails,
    element: <EmployeeDetails />,
    route: Route,
  },
  {
    path: routes.payslipreport,
    element: <PayslipReport />,
    route: Route,
  },
  {
    path: routes.attendancereport,
    element: <AttendanceReport />,
    route: Route,
  },
  {
    path: routes.leavereport,
    element: <LeaveReport />,
    route: Route,
  },
  {
    path: routes.dailyreport,
    element: <DailyReport />,
    route: Route,
  },
  {
    path: routes.jobgrid,
    element: <JobGrid />,
    route: Route,
  },
  {
    path: routes.joblist,
    element: <JobList />,
    route: Route,
  },
  {
    path: routes.candidatesGrid,
    element: <CandidateGrid />,
    route: Route,
  },
  {
    path: routes.candidateslist,
    element: <CandidatesList />,
    route: Route,
  },
  {
    path: routes.candidateskanban,
    element: <CandidateKanban />,
    route: Route,
  },
  {
    path: routes.refferal,
    element: <RefferalList />,
    route: Route,
  },
  {
    path: routes.clientgrid,
    element: <ClienttGrid />,
    route: Route,
  },
  {
    path: routes.clientlist,
    element: <ClientList />,
    route: Route,
  },
  {
    path: routes.clientdetils,
    element: <ClientDetails />,
    route: Route,
  },
  {
    path: routes.project,
    element: <Project />,
    route: Route,
  },
  {
    path: routes.projectdetails,
    element: <ProjectDetails />,
    route: Route,
  },
  {
    path: routes.projectlist,
    element: <ProjectList />,
    route: Route,
  },
  {
    path: routes.tasks,
    element: <Task />,
    route: Route,
  },
  {
    path: routes.tasksdetails,
    element: <TaskDetails />,
    route: Route,
  },
  {
    path: routes.taskboard,
    element: <TaskBoard />,
    route: Route,
  },
  {
    path: routes.invoices,
    element: <Invoices />,
    route: Route,
  },
  {
    path: routes.invoice,
    element: <Invoices />,
    route: Route,
  },
  {
    path: routes.addinvoice,
    element: <AddInvoice />,
    route: Route,
  },
  {
    path: routes.editinvoice,
    element: <EditInvoice />,
    route: Route,
  },
  {
    path: routes.invoicesdetails,
    element: <InvoiceDetails />,
    route: Route,
  },
  {
    path: routes.payments,
    element: <Payments />,
    route: Route,
  },
  {
    path: routes.expenses,
    element: <Expenses />,
    route: Route,
  },
  {
    path: routes.providentfund,
    element: <ProvidentFund />,
    route: Route,
  },
  {
    path: routes.taxes,
    element: <Taxes />,
    route: Route,
  },
  {
    path: routes.employeesalary,
    element: <EmployeeSalary />,
    route: Route,
  },
  {
    path: routes.payslip,
    element: <PaySlip />,
    route: Route,
  },
  {
    path: routes.payrollAddition,
    element: <PayRoll />,
    route: Route,
  },
  {
    path: routes.payrollOvertime,
    element: <PayRollOvertime />,
    route: Route,
  },
  {
    path: routes.payrollDeduction,
    element: <PayRollDeduction />,
    route: Route,
  },
  {
    path: routes.employeeList,
    element: <EmployeeList />,
    route: Route,
  },
  {
    path: routes.employeeGrid,
    element: <EmployeesGrid />,
    route: Route,
  },
  {
    path: routes.departments,
    element: <Department />,
    route: Route,
  },
  {
    path: routes.designations,
    element: <Designations />,
    route: Route,
  },
  {
    path: routes.policy,
    element: <Policy />,
    route: Route,
  },
  {
    path: routes.leaveadmin,
    element: <LeaveAdmin />,
    route: Route,
  },
  {
    path: routes.leaveemployee,
    element: <LeaveEmployee />,
    route: Route,
  },
  {
    path: routes.leavesettings,
    element: <LeaveSettings />,
    route: Route,
  },
  {
    path: routes.attendanceadmin,
    element: <AttendanceAdmin />,
    route: Route,
  },
  {
    path: routes.attendanceemployee,
    element: <AttendanceEmployee />,
    route: Route,
  },
  {
    path: routes.timesheet,
    element: <TimeSheet />,
    route: Route,
  },
  {
    path: routes.scheduletiming,
    element: <ScheduleTiming />,
    route: Route,
  },
  {
    path: routes.overtime,
    element: <OverTime />,
    route: Route,
  },

  //crm
  {
    path: routes.contactList,
    element: <ContactList />,
    route: Route,
  },
  {
    path: routes.contactGrid,
    element: <ContactGrid />,
    route: Route,
  },
  {
    path: routes.contactDetails,
    element: <ContactDetails />,
    route: Route,
  },
  {
    path: routes.companiesGrid,
    element: <CompaniesGrid />,
    route: Route,
  },
  {
    path: routes.companiesList,
    element: <CompaniesList />,
    route: Route,
  },
  {
    path: routes.companiesDetails,
    element: <CompaniesDetails />,
    route: Route,
  },
  {
    path: routes.leadsGrid,
    element: <LeadsGrid />,
    route: Route,
  },
  {
    path: routes.leadsList,
    element: <LeadsList />,
    route: Route,
  },
  {
    path: routes.leadsDetails,
    element: <LeadsDetails />,
    route: Route,
  },
  {
    path: routes.dealsGrid,
    element: <DealsGrid />,
    route: Route,
  },
  {
    path: routes.dealsList,
    element: <DealsList />,
    route: Route,
  },
  {
    path: routes.dealsDetails,
    element: <DealsDetails />,
    route: Route,
  },
  {
    path: routes.pipeline,
    element: <Pipeline />,
    route: Route,
  },
  {
    path: routes.analytics,
    element: <Analytics />,
    route: Route,
  },
  {
    path: routes.superAdminCompanies,
    element: <Companies />,
    route: Route,
  },
  {
    path: routes.superAdminSubscriptions,
    element: <Subscription />,
    route: Route,
  },
  {
    path: routes.superAdminPackages,
    element: <Packages />,
    route: Route,
  },
  {
    path: routes.superAdminPackagesGrid,
    element: <PackageGrid />,
    route: Route,
  },
  {
    path: routes.superAdminDomain,
    element: <Domain />,
    route: Route,
  },
  {
    path: routes.superAdminPurchaseTransaction,
    element: <PurchaseTransaction />,
    route: Route,
  },
];

export const authRoutes = [
  {
    path: "/register",
    element: <RegisterWizard />,
    route: Route,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
    route: Route,
  },
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.login2,
    element: <Login2 />,
    route: Route,
  },
  {
    path: routes.login3,
    element: <Login3 />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.register2,
    element: <Register2 />,
    route: Route,
  },
  {
    path: routes.register3,
    element: <Register3 />,
    route: Route,
  },
  {
    path: "/register",
    element: <RegisterWizard />,
    route: Route,
  },
  {
    path: routes.twoStepVerification,
    element: <TwoStepVerification />,
    route: Route,
  },
  {
    path: routes.twoStepVerification2,
    element: <TwoStepVerification2 />,
    route: Route,
  },
  {
    path: routes.twoStepVerification3,
    element: <TwoStepVerification3 />,
    route: Route,
  },
  {
    path: routes.emailVerification,
    element: <EmailVerification />,
    route: Route,
  },
  {
    path: routes.emailVerification2,
    element: <EmailVerification2 />,
    route: Route,
  },
  {
    path: routes.emailVerification3,
    element: <EmailVerification3 />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: routes.resetPassword2,
    element: <ResetPassword2 />,
    route: Route,
  },
  {
    path: routes.resetPassword3,
    element: <ResetPassword3 />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.forgotPassword2,
    element: <ForgotPassword2 />,
    route: Route,
  },
  {
    path: routes.forgotPassword3,
    element: <ForgotPassword3 />,
    route: Route,
  },
  {
    path: routes.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
  },
  {
    path: routes.underConstruction,
    element: <UnderConstruction />,
  },
  {
    path: routes.lockScreen,
    element: <LockScreen />,
  },
  {
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  },
  {
    path: routes.resetPasswordSuccess2,
    element: <ResetPasswordSuccess2 />,
  },
  {
    path: routes.resetPasswordSuccess3,
    element: <ResetPasswordSuccess3 />,
  },
];
