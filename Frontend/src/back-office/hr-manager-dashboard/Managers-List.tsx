import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Datatable from "../../core/common/dataTable/index";
import { toast } from "react-hot-toast"; // Ensure you have react-hot-toast installed
import { Modal } from "react-bootstrap"; // Add Bootstrap for modal

// Define the interface for manager data
interface ManagerData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  image: string;
  createdAt: string;
  isVerified: boolean; // Added isVerified field
}

const ManagersList: React.FC = () => {
  const [data, setData] = useState<ManagerData[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [newManager, setNewManager] = useState<
    Omit<ManagerData, "id" | "createdAt" | "image" | "isVerified"> & { password: string }
  >({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    password: "",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal visibility
  const [deleteManagerId, setDeleteManagerId] = useState<string | null>(null); // ID of manager to delete

  // Fetch data from the API
  const fetchManagers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/department-managers`);
      const fetchedData: ManagerData[] = Array.isArray(response.data) ? response.data : [];
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch managers");
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  // Validation Functions
  const validateFirstName = (value: string) => {
    return value.trim().length >= 3 ? "" : "First name must be at least 3 characters.";
  };

  const validateLastName = (value: string) => {
    return value.trim().length >= 3 ? "" : "Last name must be at least 3 characters.";
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Invalid email format.";
  };

  const validatePhoneNumber = (value: string) => {
    return /^\d{8}$/.test(value) ? "" : "Phone number must be exactly 8 digits.";
  };

  const validatePassword = (value: string) => {
    return value.trim().length >= 6 ? "" : "Password must be at least 6 characters.";
  };

  const validateDepartment = (value: string) => {
    return value.trim() ? "" : "Department is required.";
  };

  const validateForm = () => {
    const newErrors = {
      firstName: validateFirstName(newManager.firstName),
      lastName: validateLastName(newManager.lastName),
      email: validateEmail(newManager.email),
      phoneNumber: validatePhoneNumber(newManager.phoneNumber),
      department: validateDepartment(newManager.department),
      password: validatePassword(newManager.password),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // Handle creating a new manager
  // Handle creating a new manager
const handleCreateManager = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/department-managers`, newManager);
    toast.success("Manager created successfully!"); // Success toast message
    setShowForm(false);
    window.location.reload(); // Refresh the page
  } catch (error) {
    console.error("Error creating manager:", error);
    toast.error("Failed to create manager");
  }
};

// Handle deleting a manager
const handleDeleteManager = async () => {
  if (!deleteManagerId) return;

  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/user/department-managers/${deleteManagerId}`);
    toast.success("Manager deleted successfully");
    setShowDeleteModal(false); // Close the modal
    window.location.reload(); // Refresh the page
  } catch (error) {
    console.error("Error deleting manager:", error);
    toast.error("Failed to delete manager");
  }
};

  // Open delete confirmation modal
  const confirmDelete = (id: string) => {
    setDeleteManagerId(id);
    setShowDeleteModal(true);
  };

  // Columns for the data table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image: string) => (
        <img
          src={image}
          alt="Manager"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: ManagerData, b: ManagerData) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: ManagerData, b: ManagerData) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: ManagerData, b: ManagerData) => a.email.localeCompare(b.email),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: ManagerData, b: ManagerData) => a.department.localeCompare(b.department),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: ManagerData, b: ManagerData) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: "Verified",
      dataIndex: "isVerified",
      render: (isVerified: boolean) => (
        <span className={`badge ${isVerified ? "bg-success" : "bg-danger"}`}>
          {isVerified ? "True" : "False"}
        </span>
      ),
      sorter: (a: ManagerData, b: ManagerData) => (a.isVerified === b.isVerified ? 0 : a.isVerified ? -1 : 1),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, record: ManagerData) => (
        <div className="d-flex align-items-center">
          <Link
            to={`/manager-detail/${record.id}`}
            className="btn btn-sm btn-icon btn-outline-primary me-2"
            title="View"
          >
            <i className="ti ti-eye"></i>
          </Link>
          <button
            onClick={() => confirmDelete(record.id)}
            className="btn btn-sm btn-icon btn-outline-danger"
            title="Delete"
          >
            <i className="ti ti-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Managers List</h3>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => setShowForm((prev) => !prev)}
            >
              {showForm ? "Hide Form" : "+ Create Manager"}
            </button>
          </div>
        </div>

        {/* Create Manager Form */}
        {showForm && (
          <div className="card p-3 mb-4">
            <h4 className="mb-3">Create New Manager</h4>
            <form onSubmit={handleCreateManager}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newManager.firstName}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewManager({ ...newManager, firstName: value });
                    setErrors({ ...errors, firstName: validateFirstName(value) });
                  }}
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newManager.lastName}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewManager({ ...newManager, lastName: value });
                    setErrors({ ...errors, lastName: validateLastName(value) });
                  }}
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newManager.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewManager({ ...newManager, email: value });
                    setErrors({ ...errors, email: validateEmail(value) });
                  }}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newManager.password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewManager({ ...newManager, password: value });
                    setErrors({ ...errors, password: validatePassword(value) });
                  }}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newManager.phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewManager({ ...newManager, phoneNumber: value });
                    setErrors({ ...errors, phoneNumber: validatePhoneNumber(value) });
                  }}
                />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  value={newManager.department}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewManager({ ...newManager, department: value });
                    setErrors({ ...errors, department: validateDepartment(value) });
                  }}
                >
                  <option value="">Select Department</option>
                  <option value="TIC">TIC</option>
                  <option value="ELECTROMECANIQUE">ELECTROMECANIQUE</option>
                  <option value="GENIE-CIVIL">GENIE-CIVIL</option>
                  <option value="OTHER">OTHER</option>
                </select>
                {errors.department && <small className="text-danger">{errors.department}</small>}
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Manager List */}
        <div className="card-body p-0 py-3">
          {data.length > 0 ? (
            <Datatable 
              columns={columns} 
              dataSource={data} 
              Selection={true} 
            />
          ) : (
            <div className="text-center p-4">
              <p>No managers found</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this manager?</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={handleDeleteManager}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManagersList;