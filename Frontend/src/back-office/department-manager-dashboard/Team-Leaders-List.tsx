import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Datatable from "../../core/common/dataTable/index";
import { toast } from "react-hot-toast";
import { Modal, Button } from 'react-bootstrap';

// Define the interface for team leader data
interface TeamLeaderData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  team: string | null;
  image: string;
  createdAt: string;
  isVerified: boolean;
}

// Component for managing the Team Leaders list
const TeamLeadersList: React.FC = () => {
  const [data, setData] = useState<TeamLeaderData[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [newTeamLeader, setNewTeamLeader] = useState<Omit<TeamLeaderData, "id" | "createdAt" | "image" | "isVerified"> & { password: string }>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    team: null,
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [teamLeaderIdToDelete, setTeamLeaderIdToDelete] = useState<string | null>(null);

  // Fetch data from the API
  const fetchTeamLeads = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/team-leads");
      const fetchedData: TeamLeaderData[] = Array.isArray(response.data) ? response.data : [];
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch team leaders");
    }
  };

  useEffect(() => {
    fetchTeamLeads();
  }, []);

  // Validate a specific field dynamically
  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = { ...errors };

    switch (name) {
      case "firstName":
        newErrors.firstName = value.trim().length >= 3 ? "" : "First name must be at least 3 characters";
        break;
      case "lastName":
        newErrors.lastName = value.trim().length >= 3 ? "" : "Last name must be at least 3 characters";
        break;
      case "email":
        newErrors.email = /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address";
        break;
      case "password":
        newErrors.password = value.trim().length >= 6 ? "" : "Password must be at least 6 characters";
        break;
      case "phoneNumber":
        newErrors.phoneNumber = /^\d{8,}$/.test(value) ? "" : "Phone number must be at least 8 digits";
        break;
      case "department":
        newErrors.department = value.trim() ? "" : "Department is required";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  // Validate all fields before submission
  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(newTeamLeader).forEach((field) => {
      validateField(field, (newTeamLeader as any)[field]);
    });
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes and validate dynamically
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTeamLeader((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Handle creating a new team leader
  const handleCreateTeamLeader = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://localhost:5000/api/user/team-leads", newTeamLeader);
      toast.success("Team leader created successfully");
      setShowForm(false);
      setNewTeamLeader({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        department: "",
        team: null,
        password: "",
      });
      fetchTeamLeads(); // Refresh list after creation
      window.location.reload(); // Refresh the entire page after creation
    } catch (error) {
      console.error("Error creating team leader:", error);
      toast.error("Failed to create team leader");
    }
  };

  // Handle deleting a team leader
  const handleDeleteTeamLeader = async () => {
    if (!teamLeaderIdToDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/user/team-leads/${teamLeaderIdToDelete}`);
      toast.success("Team leader deleted successfully");
      setShowDeleteModal(false);
      fetchTeamLeads(); // Refresh list after deletion
      window.location.reload(); // Refresh the entire page after creation
    } catch (error) {
      console.error("Error deleting team leader:", error);
      toast.error("Failed to delete team leader");
    }
  };

  // Columns for the data table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image: string) => (
        <img src={image} alt="Team Leader" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => a.email.localeCompare(b.email),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => a.department.localeCompare(b.department),
    },
    {
      title: "Team",
      dataIndex: "team",
      render: (text: string | null) => <span>{text || "Unassigned"}</span>,
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => (a.team || "").localeCompare(b.team || ""),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: "Verified",
      dataIndex: "isVerified",
      render: (isVerified: boolean) => (
        <span className={`badge ${isVerified ? "bg-success" : "bg-danger"}`}>
          {isVerified ? "True" : "False"}
        </span>
      ),
      sorter: (a: TeamLeaderData, b: TeamLeaderData) => (a.isVerified === b.isVerified ? 0 : a.isVerified ? -1 : 1),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, record: TeamLeaderData) => (
        <div className="d-flex align-items-center">
          <Link to={`/department-manager-dashboard/team-leader-detail/${record.id}`} className="btn btn-sm btn-icon btn-outline-primary me-2" title="View">
            <i className="ti ti-eye"></i>
          </Link>
          <button onClick={() => { setTeamLeaderIdToDelete(record.id); setShowDeleteModal(true); }} className="btn btn-sm btn-icon btn-outline-danger" title="Delete">
            <i className="ti ti-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Team Leaders List</h3>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => setShowForm((prev) => !prev)}>
              {showForm ? "Hide Form" : "+  Create Team Leader"}
            </button>
          </div>
        </div>

        {showForm && (
          <div className="card p-3 mb-4">
            <h4 className="mb-3">Create New Team Leader</h4>
            <form onSubmit={handleCreateTeamLeader}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" className="form-control" value={newTeamLeader.firstName} onChange={handleInputChange} required />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" className="form-control" value={newTeamLeader.lastName} onChange={handleInputChange} required />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" value={newTeamLeader.email} onChange={handleInputChange} required />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" value={newTeamLeader.password} onChange={handleInputChange} required />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" name="phoneNumber" className="form-control" value={newTeamLeader.phoneNumber} onChange={handleInputChange} required />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select name="department" className="form-select" value={newTeamLeader.department} onChange={handleInputChange} required>
                  <option value="">Select Department</option>
                  <option value="TIC">TIC</option>
                  <option value="ELECTROMECANIQUE">ELECTROMECANIQUE</option>
                  <option value="GENIE-CIVIL">GENIE-CIVIL</option>
                  <option value="OTHER">OTHER</option>
                </select>
                {errors.department && <small className="text-danger">{errors.department}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Team</label>
                <select name="team" className="form-select" value={newTeamLeader.team || ""} onChange={handleInputChange}>
                  <option value="">Unassigned</option>
                  <option value="web">Web</option>
                  <option value="devops">DevOps</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        )}

        <div className="card-body p-0 py-3">
          {data.length > 0 ? (
            <Datatable columns={columns} dataSource={data} Selection={true} />
          ) : (
            <div className="text-center p-4">
              <p>No team leaders found</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this team leader?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="me-1" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteTeamLeader}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeamLeadersList;