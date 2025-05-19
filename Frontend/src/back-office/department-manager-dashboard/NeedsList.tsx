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
    email?: string;
    _id?: string;
  } | null;
  position: string;
  department: string;
  importance: string;
  quantity: number;
  description: string;
  requirements: string[];
  experience: number;
  requestCreated: boolean;
  status: string;
  teamLead: {
    team?: string;
  };
  typeContrat: string;
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
  requestCreated: false,
  status: "PENDING",
  teamLead: { team: "" },
  typeContrat: ""
});

const NeedsList: React.FC = () => {
  const { user, userId, profileData } = useAuth();
  
  const [data, setData] = useState<RequestData[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedImportance, setSelectedImportance] = useState<string>("");
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  
  const [formData, setFormData] = useState<Omit<RequestData, '_id' | 'createdAt' | 'updatedAt'>>(
    createEmptyRequest(userId, profileData?.department || user?.department)
  );
  const [currentRequestId, setCurrentRequestId] = useState<string>("");
  const [requirementInput, setRequirementInput] = useState<string>("");
  const [requestToDelete, setRequestToDelete] = useState<string>("");

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
      const token = localStorage.getItem('token');
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
        console.log('API Response (User):', data);
        setUserData(data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/need/`);
      console.log("API Response (Needs):", response.data);
      const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;
      
      // Log team field specifically from teamLead
      console.log("Team Fields in Fetched Data:", fetchedData.map(request => request.teamLead?.team));
      
      console.log("User ID:", userId);
      console.log("Fetched Data:", fetchedData);
      console.log("User Object:", user);
      console.log("User Department:", user ? user.department : "User not found");
      const filteredData = user ? fetchedData.filter(request => request.department === user.department) : [];
      console.log("Filtered Data:", filteredData);
      
      // Map the response to match RequestData structure
      const mappedData = filteredData.map(item => ({
        ...item,
        teamLead: item.teamLead || { team: "" }
      }));
      setData(mappedData);
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
      title: "Team",
      dataIndex: "team",
      render: (text: string, record: RequestData) => {
        console.log(`Rendering team for record ${record._id}:`, record.teamLead?.team);
        return <span>{record.teamLead?.team || "No Team Assigned"}</span>;
      },
      sorter: (a: RequestData, b: RequestData) => (a.teamLead?.team || "").localeCompare(b.teamLead?.team || ""),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: RequestData, b: RequestData) => a.department.localeCompare(b.department),
    },
    {
      title: "Type Contrat",
      dataIndex: "typeContrat",
      render: (text: string) => (
        <span>{text || "N/A"}</span>
      ),
      sorter: (a: RequestData, b: RequestData) => a.typeContrat.localeCompare(b.typeContrat),
    },
    {
      title: "Position",
      dataIndex: "position",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: RequestData, b: RequestData) => a.position.localeCompare(b.position),
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
      title: "Request Created",
      dataIndex: "requestCreated",
      render: (text: boolean) => (
        <span className={`badge badge-soft-${text ? 'success' : 'warning'}`}>
          {text ? 'Yes' : 'No'}
        </span>
      ),
      sorter: (a: RequestData, b: RequestData) => Number(a.requestCreated) - Number(b.requestCreated),
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

  return (
    <div className="page-wrapper">
      <div className="content">
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
         
        </div>

        <div className="card">
        

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