import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Datatable from "../../core/common/dataTable/index";
import { all_routes } from "../../routing-module/router/all_routes";
import PredefinedDateRanges from "../../core/common/datePicker";
import TooltipOption from "../../core/common/tooltipOption";
import { useAuth } from "../../routing-module/AuthContext";
import { toast } from "react-hot-toast";

// Define the interface for request data
interface RequestData {
  _id: string;
  department_Manager: {
    firstName?: string;
    lastName?: string;
    _id?: string;
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

// Empty request template
const createEmptyRequest = (userId: string | null, department?: string): Omit<RequestData, '_id' | 'createdAt' | 'updatedAt'> => ({
  department_Manager: userId ? { _id: userId } : null,
  position: "",
  department: department || "",
  importance: "MEDIUM",
  quantity: 1,
  description: "",
  requirements: [],
  experience: 0,
  jobPostCreated: false,
  status: "PENDING"
});

const NeedsList: React.FC = () => {
  // Get authentication context with profileData for department
  const { user, userId, profileData } = useAuth();
  
  const [data, setData] = useState<RequestData[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedImportance, setSelectedImportance] = useState<string>("");
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  
  // Form states
  const [formData, setFormData] = useState<Omit<RequestData, '_id' | 'createdAt' | 'updatedAt'>>(
    createEmptyRequest(userId, profileData?.department || user?.department)
  );
  const [currentRequestId, setCurrentRequestId] = useState<string>("");
  const [requirementInput, setRequirementInput] = useState<string>("");
  const [requestToDelete, setRequestToDelete] = useState<string>("");

  // Update formData when user logs in or profile data changes
  useEffect(() => {
    if (userId) {
      setFormData(prev => ({
        ...prev,
        department_Manager: { _id: userId },
        department: profileData?.department || user?.department || prev.department
      }));
    }
  }, [userId, profileData, user]);




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



const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/need/');
      console.log("API Response:", response.data); // Debug log
      const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
  
      // Retrieve user from local storage
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
  
      // Log user information
      console.log("User ID:", userId); // Debug log
      console.log("Fetched Data:", fetchedData); // Debug log
      console.log("User Object:", user); // Debug log
      console.log("User Department:", user ? user.department : "User not found"); // Log user department
  
      // Filter data based on user department
      const filteredData = user ? fetchedData.filter(request => request.department === user.department) : [];
      console.log("Filtered Data:", filteredData); // Debug log
  
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch requests");
    }
  };
  
  useEffect(() => {
    fetchRequests();
  }, []);






 

  const handleApplyClick = () => {
    if (dropdownMenuRef.current) {
      dropdownMenuRef.current.classList.remove("show");
    }
  };


  
  const columns = [
    {
      title: "Team Lead",
      dataIndex: "teamLead",
      render: (manager: { firstName?: string; lastName?: string; id?: string } | null) => {
        if (manager?.id === userId) {
          return <span className="badge badge-soft-primary">You</span>;
        }
  
        const firstName = manager?.firstName || "Unknown";
        const lastName = manager?.lastName || "Manager";
        const teamLeadId = manager?.id || "unknown";
  
        // Redirect to the specified path with the team lead's ID
        return (
          <Link
            to={`/department-manager-dashboard/team-leader-detail/${teamLeadId}`}
            className="link-primary"
          >
            {firstName} {lastName}
          </Link>
        );
      },
      sorter: (a: RequestData, b: RequestData) =>
        (a.department_Manager?.firstName || "").localeCompare(b.department_Manager?.firstName || ""),
    },
    {
      title: "Email",
      dataIndex: "teamLead",
      render: (manager: { email?: string; id?: string } | null) => {
        if (manager?.id === userId) {
          return <span className="badge badge-soft-primary">You</span>;
        }
  
        const email = manager?.email || "Unknown";
  
        return <Link to="#" className="link-primary">{email}</Link>;
      },
      sorter: (a: RequestData, b: RequestData) =>
        (a.department_Manager?.firstName || "").localeCompare(b.department_Manager?.firstName || ""),
    },
    {
      title: "Position",
      dataIndex: "position",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: RequestData, b: RequestData) => a.position.localeCompare(b.position),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: RequestData, b: RequestData) => a.department.localeCompare(b.department),
    },
    {
      title: "Importance",
      dataIndex: "importance",
      render: (text: string) => (
        <span className={`badge badge-soft-${text === 'HIGH' ? 'danger' : text === 'MEDIUM' ? 'warning' : 'success'} d-inline-flex align-items-center`}>
          <i className="ti ti-circle-filled fs-5 me-1"></i>
          {text}
        </span>
      ),
      sorter: (a: RequestData, b: RequestData) => a.importance.localeCompare(b.importance),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string, record: RequestData) => {
        const statusClass = text === 'APPROVED' ? 'bg-success' : 
                            text === 'REJECTED' ? 'bg-danger' : 
                            'bg-warning';
        return (
          <span className={`badge ${statusClass}`}>
            {text}
          </span>
        );
      },
      sorter: (a: RequestData, b: RequestData) => a.status.localeCompare(b.status),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text: string) => new Date(text).toLocaleDateString(),
      sorter: (a: RequestData, b: RequestData) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: RequestData) => (
        <div className="d-flex align-items-center">
          <Link 
            to={`/need-Detail-dep/${record._id}`}
            className="btn btn-sm btn-icon btn-outline-primary me-2"
            title="View Details"
          >
            <i className="ti ti-eye"></i>
          </Link>
        </div>
      ),
    },
  ];

  useEffect(() => {
    console.log("Current data state:", data);
    console.log("Columns:", columns);
  }, [data, columns]);

  // Add this effect to log when data changes
  useEffect(() => {
    console.log("Current data state:", data);
  }, [data]);

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Needs List</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Request Management</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Requests
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <TooltipOption />
            
          </div>
        </div>

        {/* Filter Section */}
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
            <h4 className="mb-3">Needs List</h4>
            <div className="d-flex align-items-center flex-wrap">
              <div className="input-icon-start mb-3 me-2 position-relative">
                <PredefinedDateRanges />
              </div>
              <div className="dropdown mb-3 me-2">
                <Link
                  to="#"
                  className="btn btn-outline-light bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter me-2" />
                  Filter
                </Link>
                <div className="dropdown-menu drop-width" ref={dropdownMenuRef}>
                  <form>
                    <div className="d-flex align-items-center border-bottom p-3">
                      <h4>Filter</h4>
                    </div>
                    <div className="p-3 border-bottom">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Department</label>
                            <select
                              className="form-select"
                              value={selectedDepartment}
                              onChange={(e) => setSelectedDepartment(e.target.value)}
                            >
                              <option value="">All Departments</option>
                              <option value="ELECTROMECANIQUE">Electromécanique</option>
                              <option value="GENIE-CIVIL">Génie Civil</option>
                              <option value="TIC">TIC</option>
                              <option value="OTHER">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Importance</label>
                            <select
                              className="form-select"
                              value={selectedImportance}
                              onChange={(e) => setSelectedImportance(e.target.value)}
                            >
                              <option value="">All Levels</option>
                              <option value="HIGH">High</option>
                              <option value="MEDIUM">Medium</option>
                              <option value="LOW">Low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 d-flex align-items-center justify-content-end">
                      <Link 
                        to="#" 
                        className="btn btn-light me-3"
                        onClick={() => {
                          setSelectedDepartment("");
                          setSelectedImportance("");
                        }}
                      >
                        Reset
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        onClick={handleApplyClick}
                      >
                        Apply
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="dropdown mb-3">
                <Link
                  to="#"
                  className="btn btn-outline-light bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-sort-ascending-2 me-2" />
                  Sort by A-Z
                </Link>
                <ul className="dropdown-menu p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1 active">
                      Ascending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Descending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Recently Added
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Request List */}
          <div className="card-body p-0 py-3">
            {data.length > 0 ? (
              <Datatable 
                columns={columns} 
                dataSource={data} 
                Selection={true} 
              />
            ) : (
              <div className="text-center p-4">
                <p>No Needs found</p>
              </div>
            )}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="datatable-paginate mt-4" />
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default NeedsList;