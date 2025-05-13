import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Datatable from "../core/common/dataTable/index";
import { all_routes } from "../routing-module/router/all_routes";
import PredefinedDateRanges from "../core/common/datePicker";
import TooltipOption from "../core/common/tooltipOption";
import { useAuth } from "../routing-module/AuthContext";
import { toast } from "react-hot-toast";

// Define the interface for employee data
interface EmployeeData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: string;
  department: string;
  phoneNumber: string;
  image?: string;
  isVerified: boolean;
  team?: string | null;
  createdAt: string;
  updatedAt: string;
}

// Empty employee template
const createEmptyEmployee = (department?: string): Omit<EmployeeData, 'id' | 'createdAt' | 'updatedAt'> => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "EMPLOYEE",
  department: department || "",
  phoneNumber: "",
  image: "",
  isVerified: false,
  team: null
});

const EmployeesList: React.FC = () => {
  const { user, userId, profileData } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState<EmployeeData[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  
  const [formData, setFormData] = useState<Omit<EmployeeData, 'id' | 'createdAt' | 'updatedAt'>>(
    createEmptyEmployee(profileData?.department || user?.department)
  );
  const [currentEmployeeId, setCurrentEmployeeId] = useState<string>("");
  const [employeeToDelete, setEmployeeToDelete] = useState<string>("");



  useEffect(() => {
    if (userId) {
      setFormData(prev => ({
        ...prev,
        department: profileData?.department || user?.department || prev.department
      }));
    }
  }, [userId, profileData, user]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/usersList`);
      const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching employees:", error);
      toast.error("Failed to fetch employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/user/delete/${id}`);
      toast.success("Employee deleted successfully");
      fetchEmployees();
      window.location.reload(); // Force reload from server (bypassing cache)
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Failed to delete employee");
    }
  };

  const executeDelete = () => {
    if (employeeToDelete) {
      handleDelete(employeeToDelete);
      setEmployeeToDelete("");
    }
  };

  const handleApplyClick = () => {
    if (dropdownMenuRef.current) {
      dropdownMenuRef.current.classList.remove("show");
    }
  };

  // Form input handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: typeof value === 'string' ? value.trim() : value
    });
  };

  // Role filter handler
  const handleRoleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value.trim());
  };



  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log("Submitting edit form data:", JSON.stringify(formData, null, 2));
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/user/update/${currentEmployeeId}`, formData);
      toast.success("Employee updated successfully");
      setFormData(createEmptyEmployee(profileData?.department || user?.department));
      fetchEmployees();
      window.location.reload(); // Force reload from server (bypassing cache)
    } catch (error: any) {
      console.error("Error updating employee:", error);
      const errorMessage = error.response?.data?.error || "Failed to update employee";
      toast.error(errorMessage);
    }
  };

  const openEditModal = (employee: EmployeeData) => {
    setCurrentEmployeeId(employee.id);
    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      password: employee.password || "",
      role: employee.role,
      department: employee.department,
      phoneNumber: employee.phoneNumber,
      image: employee.image || "",
      isVerified: employee.isVerified,
      team: employee.team || null
    });
  };

  const openViewModal = (employee: EmployeeData) => {
    setSelectedEmployee(employee);
  };

  const resetForm = () => {
    setFormData(createEmptyEmployee(profileData?.department || user?.department));
    setCurrentEmployeeId("");
    setSelectedEmployee(null);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text: string) => (
        <img
          src={text || "https://via.placeholder.com/40"}
          alt="Employee"
          className="rounded-circle"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "firstName",
      render: (text: string, record: EmployeeData) => (
        <h6 className="fw-medium">{`${record.firstName} ${record.lastName}`}</h6>
      ),
      sorter: (a: EmployeeData, b: EmployeeData) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: EmployeeData, b: EmployeeData) => a.email.localeCompare(b.email),
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (text: string) => <span>{text.replace("-", " ")}</span>,
      sorter: (a: EmployeeData, b: EmployeeData) => a.role.localeCompare(b.role),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: EmployeeData, b: EmployeeData) => a.department.localeCompare(b.department),
    },
    {
      title: "Verified",
      dataIndex: "isVerified",
      render: (text: boolean) => (
        <span className={`badge ${text ? 'bg-success' : 'bg-warning'}`}>
          {text ? 'Verified' : 'Not Verified'}
        </span>
      ),
      sorter: (a: EmployeeData, b: EmployeeData) => Number(a.isVerified) - Number(b.isVerified),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text: string) => <span>{new Date(text).toLocaleDateString()}</span>,
      sorter: (a: EmployeeData, b: EmployeeData) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: EmployeeData) => (
        <div className="d-flex align-items-center">
          <a
            href="#"
            className="btn btn-sm btn-icon btn-outline-primary me-2"
            data-bs-toggle="modal"
            data-bs-target="#view_employee"
            onClick={() => openViewModal(record)}
 title="View Details"
          >
            <i className="ti ti-eye"></i>
          </a>
          <a 
            href="#"
            className="btn btn-sm btn-icon btn-outline-info me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_employee"
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
            onClick={() => setEmployeeToDelete(record.id)}
            title="Delete"
          >
            <i className="ti ti-trash-x"></i>
          </a>
        </div>
      ),
    },
  ];

  useEffect(() => {
    console.log("Current data state:", data);
  }, [data]);

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Employees List</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Employee Management</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Employees
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
                <p>No employees found</p>
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

      {/* View Employee Modal */}
      <div className="modal fade" id="view_employee">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ minWidth: "700px" }}>
            <div className="modal-header">
              <h4 className="modal-title">Employee Details</h4>
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
            <div className="modal-body">
              {selectedEmployee && (
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img
                      src={selectedEmployee.image || "https://via.placeholder.com/150"}
                      alt="Employee"
                      className="rounded-circle mb-3"
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                    <h5>{`${selectedEmployee.firstName} ${selectedEmployee.lastName}`}</h5>
                    <p className="text-muted">{selectedEmployee.role.replace("-", " ")}</p>
                  </div>
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Email</label>
                      <p>{selectedEmployee.email}</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Phone Number</label>
                      <p>{selectedEmployee.phoneNumber}</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Department</label>
                      <p>{selectedEmployee.department}</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Team</label>
                      <p>{selectedEmployee.team || "None"}</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Verification Status</label>
                      <p>
                        <span className={`badge ${selectedEmployee.isVerified ? 'bg-success' : 'bg-warning'}`}>
                          {selectedEmployee.isVerified ? 'Verified' : 'Not Verified'}
                        </span>
                      </p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Created At</label>
                      <p>{new Date(selectedEmployee.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Updated At</label>
                      <p>{new Date(selectedEmployee.updatedAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-white border"
                data-bs-dismiss="modal"
                onClick={resetForm}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

     


      {/* Edit Employee Modal */}
      <div className="modal fade" id="edit_employee">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ minWidth: "700px" }}>
            <div className="modal-header">
              <h4 className="modal-title">Edit Employee</h4>
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Role</label>
                      <select
                        className="form-select"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="EMPLOYEE">Employee</option>
                        <option value="DEPARTMENT-MANAGER">Department Manager</option>
                        <option value="HR-MANAGER">HR Manager</option>
                        <option value="TEAM-LEAD">Team Lead</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Team (TeamLeaders Only)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="team"
                    value={formData.team || ""}
                    onChange={handleInputChange}
                  />
                </div>
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
                Are you sure you want to delete this employee? This action cannot be undone.
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

export default EmployeesList;
