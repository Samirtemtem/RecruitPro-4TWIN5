import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../core/common/imageWithBasePath";
import { all_routes } from "../routing-module/router/all_routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chart } from "primereact/chart";
import { Calendar } from 'primereact/calendar';
import ProjectModals from "../core/modals/projectModal";
import RequestModals from "../core/modals/requestModal";
import TodoModal from "../core/modals/todoModal";
import CollapseHeader from "../core/common/collapse-header/collapse-header";
import { ApexOptions } from 'apexcharts';
import CandidatesOverview from "./candidatesOverview";

interface DepartmentCount {
  department: string;
  count: number;
}

interface EmpDepartmentState {
  series: { name: string; data: number[] }[];
  options: {
      chart: {
          type: 'bar'; // Change this to 'bar' explicitly
          height: number;
      };
      plotOptions: {
          bar: {
              horizontal: boolean;
              endingShape: string;
          };
      };
      dataLabels: {
          enabled: boolean;
      };
      xaxis: {
          categories: string[];
      };
      title: {
          text: string;
      };
  };
}




interface Candidate {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  appliedDate: string; // Adjust the type if needed
  status: string;
  image?: string; // Optional
  createDate?:string;
  phoneNumber?:string;
}

interface JobPost {
  _id: string;
  title: string;
  description: string;
  requirements: string[];
  department: string;
  status: "OPEN" | "CLOSED" | "PENDING";
  publishDate: string;
  deadline: string;
}

// Define a TypeScript interface for the user data
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  department: string;
  image: string | null; // image can be a string or null if not provided
}

const AdminDashboard = () => {

   // Define state with type User[]
   const [users, setUsers] = useState<User[]>([]);





  const routes = all_routes;

  const [isTodo, setIsTodo] = useState([false, false, false]);

  const [date, setDate] = useState(new Date());

 

 

  //Attendance ChartJs
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    const data = {
      labels: ['Late', 'Present', 'Permission', 'Absent'],
      datasets: [

        {
          label: 'Semi Donut',
          data: [40, 20, 30, 10],
          backgroundColor: ['#0C4B5E', '#03C95A', '#FFC107', '#E70D0D'],
          borderWidth: 5,
          borderRadius: 10,
          borderColor: '#fff', // Border between segments
          hoverBorderWidth: 0,   // Border radius for curved edges
          cutout: '60%',
        }
      ]
    };
    const options = {
      rotation: -100,
      circumference: 200,
      layout: {
        padding: {
          top: -20,    // Set to 0 to remove top padding
          bottom: -20, // Set to 0 to remove bottom padding
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide the legend
        }
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  //Semi Donut ChartJs
  const [semidonutData, setSemidonutData] = useState({});
  const [semidonutOptions, setSemidonutOptions] = useState({});
  const toggleTodo = (index: number) => {
    setIsTodo((prevIsTodo) => {
      const newIsTodo = [...prevIsTodo];
      newIsTodo[index] = !newIsTodo[index];
      return newIsTodo;
    });
  };
  useEffect(() => {

    const data = {
      labels: ["Ongoing", "Onhold", "Completed", "Overdue"],
      datasets: [
        {
          label: 'Semi Donut',
          data: [20, 40, 20, 10],
          backgroundColor: ['#FFC107', '#1B84FF', '#03C95A', '#E70D0D'],
          borderWidth: -10,
          borderColor: 'transparent', // Border between segments
          hoverBorderWidth: 0,   // Border radius for curved edges
          cutout: '75%',
          spacing: -30,
        },
      ],
    };

    const options = {
      rotation: -100,
      circumference: 185,
      layout: {
        padding: {
          top: -20,    // Set to 0 to remove top padding
          bottom: 20, // Set to 0 to remove bottom padding
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide the legend
        }
      }, elements: {
        arc: {
          borderWidth: -30, // Ensure consistent overlap
          borderRadius: 30, // Add some rounding
        }
      },
    };

    setSemidonutData(data);
    setSemidonutOptions(options);
  }, []);






// Backend 

const [jobPosts, setJobPosts] = useState<JobPost[]>([]); // Array of JobPost objects

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs/latest-Five");
        setJobPosts(response.data); // Assuming response contains an array of job posts
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };
    fetchJobs();
  }, []);



