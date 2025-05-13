import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { all_routes } from "../../routing-module/router/all_routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactApexChart from "react-apexcharts";
import CircleProgressSmall from "./circleProgressSmall";

import { Calendar } from 'primereact/calendar';
import { DatePicker } from "antd";
import CommonSelect from "../../core/common/commonSelect";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import { ApexOptions } from 'apexcharts';


interface Skill {
  name: string;
  count: number;
  percentage: string; // You can change this to a number if you prefer
}
interface CandidateCount {
  year: number;
  count: number;
  _id:number;
}

interface JobPostCount {
  _id: string;     // Department name
  total: number;   // Total job posts in that department

}




// Define the interface for request data
interface RequestData {
  _id: string;
  department_Manager: {
    id?:string;
    firstName?: string;
    lastName?: string;
    email?: string; // Added email field
  } | null;
  position: string;
  department: string;
  importance: string;
  quantity: number;
  description: string;
  requirements: string[];
  experience: number;
  jobPostCreated: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
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



// Define UserData interface to match the API response structure
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  
  profile?: {
    address: string;
    profileImage?: string;
    cv?: string;
    education: any[];
    experience: any[];
    skills: any[];
    socialLinks: any[];
  };
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
  total:Number;
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
const HRDashboard = () => {
  const routes = all_routes;

  const [date, setDate] = useState(new Date('2024'));

  

  const [performanceChartData, setPerformanceChartData] = useState<ApexOptions>({
    series: [{
      name: "Performance",
      data: [],
    }],
    chart: {
      height: 288,
      type: 'area',
      zoom: {
        enabled: false,
      },
    },
    colors: ['#03C95A'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: '',
      align: 'left',
    },
    xaxis: {
      categories: [ ],
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      labels: {
        formatter: (val: number) => `${val}Candidates`,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
  });




  
 

  

const [jobPosts, setJobPosts] = useState<JobPost[]>([]); // Array of JobPost objects

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/jobs/latest-five`);
        setJobPosts(response.data); // Assuming response contains an array of job posts
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };
    fetchJobs();
  }, []);





  const [jobPostCounts, setJobPostCounts] = useState<JobPostCount[]>([]);
  const [totalJobPosts, setTotalJobPosts] = useState<number>(0);
  useEffect(() => {
    const fetchJobPostCounts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/skills/count`); // Adjust the URL if needed
        const data = await response.json();
        setJobPostCounts(data.countsByDepartment);
        setTotalJobPosts(data.totalJobPosts);
      } catch (error) {
        console.error("Error fetching job post counts:", error);
      }
    };

