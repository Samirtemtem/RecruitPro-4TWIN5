import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Datatable from "../../core/common/dataTable/index";
import { toast } from "react-hot-toast";

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

// Component for managing the Managers list
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

  // Fetch data from the API
  const fetchManagers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/department-managers");
      const fetchedData: ManagerData[] = Array.isArray(response.data) ? response.data : [];
      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch managers");
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  // Handle creating a new manager
  const handleCreateManager = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/user/department-managers", newManager);
      toast.success("Manager created successfully");
      setShowForm(false);
      fetchManagers(); // Refresh the list after creation
      setNewManager({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        department: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating manager:", error);
      toast.error("Failed to create manager");
    }
  };

  // Handle deleting a manager
  const handleDeleteManager = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/department-managers/${id}`);
      toast.success("Manager deleted successfully");
      fetchManagers(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting manager:", error);
      toast.error("Failed to delete manager");
    }
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
            onClick={() => handleDeleteManager(record.id)}
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
              {showForm ? "Hide Form" : "Create Manager"}
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
                  onChange={(e) =>
                    setNewManager({ ...newManager, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newManager.lastName}
                  onChange={(e) =>
                    setNewManager({ ...newManager, lastName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newManager.email}
                  onChange={(e) =>
                    setNewManager({ ...newManager, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newManager.password}
                  onChange={(e) =>
                    setNewManager({ ...newManager, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newManager.phoneNumber}
                  onChange={(e) =>
                    setNewManager({ ...newManager, phoneNumber: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  value={newManager.department}
                  onChange={(e) =>
                    setNewManager({ ...newManager, department: e.target.value })
                  }
                  required
                >
                  <option value="">Select Department</option>
                  <option value="TIC">TIC</option>
                  <option value="ELECTROMECANIQUE">ELECTROMECANIQUE</option>
                  <option value="GENIE-CIVIL">GENIE-CIVIL</option>
                  <option value="OTHER">OTHER</option>
                </select>
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
    </div>
  );
};

export default ManagersList;