// Backend

const [stats, setStats] = useState({
  totalJobPosts: 0,
  openJobPosts: 0,
  percentageChange: 0,
});

useEffect(() => {
  // Fetch job post statistics from the backend
  const fetchJobPostStatistics = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs/job-posts/statistics'); // Replace with your backend API endpoint
      const data = await response.json();
      setStats(data); // Store the fetched data in state
    } catch (error) {
      console.error('Error fetching job post statistics:', error);
    }
  };

  fetchJobPostStatistics();
}, []);

// Destructure stats from state
const { totalJobPosts, openJobPosts, percentageChange } = stats;












const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/user/usersListLatest');
    console.log('Fetched users:', response.data); // Log the data to verify
    setUsers(response.data); // Store the data
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

useEffect(() => {
  fetchUsers();
}, []);






const [candidates, setCandidates] = useState<any[]>([]); // Adjust the type as per your data structure

useEffect(() => {
  const fetchCandidates = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/get/Lastcandidates'); // Adjust the API endpoint
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  fetchCandidates();
}, []);













const [userData, setUserData] = useState<any>(null); 

useEffect(() => {
  const fetchUserData = async () => {
    const token = localStorage.getItem('token'); // Replace 'token' with the actual key if different

    if (!token) {
      console.error('No token found in session storage.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/user/${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      console.log('API Response:', data); // Log the API response
      setUserData(data.user); // Accessing the nested user object
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchUserData();
}, []);

useEffect(() => {
  console.log('User Data:', userData); // Log userData whenever it changes
}, [userData]);
const imageUrl = userData?.image;
console.log('Image URL:', imageUrl);







const [empDepartment, setEmpDepartment] = useState<EmpDepartmentState>({
  series: [],
  options: {
      chart: {
          type: 'bar',
          height: 220,
      },
      plotOptions: {
          bar: {
              horizontal: false,
              endingShape: 'rounded',
          },
      },
      dataLabels: {
          enabled: false,
      },
      xaxis: {
          categories: [],
      },
      title: {
          text: '',
      },
  },
});

const [employeeGrowthPercentage, setEmployeeGrowthPercentage] = useState<number>(0);
const [totalEmployees, setTotalEmployees] = useState<number>(0); // New state for total employees


useEffect(() => {
  const fetchEmployeeData = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/user/count-employees-by-department');
          console.log(response);
          const { totalEmployees: total, percentageChange: change, departmentCounts }: { totalEmployees: number; percentageChange: number; departmentCounts: DepartmentCount[] } = response.data;

          // Prepare data for the chart
          const categories = departmentCounts.map((department: DepartmentCount) => department.department);
          const seriesData = departmentCounts.map((department: DepartmentCount) => department.count);

          setEmpDepartment(prevState => ({
              ...prevState,
              series: [{ name: 'Employees', data: seriesData }],
              options: {
                  ...prevState.options,
                  xaxis: {
                      categories,
                  },
              },
          }));

          setEmployeeGrowthPercentage(change);
          setTotalEmployees(total); // Set the total employees
      } catch (error) {
          console.error('Error fetching employee data:', error);
      }
  };

  fetchEmployeeData();
}, []);




  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Admin Dashboard</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Admin Dashboard
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <Link to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-file-export me-1" />
                    Export
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        <i className="ti ti-file-type-pdf me-1" />
                        Export as PDF
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        <i className="ti ti-file-type-xls me-1" />
                        Export as Excel{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <div className="input-icon w-120 position-relative">
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar text-gray-9" />
                  </span>
                  <Calendar value={date} onChange={(e: any) => setDate(e.value)} view="year" dateFormat="yy" className="Calendar-form" />
                </div>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Welcome Wrap */}
          <div className="card border-0">
            <div className="card-body d-flex align-items-center justify-content-between flex-wrap pb-1">
              <div className="d-flex align-items-center mb-3">
                <span className="avatar avatar-xl flex-shrink-0">
                <img src={imageUrl || "assets/img/users/user-01.jpg"} alt="User Image" className="img-fluid" />
                </span>
                <div className="ms-3">
                  <h3 className="mb-2">
                    Welcome Back {userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}
                    <Link to="#" className="edit-icon">
                      <i className="ti ti-edit fs-14" />
                    </Link>
                  </h3>
                  <p>
                    You have{" "}
                    <span className="text-primary text-decoration-underline">
                      21
                    </span>{" "}
                    Pending Approvals &amp;{" "}
                    <span className="text-primary text-decoration-underline">
                      14
                    </span>{" "}
                    Leave Requests
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap mb-1">
                <Link
                  to="#"
                  className="btn btn-secondary btn-md me-2 mb-2"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_project"
                >
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Employee
                </Link>
                
              </div>
            </div>
          </div>
          {/* /Welcome Wrap */}
          <div className="row">
            {/* Widget Info */}
            <div className="col-xxl-8 d-flex">
              <div className="row flex-fill">
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                  <div className="card-body">
      <span className="avatar rounded-circle bg-primary mb-2">
        <i className="ti ti-calendar-share fs-16" />
      </span>
      <h6 className="fs-13 fw-medium text-default mb-1">
        Active Job Posts
      </h6>
      <h3 className="mb-3">
        {openJobPosts}/{totalJobPosts}{' '}
        <span className={`fs-12 fw-medium ${percentageChange >= 0 ? 'text-success' : 'text-danger'}`}>
          <i className={`fa-solid ${percentageChange >= 0 ? 'fa-caret-up' : 'fa-caret-down'} me-1`} />
          {percentageChange > 0 ? `+${percentageChange.toFixed(2)}%` : `${percentageChange.toFixed(2)}%`}
        </span>
      </h3>
      <Link to="attendance-employee.html" className="link-default">
        View Details
      </Link>
    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-secondary mb-2">
                        <i className="ti ti-browser fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      Job Applicants
                      </h6>
                      <h3 className="mb-3">
                        320{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          +2.1%
                        </span>
                      </h3>
                      <Link to="/jobgrid" className="link-default">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-info mb-2">
                        <i className="ti ti-users-group fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      New Hire
                      </h6>
                      <h3 className="mb-3">
                      45/48{" "}
                        <span className="fs-12 fw-medium text-danger">
                          <i className="fa-solid fa-caret-down me-1" />
                          -11.2%
                        </span>
                      </h3>
                      <Link to="clients.html" className="link-default">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-pink mb-2">
                        <i className="ti ti-checklist fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      Interviews Scheduled
                      </h6>
                      <h3 className="mb-3">
                      32/50 {" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-down me-1" />
                          + 8.5% 
                        </span>
                      </h3>
                      <Link to="tasks.html" className="link-default">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-purple mb-2">
                        <i className="ti ti-moneybag fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      Offers Extended
                      </h6>
                      <h3 className="mb-3">
                      18/25{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          +10.2%
                        </span>
                      </h3>
                      <Link to="expenses.html" className="link-default">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-danger mb-2">
                        <i className="ti ti-browser fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      Average Time to Hire
                      </h6>
                      <h3 className="mb-3">
                      25 Days{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          + 1.2% faster
                        </span>
                      </h3>
                      <Link to="purchase-transaction.html" className="link-default">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-success mb-2">
                        <i className="ti ti-users-group fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      Onboarding Progress
                      </h6>
                      <h3 className="mb-3">
                      10/120{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          +2.1%
                        </span>
                      </h3>
                      <Link to="job-list.html" className="link-default">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <span className="avatar rounded-circle bg-dark mb-2">
                        <i className="ti ti-user-star fs-16" />
                      </span>
                      <h6 className="fs-13 fw-medium text-default mb-1">
                      Candidate Satisfaction Score
                      </h6>
                      <h3 className="mb-3">
                      4.5/5{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          +2.1% improvement
                        </span>
                      </h3>
                      <Link to="candidates.html" className="link-default">
                      View Feedback
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Widget Info */}



            {/* Employees By Department */}
            <div className="col-xxl-4 d-flex">
            <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                    <h5 className="mb-2">Employees By Department</h5>
                    <div className="dropdown mb-2">
                        <Link to="#"
                            className="btn btn-white border btn-sm d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                        >
                            <i className="ti ti-calendar me-1" />
                            This Week
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <Link to="#"
                                    className="dropdown-item rounded-1"
                                >
                                    This Month
                                </Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="dropdown-item rounded-1"
                                >
                                    This Week
                                </Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="dropdown-item rounded-1"
                                >
                                    Last Week
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <ReactApexChart
                        id="emp-department"
                        options={empDepartment.options}
                        series={empDepartment.series}
                        type="bar"
                        height={220}
                    />
                     <p className="fs-13">
                        <i className="ti ti-circle-filled me-2 fs-8 text-primary" />
                        Total Employees: <span className="text-primary fw-bold">{totalEmployees}</span>
                    </p>
                    <p className="fs-13">
                        <i className="ti ti-circle-filled me-2 fs-8 text-primary" />
                        No of Employees increased by{" "}
                        <span className="text-success fw-bold">+{employeeGrowthPercentage}%</span> from last Year
                    </p>
                </div>
            </div>
        </div>
            {/* /Employees By Department */}




          </div>
          <div className="row">
             {/* Jobs Applicants */}
             <div className="col-xxl-4 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 className="mb-2">Job Posts</h5>
          <Link to="/jobgrid" className="btn btn-light btn-md mb-2">
            View All
          </Link>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-nowrap mb-0">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobPosts.length > 0 ? (
                  jobPosts.map((job) => (
                    <tr key={job._id}> {/* Assuming job has a unique _id */}
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/jobgrid" className="avatar">
                            <ImageWithBasePath
                              src="assets/img/icons/logo.png" // Placeholder image
                              className="img-fluid  w-auto h-auto"
                              alt="Job Icon"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium">
                              <Link to="#">{job.title}</Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-secondary-transparent badge-xs">
                          {job.department}
                        </span>
                      </td>
                      <td>
                      <span
                          className={`badge badge-${
                            job.status === 'OPEN'
                              ? 'success'
                              : job.status === 'CLOSED'
                              ? 'danger'
                              : 'warning' // For PENDING status
                          }-transparent badge-xs`}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No job posts available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
            {/* /Jobs Applicants */}
          {/* Candidates */}
          <div className="col-xxl-4 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 className="mb-2">Candidates</h5>
          <Link to="/candidates-grid" className="btn btn-light btn-md mb-2">
            View All
          </Link>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-nowrap mb-0">
              <thead>
                <tr>
                  <th> Name</th>
                  <th>email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {candidates.length > 0 ? (
                  candidates.map((candidate) => (
                    <tr key={candidate._id}> {/* Assuming candidate has a unique _id */}
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="/jobgrid" className="avatar">
                          <img src={candidate.image || "assets/img/users/user-01.jpg"} alt="User Image" className="img-fluid" />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium">
                              <Link to="#">{candidate.firstName} {candidate.lastName}</Link> {/* Adjust title field as necessary */}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-secondary-transparent badge-xs">
                          {candidate.email} {/* Adjust department field as necessary */}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-${
                            candidate.status === 'OPEN'
                              ? 'success'
                              : candidate.status === 'CLOSED'
                              ? 'danger'
                              : 'warning' // For PENDING status
                          }-transparent badge-xs`}
                        >
                          {candidate.phoneNumber} {/* Adjust status field as necessary */}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No candidates available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
            {/* /Employees */}
           
            {/* Employees */}
            <div className="col-xxl-4 col-xl-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 className="mb-2">Employees</h5>
          <Link to="/employees" className="btn btn-light btn-md mb-2">
            View All
          </Link>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-nowrap mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>  {/* Use a unique identifier like `user.id` */}
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar">
                          <img
                            src={user.image || 'assets/img/default-avatar.jpg'}  // Fallback image if no user image
                            className="img-fluid rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-medium">
                            <Link to="#">{user.firstName} {user.lastName}</Link>
                          </h6>
                          <span className="fs-12">{user.role}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-secondary-transparent badge-xs">
                        {user.department}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
            {/* /Employees */}
          </div>
          
          <div className="row">
           {/* Candidates Overview */}
        <CandidatesOverview />
{/* /Candidates Overview */}
           
          </div>
        
         
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0"> 2025 © RecruitPro.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              InfiniteLoopers
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
      <ProjectModals />
      <RequestModals />
      <TodoModal />
    </>

  );
};

export default AdminDashboard;