    fetchJobPostCounts();
  }, []);





  const [jobPostCounts2, setJobPostCounts2] = useState<{ total: number; published: number; closed: number; pending: number }>({
    total: 0,
    published: 0, // This will refer to OPEN status
    closed: 0,
    pending: 0,
  });


  useEffect(() => {
    const fetchJobPostCounts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/skills/count/status`); // Adjust the URL if needed
        const data = await response.json();

        const totalJobPosts = data.totalJobPosts;
        const publishedCount = data.countsByStatus.find((status: any) => status._id === 'OPEN')?.total || 0;
        const closedCount = data.countsByStatus.find((status: any) => status._id === 'CLOSED')?.total || 0;
        const pendingCount = data.countsByStatus.find((status: any) => status._id === 'PENDING')?.total || 0;

        setJobPostCounts2({
          total: totalJobPosts,
          published: publishedCount,
          closed: closedCount,
          pending: pendingCount,
        });
      } catch (error) {
        console.error("Error fetching job post counts:", error);
      }
    };

    fetchJobPostCounts();
  }, []);





 // Example chart options (replace with your actual options)
 const leavesChart = {
  chart: {
    type: 'donut' as const,
  },
  series: [jobPostCounts2.published, jobPostCounts2.closed, jobPostCounts2.pending],
  labels: ['Published', 'Closed', 'Pending'],
};



const [userData, setUserData] = useState<any>(null); 

useEffect(() => {
  const fetchUserData = async () => {
    const token = localStorage.getItem('token'); // Replace 'token' with the actual key if different

    if (!token) {
      console.error('No token found in session storage.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/user/${token}`, {
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





const [counts, setCounts] = useState({
  lastYearCount: 0,
  yearBeforeLastCount: 0,
  percentageChangeLastToYearBeforeLast: "0.00",
  percentageChangeYearBeforeLastToLast: "0.00",
});

  // Fetch data and update chart data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/count-per-year`);
      console.log(response.data); // Log the response data
  
      const data = response.data; // Access the whole response
  
      // Get the counts array
      const counts = data.counts;
      const lastYearCount = data.lastYearCount; // Get last year count
      const yearBeforeLastCount = data.yearBeforeLastCount; // Get year before last count
      const percentageChangeLastToYearBeforeLast = data.percentageChangeLastToYearBeforeLast; // Percentage change last to year before last
      const percentageChangeYearBeforeLastToLast = data.percentageChangeYearBeforeLastToLast; // Percentage change year before last to last
  
      const years = counts.map((item: CandidateCount) => item._id); // Specify the type here
      const countValues = counts.map((item: CandidateCount) => item.count); // Specify the type here
      console.log(years, countValues); // Log the mapped arrays
  
      // Update the performance chart data
      setPerformanceChartData((prevState) => {
        const updatedState = {
          ...prevState,
          series: [{
            name: "Performance",
            data: countValues,
          }],
          xaxis: {
            categories: years, // Set the categories to the fetched years
          },
        };
        console.log(updatedState); // Log the updated state
        return updatedState;
      });
  
      // Set additional state for counts and percentage changes
      setCounts({
        lastYearCount,
        yearBeforeLastCount,
        percentageChangeLastToYearBeforeLast,
        percentageChangeYearBeforeLastToLast,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const [data, setData] = useState<RequestData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredDataSource, setFilteredDataSource] = useState<RequestData[]>([]);

 // Fetch data from the API
 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/request/`);
      const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
      
      // Sort the data by createdAt in descending order (latest first)
      const sortedData = fetchedData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      
      // Take only the last 5 items
      const lastFiveData = sortedData.slice(0, 5);

      setData(fetchedData);
      setFilteredDataSource(lastFiveData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);





const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [chartData, setChartData] = useState<{
  options: ApexOptions;
  series: { name: string; data: number[] }[];
}>({
  options: {
    chart: {
      type: "bar",
      height: 220,
    },
    xaxis: {
      categories: [],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
  },
  series: [
    {
      name: "Requests",
      data: [],
    },
  ],
});

const [totalRequests, setTotalRequests] = useState(0);
const [selectedFilter, setSelectedFilter] = useState("This Week");

const fetchData2 = (filter: string) => {
  setLoading(true);
  setError(null);

  // Example API call with filter as query parameter
  fetch(`${process.env.REACT_APP_BACKEND_URL}/request/stat/request-stats?filter=${filter}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const categories = data.departmentStats.map((dept: { _id: string }) => dept._id);
      const seriesData = data.departmentStats.map((dept: { count: number }) => dept.count);

      setChartData({
        options: {
          chart: {
            type: "bar",
            height: 220,
          },
          xaxis: {
            categories: categories,
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#008FFB"],
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
            },
          },
        },
        series: [
          {
            name: "Requests",
            data: seriesData,
          },
        ],
      });

      setTotalRequests(data.totalRequests);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching request stats:", error);
      setError(error.message);
      setLoading(false);
    });
};

useEffect(() => {
  fetchData2(selectedFilter); // Fetch data on initial load with the default filter
}, [selectedFilter]);

