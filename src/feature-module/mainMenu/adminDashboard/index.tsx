import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chart } from "primereact/chart";
import { Calendar } from 'primereact/calendar';
import ProjectModals from "../../../core/modals/projectModal";
import RequestModals from "../../../core/modals/requestModal";
import TodoModal from "../../../core/modals/todoModal";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const AdminDashboard = () => {
  const routes = all_routes;

  const [isTodo, setIsTodo] = useState([false, false, false]);

  const [date, setDate] = useState(new Date());

  //New Chart
  const [empDepartment] = useState<any>({
    chart: {
      height: 235,
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
      data: [80, 110, 80, 20, 60, 100],
      name: 'Employee'
    }],
    xaxis: {
      categories: ['UI/UX', 'Development', 'Management', 'HR', 'Testing', 'Marketing'],
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
                    Welcome Back, Adrian{" "}
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
                  Add Project
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-md mb-2"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_leaves"
                >
                  <i className="ti ti-square-rounded-plus me-1" />
                  Add Requests
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
                        Attendance
                      </h6>
                      <h3 className="mb-3">
                        92/99{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          +2.1%
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
                        Total Project's
                      </h6>
                      <h3 className="mb-3">
                        90/94{" "}
                        <span className="fs-12 fw-medium text-danger">
                          <i className="fa-solid fa-caret-down me-1" />
                          -2.1%
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
                        Total Clients
                      </h6>
                      <h3 className="mb-3">
                        69/86{" "}
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
                        Total Tasks
                      </h6>
                      <h3 className="mb-3">
                        25/28{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-down me-1" />
                          +11.2%
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
                        Earnings
                      </h6>
                      <h3 className="mb-3">
                        $2144{" "}
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
                        Profit This Week
                      </h6>
                      <h3 className="mb-3">
                        $5,544{" "}
                        <span className="fs-12 fw-medium text-success">
                          <i className="fa-solid fa-caret-up me-1" />
                          +2.1%
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
                        Job Applicants
                      </h6>
                      <h3 className="mb-3">
                        98{" "}
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
                        New Hire
                      </h6>
                      <h3 className="mb-3">
                        45/48{" "}
                        <span className="fs-12 fw-medium text-danger">
                          <i className="fa-solid fa-caret-down me-1" />
                          -11.2%
                        </span>
                      </h3>
                      <Link to="candidates.html" className="link-default">
                        View All
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
            {/* Total Employee */}
            <div className="col-xxl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Employee Status</h5>
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
                          Today
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <p className="fs-13 mb-3">Total Employee</p>
                    <h3 className="mb-3">154</h3>
                  </div>
                  <div className="progress-stacked emp-stack mb-3">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment one"
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "40%" }}
                    >
                      <div className="progress-bar bg-warning" />
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment two"
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "20%" }}
                    >
                      <div className="progress-bar bg-secondary" />
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment three"
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "10%" }}
                    >
                      <div className="progress-bar bg-danger" />
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment four"
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "30%" }}
                    >
                      <div className="progress-bar bg-pink" />
                    </div>
                  </div>
                  <div className="border mb-3">
                    <div className="row gx-0">
                      <div className="col-6">
                        <div className="p-2 flex-fill border-end border-bottom">
                          <p className="fs-13 mb-2">
                            <i className="ti ti-square-filled text-primary fs-12 me-2" />
                            Fulltime <span className="text-gray-9">(48%)</span>
                          </p>
                          <h2 className="display-1">112</h2>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 flex-fill border-bottom text-end">
                          <p className="fs-13 mb-2">
                            <i className="ti ti-square-filled me-2 text-secondary fs-12" />
                            Contract <span className="text-gray-9">(20%)</span>
                          </p>
                          <h2 className="display-1">112</h2>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 flex-fill border-end">
                          <p className="fs-13 mb-2">
                            <i className="ti ti-square-filled me-2 text-danger fs-12" />
                            Probation <span className="text-gray-9">(22%)</span>
                          </p>
                          <h2 className="display-1">12</h2>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 flex-fill text-end">
                          <p className="fs-13 mb-2">
                            <i className="ti ti-square-filled text-pink me-2 fs-12" />
                            WFH <span className="text-gray-9">(20%)</span>
                          </p>
                          <h2 className="display-1">04</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-2">Top Performer</h6>
                  <div className="p-2 d-flex align-items-center justify-content-between border border-primary bg-primary-100 br-5 mb-4">
                    <div className="d-flex align-items-center overflow-hidden">
                      <span className="me-2">
                        <i className="ti ti-award-filled text-primary fs-24" />
                      </span>
                      <Link
                        to="employee-details.html"
                        className="avatar avatar-md me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-24.jpg"
                          className="rounded-circle border border-white"
                          alt="img"
                        />
                      </Link>
                      <div>
                        <h6 className="text-truncate mb-1 fs-14 fw-medium">
                          <Link to="employee-details.html">Daniel Esbella</Link>
                        </h6>
                        <p className="fs-13">IOS Developer</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="fs-13 mb-1">Performance</p>
                      <h5 className="text-primary">99%</h5>
                    </div>
                  </div>
                  <Link to="employees.html" className="btn btn-light btn-md w-100">
                    View All Employees
                  </Link>
                </div>
              </div>
            </div>
            {/* /Total Employee */}
            {/* Attendance Overview */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Attendance Overview</h5>
                  <div className="dropdown mb-2">
                    <Link to="#"
                      className="btn btn-white border btn-sm d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar me-1" />
                      Today
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
                          Today
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo position-relative mb-4">
                    <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full attendence-chart md:w-30rem" />
                    <div className="position-absolute text-center attendance-canvas">
                      <p className="fs-13 mb-1">Total Attendance</p>
                      <h3>120</h3>
                    </div>
                  </div>
                  <h6 className="mb-3">Status</h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="f-13 mb-2">
                      <i className="ti ti-circle-filled text-success me-1" />
                      Present
                    </p>
                    <p className="f-13 fw-medium text-gray-9 mb-2">59%</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="f-13 mb-2">
                      <i className="ti ti-circle-filled text-secondary me-1" />
                      Late
                    </p>
                    <p className="f-13 fw-medium text-gray-9 mb-2">21%</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="f-13 mb-2">
                      <i className="ti ti-circle-filled text-warning me-1" />
                      Permission
                    </p>
                    <p className="f-13 fw-medium text-gray-9 mb-2">2%</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="f-13 mb-2">
                      <i className="ti ti-circle-filled text-danger me-1" />
                      Absent
                    </p>
                    <p className="f-13 fw-medium text-gray-9 mb-2">15%</p>
                  </div>
                  <div className="bg-light br-5 box-shadow-xs p-2 pb-0 d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center">
                      <p className="mb-2 me-2">Total Absenties</p>
                      <div className="avatar-list-stacked avatar-group-sm mb-2">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-27.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-30.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-14.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-29.jpg" alt="img" />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-10"
                          to="#"
                        >
                          +1
                        </Link>
                      </div>
                    </div>
                    <Link to="leaves.html"
                      className="fs-13 link-primary text-decoration-underline mb-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Attendance Overview */}
            {/* Clock-In/Out */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Clock-In/Out</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white btn-sm d-inline-flex align-items-center border-0 fs-13 me-2"
                        data-bs-toggle="dropdown"
                      >
                        All Departments
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Finance
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        Today
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
                            Today
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3 p-2 border border-dashed br-5">
                      <div className="d-flex align-items-center">
                        <Link to="#"
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-24.jpg"
                            className="rounded-circle border border-2"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fs-14 fw-medium text-truncate">
                            Daniel Esbella
                          </h6>
                          <p className="fs-13">UI/UX Designer</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="link-default me-2">
                          <i className="ti ti-clock-share" />
                        </Link>
                        <span className="fs-10 fw-medium d-inline-flex align-items-center badge badge-success">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          09:15
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 p-2 border br-5">
                      <div className="d-flex align-items-center">
                        <Link to="#"
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-23.jpg"
                            className="rounded-circle border border-2"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fs-14 fw-medium">Doglas Martini</h6>
                          <p className="fs-13">Project Manager</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="link-default me-2">
                          <i className="ti ti-clock-share" />
                        </Link>
                        <span className="fs-10 fw-medium d-inline-flex align-items-center badge badge-success">
                          <i className="ti ti-circle-filled fs-5 me-1" />
                          09:36
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 p-2 border br-5">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-27.jpg"
                              className="rounded-circle border border-2"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fs-14 fw-medium text-truncate">
                              Brian Villalobos
                            </h6>
                            <p className="fs-13">PHP Developer</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="link-default me-2"
                          >
                            <i className="ti ti-clock-share" />
                          </Link>
                          <span className="fs-10 fw-medium d-inline-flex align-items-center badge badge-success">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            09:15
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap mt-2 border br-5 p-2 pb-0">
                        <div>
                          <p className="mb-1 d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled text-success fs-5 me-1" />
                            Clock in
                          </p>
                          <h6 className="fs-13 fw-normal mb-2">10:30 AM</h6>
                        </div>
                        <div>
                          <p className="mb-1 d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled text-danger fs-5 me-1" />
                            Clock Out
                          </p>
                          <h6 className="fs-13 fw-normal mb-2">09:45 AM</h6>
                        </div>
                        <div>
                          <p className="mb-1 d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled text-warning fs-5 me-1" />
                            Production
                          </p>
                          <h6 className="fs-13 fw-normal mb-2">09:21 Hrs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-2">Late</h6>
                  <div className="d-flex align-items-center justify-content-between mb-3 p-2 border border-dashed br-5">
                    <div className="d-flex align-items-center">
                      <span className="avatar flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-29.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </span>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate">
                          Anthony Lewis{" "}
                          <span className="fs-10 fw-medium d-inline-flex align-items-center badge badge-success">
                            <i className="ti ti-clock-hour-11 me-1" />
                            30 Min
                          </span>
                        </h6>
                        <p className="fs-13">Marketing Head</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="link-default me-2">
                        <i className="ti ti-clock-share" />
                      </Link>
                      <span className="fs-10 fw-medium d-inline-flex align-items-center badge badge-danger">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        08:35
                      </span>
                    </div>
                  </div>
                  <Link to="attendance-report.html"
                    className="btn btn-light btn-md w-100"
                  >
                    View All Attendance
                  </Link>
                </div>
              </div>
            </div>
            {/* /Clock-In/Out */}
          </div>
          <div className="row">
            {/* Jobs Applicants */}
            <div className="col-xxl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Jobs Applicants</h5>
                  <Link to="job-list.html" className="btn btn-light btn-md mb-2">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-tabs tab-style-1 nav-justified d-sm-flex d-block p-0 mb-4"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link fw-medium"
                        data-bs-toggle="tab"
                        data-bs-target="#openings"
                        aria-current="page"
                        to="#openings"
                        aria-selected="true"
                        role="tab"
                      >
                        Openings
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link fw-medium active"
                        data-bs-toggle="tab"
                        data-bs-target="#applicants"
                        to="#applicants"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Applicants
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade" id="openings">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                          >
                            <ImageWithBasePath
                              src="assets/img/icons/apple.svg"
                              className="img-fluid rounded-circle w-auto h-auto"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">Senior IOS Developer</Link>
                            </p>
                            <span className="fs-12">No of Openings : 25 </span>
                          </div>
                        </div>
                        <Link to="#"
                          className="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                          >
                            <ImageWithBasePath
                              src="assets/img/icons/php.svg"
                              className="img-fluid w-auto h-auto"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">Junior PHP Developer</Link>
                            </p>
                            <span className="fs-12">No of Openings : 20 </span>
                          </div>
                        </div>
                        <Link to="#"
                          className="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                          >
                            <ImageWithBasePath
                              src="assets/img/icons/react.svg"
                              className="img-fluid w-auto h-auto"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">
                                Junior React Developer{" "}
                              </Link>
                            </p>
                            <span className="fs-12">No of Openings : 30 </span>
                          </div>
                        </div>
                        <Link to="#"
                          className="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-0">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0 bg-gray-100"
                          >
                            <ImageWithBasePath
                              src="assets/img/icons/laravel-icon.svg"
                              className="img-fluid w-auto h-auto"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">
                                Senior Laravel Developer
                              </Link>
                            </p>
                            <span className="fs-12">No of Openings : 40 </span>
                          </div>
                        </div>
                        <Link to="#"
                          className="btn btn-light btn-sm p-0 btn-icon d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                      </div>
                    </div>
                    <div className="tab-pane fade show active" id="applicants">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-09.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">Brian Villalobos</Link>
                            </p>
                            <span className="fs-13 d-inline-flex align-items-center">
                              Exp : 5+ Years
                              <i className="ti ti-circle-filled fs-4 mx-2 text-primary" />
                              USA
                            </span>
                          </div>
                        </div>
                        <span className="badge badge-secondary badge-xs">
                          UI/UX Designer
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-32.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">Anthony Lewis</Link>
                            </p>
                            <span className="fs-13 d-inline-flex align-items-center">
                              Exp : 4+ Years
                              <i className="ti ti-circle-filled fs-4 mx-2 text-primary" />
                              USA
                            </span>
                          </div>
                        </div>
                        <span className="badge badge-info badge-xs">
                          Python Developer
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-32.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">Stephan Peralt</Link>
                            </p>
                            <span className="fs-13 d-inline-flex align-items-center">
                              Exp : 6+ Years
                              <i className="ti ti-circle-filled fs-4 mx-2 text-primary" />
                              USA
                            </span>
                          </div>
                        </div>
                        <span className="badge badge-pink badge-xs">
                          Android Developer
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-0">
                        <div className="d-flex align-items-center">
                          <Link to="#"
                            className="avatar overflow-hidden flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-34.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2 overflow-hidden">
                            <p className="text-dark fw-medium text-truncate mb-0">
                              <Link to="#">Doglas Martini</Link>
                            </p>
                            <span className="fs-13 d-inline-flex align-items-center">
                              Exp : 2+ Years
                              <i className="ti ti-circle-filled fs-4 mx-2 text-primary" />
                              USA
                            </span>
                          </div>
                        </div>
                        <span className="badge badge-purple badge-xs">
                          React Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Jobs Applicants */}
            {/* Employees */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Employees</h5>
                  <Link to="employees.html" className="btn btn-light btn-md mb-2">
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
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-32.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="#">Anthony Lewis</Link>
                                </h6>
                                <span className="fs-12">Finance</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-secondary-transparent badge-xs">
                              Finance
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-09.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="#">Brian Villalobos</Link>
                                </h6>
                                <span className="fs-12">PHP Developer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-danger-transparent badge-xs">
                              Development
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-01.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="#">Stephan Peralt</Link>
                                </h6>
                                <span className="fs-12">Executive</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-info-transparent badge-xs">
                              Marketing
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-34.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="#">Doglas Martini</Link>
                                </h6>
                                <span className="fs-12">Project Manager</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-purple-transparent badge-xs">
                              Manager
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-0">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-37.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="#">Anthony Lewis</Link>
                                </h6>
                                <span className="fs-12">UI/UX Designer</span>
                              </div>
                            </div>
                          </td>
                          <td className="border-0">
                            <span className="badge badge-pink-transparent badge-xs">
                              UI/UX Design
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Employees */}
            {/* Todo */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Todo</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2 me-2">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        Today
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
                            Today
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link to="#"
                      className="btn btn-primary btn-icon btn-xs rounded-circle d-flex align-items-center justify-content-center p-0 mb-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_todo"
                    >
                      <i className="ti ti-plus fs-16" />
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div className={`d-flex align-items-center todo-item border p-2 br-5 mb-2 ${isTodo[0] ? 'todo-strike' : ''}`}>
                    <i className="ti ti-grid-dots me-2" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="todo1"
                        onChange={() => toggleTodo(0)}
                      />
                      <label className="form-check-label fw-medium" htmlFor="todo1">
                        Add Holidays
                      </label>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center todo-item border p-2 br-5 mb-2 ${isTodo[1] ? 'todo-strike' : ''}`}>
                    <i className="ti ti-grid-dots me-2" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="todo2"
                        onChange={() => toggleTodo(1)}
                      />
                      <label className="form-check-label fw-medium" htmlFor="todo2">
                        Add Meeting to Client
                      </label>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center todo-item border p-2 br-5 mb-2 ${isTodo[2] ? 'todo-strike' : ''}`}>
                    <i className="ti ti-grid-dots me-2" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="todo3"
                        onChange={() => toggleTodo(2)}
                      />
                      <label className="form-check-label fw-medium" htmlFor="todo3">
                        Chat with Adrian
                      </label>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center todo-item border p-2 br-5 mb-2 ${isTodo[3] ? 'todo-strike' : ''}`}>
                    <i className="ti ti-grid-dots me-2" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="todo4"
                        onChange={() => toggleTodo(3)}
                      />
                      <label className="form-check-label fw-medium" htmlFor="todo4">
                        Management Call
                      </label>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center todo-item border p-2 br-5 mb-2 ${isTodo[4] ? 'todo-strike' : ''}`}>
                    <i className="ti ti-grid-dots me-2" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="todo5"
                        onChange={() => toggleTodo(4)}
                      />
                      <label className="form-check-label fw-medium" htmlFor="todo5">
                        Add Payroll
                      </label>
                    </div>
                  </div>
                  <div className={`d-flex align-items-center todo-item border p-2 br-5 mb-2 ${isTodo[5] ? 'todo-strike' : ''}`}>
                    <i className="ti ti-grid-dots me-2" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="todo6"
                        onChange={() => toggleTodo(5)}
                      />
                      <label className="form-check-label fw-medium" htmlFor="todo6">
                        Add Policy for Increment{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Todo */}
          </div>
          <div className="row">
            {/* Sales Overview */}
            <div className="col-xl-7 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Sales Overview</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white border-0 btn-sm d-inline-flex align-items-center fs-13 me-2"
                        data-bs-toggle="dropdown"
                      >
                        All Departments
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            UI/UX Designer
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            HR Manager
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Junior Tester
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center mb-1">
                      <p className="fs-13 text-gray-9 me-3 mb-0">
                        <i className="ti ti-square-filled me-2 text-primary" />
                        Income
                      </p>
                      <p className="fs-13 text-gray-9 mb-0">
                        <i className="ti ti-square-filled me-2 text-gray-2" />
                        Expenses
                      </p>
                    </div>
                    <p className="fs-13 mb-1">Last Updated at 11:30PM</p>
                  </div>
                  <ReactApexChart
                    id="sales-income"
                    options={salesIncome}
                    series={salesIncome.series}
                    type="bar"
                    height={270}
                  />
                </div>
              </div>
            </div>
            {/* /Sales Overview */}
            {/* Invoices */}
            <div className="col-xl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Invoices</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white btn-sm d-inline-flex align-items-center fs-13 me-2 border-0"
                        data-bs-toggle="dropdown"
                      >
                        Invoices
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Invoices
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Paid
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            className="dropdown-item rounded-1"
                          >
                            Unpaid
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
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
                            Today
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="table-responsive pt-1">
                    <table className="table table-nowrap table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <Link to="invoice-details.html" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-39.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="invoice-details.html">
                                    Redesign Website
                                  </Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  #INVOO2
                                  <i className="ti ti-circle-filled fs-4 mx-1 text-primary" />
                                  Logistics
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fs-13 mb-1">Payment</p>
                            <h6 className="fw-medium">$3560</h6>
                          </td>
                          <td className="px-0 text-end">
                            <span className="badge badge-danger-transparent badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Unpaid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <Link to="invoice-details.html" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-40.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="invoice-details.html">
                                    Module Completion
                                  </Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  #INVOO5
                                  <i className="ti ti-circle-filled fs-4 mx-1 text-primary" />
                                  Yip Corp
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fs-13 mb-1">Payment</p>
                            <h6 className="fw-medium">$4175</h6>
                          </td>
                          <td className="px-0 text-end">
                            <span className="badge badge-danger-transparent badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Unpaid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <Link to="invoice-details.html" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-55.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="invoice-details.html">
                                    Change on Emp Module
                                  </Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  #INVOO3
                                  <i className="ti ti-circle-filled fs-4 mx-1 text-primary" />
                                  Ignis LLP
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fs-13 mb-1">Payment</p>
                            <h6 className="fw-medium">$6985</h6>
                          </td>
                          <td className="px-0 text-end">
                            <span className="badge badge-danger-transparent badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Unpaid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <Link to="invoice-details.html" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-42.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="invoice-details.html">
                                    Changes on the Board
                                  </Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  #INVOO2
                                  <i className="ti ti-circle-filled fs-4 mx-1 text-primary" />
                                  Ignis LLP
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fs-13 mb-1">Payment</p>
                            <h6 className="fw-medium">$1457</h6>
                          </td>
                          <td className="px-0 text-end">
                            <span className="badge badge-danger-transparent badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Unpaid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <Link to="invoice-details.html" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-44.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="invoice-details.html">
                                    Hospital Management
                                  </Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  #INVOO6
                                  <i className="ti ti-circle-filled fs-4 mx-1 text-primary" />
                                  HCL Corp
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fs-13 mb-1">Payment</p>
                            <h6 className="fw-medium">$6458</h6>
                          </td>
                          <td className="px-0 text-end">
                            <span className="badge badge-success-transparent badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Paid
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Link to="invoice.html"
                    className="btn btn-light btn-md w-100 mt-2"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            {/* /Invoices */}
          </div>
          <div className="row">
            {/* Projects */}
            <div className="col-xxl-8 col-xl-7 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Projects</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
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
                            Today
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Team</th>
                          <th>Hours</th>
                          <th>Deadline</th>
                          <th>Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to="project-details.html" className="link-default">
                              PRO-001
                            </Link>
                          </td>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="project-details.html">
                                Office Management App
                              </Link>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-02.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-03.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-05.jpg"
                                  alt="img"
                                />
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1">15/255 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "40%" }}
                              />
                            </div>
                          </td>
                          <td>12/09/2024</td>
                          <td>
                            <span className="badge badge-danger d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              High
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="project-details.html" className="link-default">
                              PRO-002
                            </Link>
                          </td>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="project-details.html">Clinic Management </Link>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-07.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-08.jpg"
                                  alt="img"
                                />
                              </span>
                              <Link
                                className="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium"
                                to="#"
                              >
                                +1
                              </Link>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1">15/255 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "40%" }}
                              />
                            </div>
                          </td>
                          <td>24/10/2024</td>
                          <td>
                            <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="project-details.html" className="link-default">
                              PRO-003
                            </Link>
                          </td>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="project-details.html">
                                Educational Platform
                              </Link>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-08.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-09.jpg"
                                  alt="img"
                                />
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1">40/255 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </td>
                          <td>18/02/2024</td>
                          <td>
                            <span className="badge badge-pink d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              Medium
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="project-details.html" className="link-default">
                              PRO-004
                            </Link>
                          </td>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="project-details.html">
                                Chat &amp; Call Mobile App
                              </Link>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-11.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-12.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-13.jpg"
                                  alt="img"
                                />
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1">35/155 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </td>
                          <td>19/02/2024</td>
                          <td>
                            <span className="badge badge-danger d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              High
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="project-details.html" className="link-default">
                              PRO-005
                            </Link>
                          </td>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="project-details.html">
                                Travel Planning Website
                              </Link>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-17.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-18.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-19.jpg"
                                  alt="img"
                                />
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1">50/235 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </td>
                          <td>18/02/2024</td>
                          <td>
                            <span className="badge badge-pink d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              Medium
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="project-details.html" className="link-default">
                              PRO-006
                            </Link>
                          </td>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="project-details.html">
                                Service Booking Software
                              </Link>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-08.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-09.jpg"
                                  alt="img"
                                />
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1">40/255 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </td>
                          <td>20/02/2024</td>
                          <td>
                            <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-0">
                            <Link to="project-details.html" className="link-default">
                              PRO-008
                            </Link>
                          </td>
                          <td className="border-0">
                            <h6 className="fw-medium">
                              <Link to="project-details.html">
                                Travel Planning Website
                              </Link>
                            </h6>
                          </td>
                          <td className="border-0">
                            <div className="avatar-list-stacked avatar-group-sm">
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-15.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-16.jpg"
                                  alt="img"
                                />
                              </span>
                              <span className="avatar avatar-rounded">
                                <ImageWithBasePath
                                  className="border border-white"
                                  src="assets/img/profiles/avatar-17.jpg"
                                  alt="img"
                                />
                              </span>
                              <Link
                                className="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium"
                                to="#"
                              >
                                +2
                              </Link>
                            </div>
                          </td>
                          <td className="border-0">
                            <p className="mb-1">15/255 Hrs</p>
                            <div
                              className="progress progress-xs w-100"
                              role="progressbar"
                              aria-valuenow={45}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "45%" }}
                              />
                            </div>
                          </td>
                          <td className="border-0">17/10/2024</td>
                          <td className="border-0">
                            <span className="badge badge-pink d-inline-flex align-items-center badge-xs">
                              <i className="ti ti-point-filled me-1" />
                              Medium
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Projects */}
            {/* Tasks Statistics */}
            <div className="col-xxl-4 col-xl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Tasks Statistics</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
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
                            Today
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo position-relative mb-4">
                    <Chart type="doughnut" data={semidonutData} options={semidonutOptions} className="w-full md:w-30rem semi-donut-chart" />
                    <div className="position-absolute text-center attendance-canvas">
                      <p className="fs-13 mb-1">Total Tasks</p>
                      <h3>124/165</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="border-end text-center me-2 pe-2 mb-3">
                      <p className="fs-13 d-inline-flex align-items-center mb-1">
                        <i className="ti ti-circle-filled fs-10 me-1 text-warning" />
                        Ongoing
                      </p>
                      <h5>24%</h5>
                    </div>
                    <div className="border-end text-center me-2 pe-2 mb-3">
                      <p className="fs-13 d-inline-flex align-items-center mb-1">
                        <i className="ti ti-circle-filled fs-10 me-1 text-info" />
                        On Hold{" "}
                      </p>
                      <h5>10%</h5>
                    </div>
                    <div className="border-end text-center me-2 pe-2 mb-3">
                      <p className="fs-13 d-inline-flex align-items-center mb-1">
                        <i className="ti ti-circle-filled fs-10 me-1 text-danger" />
                        Overdue
                      </p>
                      <h5>16%</h5>
                    </div>
                    <div className="text-center me-2 pe-2 mb-3">
                      <p className="fs-13 d-inline-flex align-items-center mb-1">
                        <i className="ti ti-circle-filled fs-10 me-1 text-success" />
                        Ongoing
                      </p>
                      <h5>40%</h5>
                    </div>
                  </div>
                  <div className="bg-dark br-5 p-3 pb-0 d-flex align-items-center justify-content-between">
                    <div className="mb-2">
                      <h4 className="text-success">389/689 hrs</h4>
                      <p className="fs-13 mb-0">Spent on Overall Tasks This Week</p>
                    </div>
                    <Link to="tasks.html"
                      className="btn btn-sm btn-light mb-2 text-nowrap"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Tasks Statistics */}
          </div>
          <div className="row">
            {/* Schedules */}
            <div className="col-xxl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Schedules</h5>
                  <Link to="candidates.html" className="btn btn-light btn-md mb-2">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="bg-light p-3 br-5 mb-4">
                    <span className="badge badge-secondary badge-xs mb-1">
                      UI/ UX Designer
                    </span>
                    <h6 className="mb-2 text-truncate">
                      Interview Candidates - UI/UX Designer
                    </h6>
                    <div className="d-flex align-items-center flex-wrap">
                      <p className="fs-13 mb-1 me-2">
                        <i className="ti ti-calendar-event me-2" />
                        Thu, 15 Feb 2025
                      </p>
                      <p className="fs-13 mb-1">
                        <i className="ti ti-clock-hour-11 me-2" />
                        01:00 PM - 02:20 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top mt-2 pt-3">
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-49.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-13.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-11.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-22.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-58.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium"
                          to="#"
                        >
                          +3
                        </Link>
                      </div>
                      <Link to="#" className="btn btn-primary btn-xs">
                        Join Meeting
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-3 br-5 mb-0">
                    <span className="badge badge-dark badge-xs mb-1">
                      IOS Developer
                    </span>
                    <h6 className="mb-2 text-truncate">
                      Interview Candidates - IOS Developer
                    </h6>
                    <div className="d-flex align-items-center flex-wrap">
                      <p className="fs-13 mb-1 me-2">
                        <i className="ti ti-calendar-event me-2" />
                        Thu, 15 Feb 2025
                      </p>
                      <p className="fs-13 mb-1">
                        <i className="ti ti-clock-hour-11 me-2" />
                        02:00 PM - 04:20 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top mt-2 pt-3">
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-49.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-13.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-11.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-22.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/users/user-58.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-10 fw-medium"
                          to="#"
                        >
                          +3
                        </Link>
                      </div>
                      <Link to="#" className="btn btn-primary btn-xs">
                        Join Meeting
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Schedules */}
            {/* Recent Activities */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Recent Activities</h5>
                  <Link to="activity.html" className="btn btn-light btn-md mb-2">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="recent-item">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center w-100">
                        <Link to="#"
                          className="avatar  flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-38.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-medium text-truncate">
                              <Link to="#">Matt Morgan</Link>
                            </h6>
                            <p className="fs-13">05:30 PM</p>
                          </div>
                          <p className="fs-13">
                            Added New Project{" "}
                            <span className="text-primary">HRMS Dashboard</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent-item">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center w-100">
                        <Link to="#"
                          className="avatar  flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-01.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-medium text-truncate">
                              <Link to="#">Jay Ze</Link>
                            </h6>
                            <p className="fs-13">05:00 PM</p>
                          </div>
                          <p className="fs-13">Commented on Uploaded Document</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent-item">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center w-100">
                        <Link to="#"
                          className="avatar  flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-19.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-medium text-truncate">
                              <Link to="#">Mary Donald</Link>
                            </h6>
                            <p className="fs-13">05:30 PM</p>
                          </div>
                          <p className="fs-13">Approved Task Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent-item">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center w-100">
                        <Link to="#"
                          className="avatar  flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-11.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-medium text-truncate">
                              <Link to="#">George David</Link>
                            </h6>
                            <p className="fs-13">06:00 PM</p>
                          </div>
                          <p className="fs-13">
                            Requesting Access to Module Tickets
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent-item">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center w-100">
                        <Link to="#"
                          className="avatar  flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-20.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-medium text-truncate">
                              <Link to="#">Aaron Zeen</Link>
                            </h6>
                            <p className="fs-13">06:30 PM</p>
                          </div>
                          <p className="fs-13">Downloaded App Reportss</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent-item">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center w-100">
                        <Link to="#"
                          className="avatar  flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-08.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-fill">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-medium text-truncate">
                              <Link to="#">Hendry Daniel</Link>
                            </h6>
                            <p className="fs-13">05:30 PM</p>
                          </div>
                          <p className="fs-13">
                            Completed New Project <span>HMS</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Recent Activities */}
            {/* Birthdays */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                  <h5 className="mb-2">Birthdays</h5>
                  <Link to="#"
                    className="btn btn-light btn-md mb-2"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body pb-1">
                  <h6 className="mb-2">Today</h6>
                  <div className="bg-light p-2 border border-dashed rounded-top mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar">
                          <ImageWithBasePath
                            src="assets/img/users/user-38.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 overflow-hidden">
                          <h6 className="fs-medium ">Andrew Jermia</h6>
                          <p className="fs-13">IOS Developer</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-secondary btn-xs"
                      >
                        <i className="ti ti-cake me-1" />
                        Send
                      </Link>
                    </div>
                  </div>
                  <h6 className="mb-2">Tomorow</h6>
                  <div className="bg-light p-2 border border-dashed rounded-top mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar">
                          <ImageWithBasePath
                            src="assets/img/users/user-10.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 overflow-hidden">
                          <h6 className="fs-medium">
                            <Link to="#">Mary Zeen</Link>
                          </h6>
                          <p className="fs-13">UI/UX Designer</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-secondary btn-xs"
                      >
                        <i className="ti ti-cake me-1" />
                        Send
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-2 border border-dashed rounded-top mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar">
                          <ImageWithBasePath
                            src="assets/img/users/user-09.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 overflow-hidden">
                          <h6 className="fs-medium ">
                            <Link to="#">Antony Lewis</Link>
                          </h6>
                          <p className="fs-13">Android Developer</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-secondary btn-xs"
                      >
                        <i className="ti ti-cake me-1" />
                        Send
                      </Link>
                    </div>
                  </div>
                  <h6 className="mb-2">25 Jan 2025</h6>
                  <div className="bg-light p-2 border border-dashed rounded-top mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar">
                          <ImageWithBasePath
                            src="assets/img/users/user-12.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </span>
                        <div className="ms-2 overflow-hidden">
                          <h6 className="fs-medium ">Doglas Martini</h6>
                          <p className="fs-13">.Net Developer</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-secondary btn-xs"
                      >
                        <i className="ti ti-cake me-1" />
                        Send
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Birthdays */}
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
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

