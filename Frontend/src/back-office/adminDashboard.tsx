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

  const candidatesOverviewOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#1E90FF', '#FF6347'], // Blue for total candidates, red for hired
    xaxis: {
      categories: ['2022', '2023', '2024', '2025'], // Last four years
    },
    series: [
      {
        name: 'Total Candidates',
        data: [400, 500, 600, 700], // Example total candidates for each year
      },
      {
        name: 'Hired Candidates',
        data: [100, 150, 200, 250], // Example hired candidates for each year
      },
    ],
  };




  const routes = all_routes;

  const [isTodo, setIsTodo] = useState([false, false, false]);

  const [date, setDate] = useState(new Date());

  //New Chart
  const [empDepartment] = useState<any>({
    chart: {
      height: 280,
      type: 'bar',
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      toolbar: {
        show: false,
      }
    },
    fill: {
      colors: ['#F26522'], // Fill color for the bars
      opacity: 1, // Adjust opacity (1 is fully opaque)
    },
    colors: ['#F26522'],
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        top: -20,
        left: 0,
        right: 0,
        bottom: 0
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: true,
        barHeight: '35%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [80, 110, 80],
      name: 'Employee'
    }],
    xaxis: {
      categories: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC'] ,
      labels: {
        style: {
          colors: '#111827',
          fontSize: '13px',
        }
      }
    }
  })

  const [salesIncome] = useState<any>({
    chart: {
      height: 290,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FF6F28', '#F8F9FA'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },
    series: [{
      name: 'Income',
      data: [40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80]
    }, {
      name: 'Expenses',
      data: [60, 70, 55, 20, 15, 10, 20, 20, 20, 15, 80, 20]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -8,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  })

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
        const response = await axios.get("http://localhost:5000/api/jobs/latest");
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
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-31.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-3">
                  <h3 className="mb-2">
                    Welcome Back, Maliik{" "}
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
                      <Link to="projects.html" className="link-default">
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
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
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
                    options={empDepartment}
                    series={empDepartment.series}
                    type="bar"
                    height={220}
                  />
                  <p className="fs-13">
                    <i className="ti ti-circle-filled me-2 fs-8 text-primary" />
                    No of Employees increased by{" "}
                    <span className="text-success fw-bold">+20%</span> from last
                    Week
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
          <Link to="/job-grid" className="btn btn-light btn-md mb-2">
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
                          <Link to="/job-grid" className="avatar">
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
                          <Link to="/job-grid" className="avatar">
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
           <div className="col-xl-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 className="mb-2">Candidates Overview</h5>
          <div className="d-flex align-items-center">
            <div className="dropdown mb-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white border-0 btn-sm d-inline-flex align-items-center fs-13 me-2"
                data-bs-toggle="dropdown"
              >
                Candidates by Year
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-3">
                <li><Link to="#" className="dropdown-item rounded-1">2021</Link></li>
                <li><Link to="#" className="dropdown-item rounded-1">2022</Link></li>
                <li><Link to="#" className="dropdown-item rounded-1">2023</Link></li>
                <li><Link to="#" className="dropdown-item rounded-1">2024</Link></li>
                <li><Link to="#" className="dropdown-item rounded-1">2025</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body pb-0">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center mb-1">
              <p className="fs-13 text-gray-9 me-3 mb-0">
                <i className="ti ti-square-filled me-2 text-primary" />
                Total Candidates
              </p>
              <p className="fs-13 text-gray-9 mb-0">
                <i className="ti ti-square-filled me-2 text-danger" />
                Hired
              </p>
            </div>
            <p className="fs-13 mb-1">Last Updated at 11:30PM</p>
          </div>
          <ReactApexChart
            id="candidates-overview"
            options={candidatesOverviewOptions}
            series={candidatesOverviewOptions.series}
            type="bar"
            height={270}
          />
        </div>
      </div>
    </div>
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