const handleFilterChange = (filter: string) => {
  setSelectedFilter(filter);
};

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">HR Dashboard</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Employee Dashboard
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            
              
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          
          <div className="row">
      


          <div className="col-xl-4 d-flex">
      <div className="card position-relative flex-fill">
        <div className="card-header bg-dark">
          <div className="d-flex align-items-center">
          <span className="avatar avatar-lg avatar-rounded border border-white border-2 flex-shrink-0 me-2">
            
          <img src={imageUrl || "assets/img/users/user-01.jpg"} alt="User Image" className="img-fluid" />
            </span>
            <div>
              <h5 className="text-white mb-1">{userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}</h5>
              <div className="d-flex align-items-center">
                <p className="text-white fs-12 mb-0">
                  {userData?.role || 'Loading...'}
                </p>
                <span className="mx-1">
                  <i className="ti ti-point-filled text-primary" />
                </span>
                <p className="fs-12">{userData?.phoneNumber || 'Loading...'}</p>
              </div>
            </div>
          </div>
          <Link
            to="#"
            className="btn btn-icon btn-sm text-white rounded-circle edit-top"
          >
            <i className="ti ti-edit" />
          </Link>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <span className="d-block mb-1 fs-13">Phone Number</span>
            <p className="text-gray-9">{userData?.phoneNumber || 'Loading...'}</p>
          </div>
          <div className="mb-3">
            <span className="d-block mb-1 fs-13">Email Address</span>
            <p className="text-gray-9">{userData?.email || 'Loading...'}</p>
          </div>
          <div className="mb-3">
            <span className="d-block mb-1 fs-13">Joined on</span>
            <p className="text-gray-9">{new Date(userData?.createDate).toLocaleDateString() || 'Loading...'}</p>
          </div>
        </div>
      </div>
    </div>




    <div className="col-xxl-4 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 className="mb-2">Requests By Department</h5>
          <div className="dropdown mb-2">
            <button
              className="btn btn-white border btn-sm d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-1" />
              {selectedFilter}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleFilterChange("This Week")}
                >
                  This Week
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleFilterChange("This Month")}
                >
                  This Month
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleFilterChange("Last Month")}
                >
                  Last Month
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-danger">Error: {error}</p>
          ) : (
            <>
              <ReactApexChart
                id="emp-department"
                type="bar"
                options={chartData.options}
                series={chartData.series}
                height={220}
              />
              <p className="fs-13">
                <i className="ti ti-circle-filled me-2 fs-8 text-primary" />
                Total Requests:{" "}
                <span className="text-primary fw-bold">{totalRequests}</span>
              </p>
              <p className="fs-13">
                Showing data for <strong>{selectedFilter}</strong>.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
            


            <div className="col-xl-4 d-flex">
  <div className="row flex-fill">
    {jobPostCounts.map((jobPost, index) => (
      <div className="col-xl-6 col-md-6" key={jobPost._id}>
        <div className="card">
          <div className="card-body">
            <div className="border-bottom mb-3 pb-2">
              <span className="avatar avatar-sm bg-primary mb-2">
                <i className="ti ti-clock-stop" />
              </span>
              <h2 className="mb-2">
                {jobPost.total} / <span className="fs-20 text-gray-5">{totalJobPosts}</span>
              </h2>
              <p className="fw-medium text-truncate">{jobPost._id}</p>
            </div>
            <div>
              <p className="d-flex align-items-center fs-13">
                <span className="avatar avatar-xs rounded-circle bg-success flex-shrink-0 me-2">
                  <i className="ti ti-arrow-up fs-12" />
                </span>
                <span>{/* Add percentage change or any other metric here */}5% This Week</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
    <div className="col-xl-6 col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="border-bottom mb-3 pb-2">
            <span className="avatar avatar-sm bg-primary mb-2">
              <i className="ti ti-clock-stop" />
            </span>
            <h2 className="mb-2">
              Total: <span className="fs-20 text-gray-5">{totalJobPosts}</span>
            </h2>
            <br />
          </div>
          <div>
            <p className="d-flex align-items-center fs-13">
              <span className="avatar avatar-xs rounded-circle bg-success flex-shrink-0 me-2">
                <i className="ti ti-arrow-up fs-12" />
              </span>
              <span>{/* Add percentage change or any other metric here */}5% This Week</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>



















          <div className="row">
     

          <div className="col-xl-6 d-flex">
  <div className="card flex-fill">
    <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
      <h5 className="mb-2">Requests Received</h5>
      <Link to="/requests" className="btn btn-light btn-md mb-2">
        View All
      </Link>
    </div>
    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table table-nowrap mb-0">
          <thead>
            <tr>
              <th>Position</th>
              <th>Department</th>
              <th>Importance</th>
              <th>Job Post Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredDataSource.length > 0 ? (
              filteredDataSource.map((job) => (
                <tr key={job._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to={`/manager-detail/${job.department_Manager?.id || '#'}`} className="avatar">
                        <ImageWithBasePath
                          src="assets/img/icons/logo.png" // Placeholder image
                          className="img-fluid w-auto h-auto"
                          alt="Job Icon"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fw-medium">
                          <Link to={`/manager-detail/${job.department_Manager?.id || '#'}`}>
                            {job.position}
                          </Link>
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
                        job.importance === 'LOW'
                          ? 'success'
                          : job.importance === 'HIGH'
                          ? 'danger'
                          : 'warning' // For MEDIUM importance
                      }-transparent badge-xs`}
                    >
                      {job.importance}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge badge-${
                        job.jobPostCreated ? 'success' : 'danger'
                      }-transparent badge-s`}
                    >
                      {job.jobPostCreated ? 'Yes' : 'No'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No Requests Received</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
           

    <div className="col-xl-6  d-flex">
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
                  <th>DeadLine</th>
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
                      <td>
                        <span className="badge badge-secondary-transparent badge-s">
                          {job.deadline}
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












          </div>

  {/* /Performance */}

          <div className="row">
            {/* Peformance */}

            <div className="col-xl-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
            <h5>Performance</h5>
            <div className="dropdown">
              <Link
                to="#"
                className="btn btn-white border btn-sm d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-1" />
                2024
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">2024</Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">2023</Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">2022</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
          <div className="bg-light d-flex align-items-center rounded p-3">
  <h3 className="me-2">{counts.lastYearCount} Candidates</h3>
  <span className="badge bg-success text-white rounded-pill me-1">
    {counts.percentageChangeLastToYearBeforeLast}%
  </span>
  <span>vs last year</span>
</div>
            <ReactApexChart
              id="performance_chart2"
              options={performanceChartData}
              series={performanceChartData.series}
              type="area"
              height={288}
            />
          </div>
        </div>
      </div>
    </div>


            {/* Jobs Applicants */}
        
            {/* /Jobs Applicants */}
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
      <>
       
      </>

    </>


  );
};

export default HRDashboard;