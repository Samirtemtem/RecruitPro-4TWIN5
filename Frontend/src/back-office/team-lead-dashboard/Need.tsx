import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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

const Needs: React.FC = () => {
  // Get authentication context with profileData for department
  const { user, userId, profileData } = useAuth();
  const navigate = useNavigate();
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

  // Fetch data from the API
  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/need/');
      console.log("API Response:", response.data); // Debug log
      const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
      
      // Filter requests to only show those from the current user
      console.log("User ID:", userId); // Debug log
      console.log("Fetched Data:", fetchedData); // Debug log
      const userRequests = fetchedData.filter(request => 
        request.teamLead?.id === userId
      );
      
      console.log("Setting filtered data to:", userRequests); // Debug log
      setData(userRequests);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch requests");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

 // Delete request handler
const handleDelete = async (id: string) => {
  try {
    await axios.delete(`http://localhost:5000/need/${id}`);
    toast.success("Request deleted successfully");
    
    // Refresh the page after deletion
    window.location.reload();
  } catch (error) {
    console.error("Error deleting request:", error);
    toast.error("Failed to delete request");
  }
};
  
  // Execute delete after confirmation
  const executeDelete = () => {
    if (requestToDelete) {
      handleDelete(requestToDelete);
      setRequestToDelete("");
    }
  };

  // Update request status handler
  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await axios.put(`http://localhost:5000/need/${id}`, { status });
      toast.success("Status updated successfully");
      fetchRequests();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleApplyClick = () => {
    if (dropdownMenuRef.current) {
      dropdownMenuRef.current.classList.remove("show");
    }
  };

  // Form input handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRequirementAdd = () => {
    if (requirementInput.trim()) {
      setFormData({
        ...formData,
        requirements: [...formData.requirements, requirementInput.trim()]
      });
      setRequirementInput("");
    }
  };

  const handleRequirementRemove = (index: number) => {
    const updatedRequirements = [...formData.requirements];
    updatedRequirements.splice(index, 1);
    setFormData({
      ...formData,
      requirements: updatedRequirements
    });
  };








  // Form submit handlers
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId) {
      toast.error("You must be logged in to create a request");
      return;
    }
    
    try {
      // Ensure the department_Manager is set to the current user
      const requestData = {
        ...formData,
        teamLead: userId
      };
      
      console.log("Creating request with data:", requestData);
      await axios.post('http://localhost:5000/need/create', requestData);
      toast.success("Request created successfully");
      setFormData(createEmptyRequest(userId, profileData?.department || user?.department));
      fetchRequests();
      navigate('/team-lead-dashboard/needs');
    } catch (error) {
      console.error("Error creating request:", error);
      toast.error("Failed to create request");
    }
  };







  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Don't allow changing the department_Manager
      const requestData = {
        ...formData,
        department_Manager: userId
      };
      
      await axios.put(`http://localhost:5000/need/${currentRequestId}`, requestData);
      toast.success("Request updated successfully");
      setFormData(createEmptyRequest(userId, profileData?.department || user?.department));
      fetchRequests();
      navigate('/team-lead-dashboard/needs');
      // Refresh the page after deletion
    window.location.reload();
    } catch (error) {
      console.error("Error updating request:", error);
      toast.error("Failed to update request");
    }
  };










  // Open edit modal with request data
  const openEditModal = (request: RequestData) => {
    setCurrentRequestId(request._id);
    
    // Keep the original department_Manager but update other fields
    setFormData({
      department_Manager: request.department_Manager,
      position: request.position,
      department: request.department,
      importance: request.importance,
      quantity: request.quantity,
      description: request.description,
      requirements: request.requirements,
      experience: request.experience,
      jobPostCreated: false,
      status: request.status
    });
  };

  // Reset form when closing modals
  const resetForm = () => {
    setFormData(createEmptyRequest(userId, profileData?.department || user?.department));
    setCurrentRequestId("");
    setRequirementInput("");
  };

  const columns = [
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
      render: (text: string) => <span>{new Date(text).toLocaleDateString()}</span>,
      sorter: (a: RequestData, b: RequestData) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: RequestData) => (
        <div className="d-flex align-items-center">
          <Link 
            to={`/need-Detail/${record._id}`}
            className="btn btn-sm btn-icon btn-outline-primary me-2"
            title="View Details"
          >
            <i className="ti ti-eye"></i>
          </Link>
          
          {record.status === "PENDING" && (
            <>
              <a 
                href="#"
                className="btn btn-sm btn-icon btn-outline-info me-2"
                data-bs-toggle="modal"
                data-bs-target="#edit_request"
                onClick={() => openEditModal(record)}
                title="Edit"
              >
                <i className="ti ti-edit-circle"></i>
              </a>
              
              <a
                href="#"
                className="btn btn-sm btn-icon btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
                onClick={() => setRequestToDelete(record._id)}
                title="Delete"
              >
                <i className="ti ti-trash-x"></i>
              </a>
            </>
          )}
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
            <h3 className="page-title mb-1"> Articulate your needs</h3>
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
            <div className="mb-2">
              <a 
                href="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_request"
                onClick={resetForm}
              >
                <i className="ti ti-square-rounded-plus me-2" />
                Create 
              </a>
            </div>
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
                <p>No requests found</p>
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
      
  






    {/* Add Request Modal */}
    <div className="modal fade" id="add_request">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ minWidth: "700px" }}>
            <div className="modal-header">
              <h4 className="modal-title">Add Need</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetForm}
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                {/* Display current user as department manager (read-only) */}
              
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Position</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Department</label>
                      <select
                        className="form-select"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="ELECTROMECANIQUE">Electromécanique</option>
                        <option value="GENIE-CIVIL">Génie Civil</option>
                        <option value="TIC">TIC</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea 
                    className="form-control" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Requirements</label>
                  <div className="input-group mb-2">
                    <input 
                      type="text" 
                      className="form-control m-2" 
                      value={requirementInput}
                      onChange={(e) => setRequirementInput(e.target.value)}
                      placeholder="Add a requirement"
                    />
                    <button 
                      type="button" 
                      className="btn" 
                      onClick={handleRequirementAdd}
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="badge bg-light text-dark me-2 mb-2 p-2">
                        {req}
                        <span 
                          className="ms-2 text-danger" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleRequirementRemove(index)}
                        >
                          ×
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Experience (years)</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        min={0}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Quantity</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        min={1}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Importance</label>
                      <select
                        className="form-select"
                        name="importance"
                        value={formData.importance}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="HIGH">High</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LOW">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <div>
                        <span className={`badge ${
                          formData.status === 'APPROVED' ? 'bg-success' : 
                          formData.status === 'REJECTED' ? 'bg-danger' : 
                          'bg-warning'
                        } d-inline-flex align-items-center`}>
                          <i className="ti ti-point-filled me-1"></i>
                          {formData.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hidden field to ensure jobPostCreated is always sent as false */}
                <input type="hidden" name="jobPostCreated" value="false" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-white border me-2"
                  data-bs-dismiss="modal"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Need
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Edit Request Modal */}
      <div className="modal fade" id="edit_request">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ minWidth: "700px" }}>
            <div className="modal-header">
              <h4 className="modal-title">Edit Job Post Request</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetForm}
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                {/* Display current user as department manager (read-only) */}
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Position</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Department</label>
                      <select
                        className="form-select"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="ELECTROMECANIQUE">Electromécanique</option>
                        <option value="GENIE-CIVIL">Génie Civil</option>
                        <option value="TIC">TIC</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea 
                    className="form-control" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Requirements</label>
                  <div className="input-group mb-2">
                    <input 
                      type="text" 
                      className="form-control " 
                      value={requirementInput}
                      onChange={(e) => setRequirementInput(e.target.value)}
                      placeholder="Add a requirement"
                    />
                    <button 
                      type="button" 
                      className="btn " 
                      onClick={handleRequirementAdd}
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="badge bg-light text-dark me-2 mb-2 p-2">
                        {req}
                        <span 
                          className="ms-2 text-danger" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleRequirementRemove(index)}
                        >
                          ×
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Experience (years)</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        min={0}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Quantity</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        min={1}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Importance</label>
                      <select
                        className="form-select"
                        name="importance"
                        value={formData.importance}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="HIGH">High</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LOW">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <div>
                        <span className={`badge ${
                          formData.status === 'APPROVED' ? 'bg-success' : 
                          formData.status === 'REJECTED' ? 'bg-danger' : 
                          'bg-warning'
                        } d-inline-flex align-items-center`}>
                          <i className="ti ti-point-filled me-1"></i>
                          {formData.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hidden field to ensure jobPostCreated is always sent as false */}
                <input type="hidden" name="jobPostCreated" value="false" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-white border me-2"
                  data-bs-dismiss="modal"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Delete Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                <i className="ti ti-trash-x fs-36" />
              </span>
              <h4 className="mb-1">Confirm Delete</h4>
              <p className="mb-3">
                Are you sure you want to delete this job post request? This action cannot be undone.
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link 
                  to="#" 
                  onClick={executeDelete} 
                  data-bs-dismiss="modal" 
                  className="btn btn-danger"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>













    </div>
  );
};

export default Needs;