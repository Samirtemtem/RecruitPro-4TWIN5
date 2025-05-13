import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Manager {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  image: string;
  createdAt: string;
}

interface Request {
  id: string;
  position: string;
  description: string;
  status: string;
  createdAt: string;
}

const ManagerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [manager, setManager] = useState<Manager | null>(null);
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManagerDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/department-managers/${id}`);
        if (response.status === 200) {
          setManager(response.data);
        } else {
          throw new Error(`Failed to fetch manager details: ${response.status}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchManagerRequests = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/request/requests/manager/${id}`
        );
        if (response.status === 200) {
          const fetchedRequests = response.data;
          if (fetchedRequests.length === 0) {
            setRequests([]); // Set an empty array if there are no requests
          } else {
            setRequests(fetchedRequests);
          }
        } else {
          throw new Error(`Failed to fetch manager requests: ${response.status}`);
        }
      } catch (err: any) {
        if (err.response?.status === 404) {
          // Don't set an error; handle empty requests gracefully in the UI
          setRequests([]); // Ensure requests is empty if none are found
        } else if (err instanceof Error) {
          setError(err.message);
        }
        console.error("Error fetching manager requests:", err);
      }
    };

    fetchManagerDetails();
    fetchManagerRequests();
  }, [id]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this manager?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/managers/${id}`);
        alert("Manager deleted successfully!");
        navigate("/managers");
      } catch (error) {
        console.error("Error deleting manager:", error);
        alert("Failed to delete manager.");
      }
    }
  };

  if (loading) return <p>Loading manager details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!manager) return <p>Manager not found</p>;

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row align-items-center mb-4">
            <div className="d-md-flex d-sm-block justify-content-between align-items-center flex-wrap">
              <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                <Link to="/Managers-List">
                  <i className="ti ti-arrow-left me-2" />
                  Back to List
                </Link>
              </h6>
              <div className="d-flex">
                <div className="ms-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => id && handleDelete(id)}
                  >
                    <i className="ti ti-trash me-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Manager Details</h5>
                  <div className="list-group details-list-group mb-4">


                  {manager.image && (
                    <div className="text-center">
                      <img
                        src={manager.image}
                        alt="Manager"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  )}
                  <br />
                    <div className="list-group-item">
                      <span>First Name</span>
                      <p className="text-gray-9">{manager.firstName}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Last Name</span>
                      <p className="text-gray-9">{manager.lastName}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Email</span>
                      <p className="text-gray-9">{manager.email}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Phone Number</span>
                      <p className="text-gray-9">{manager.phoneNumber}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Department</span>
                      <p className="text-gray-9">{manager.department}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Created on</span>
                      <p className="text-gray-9">
                        {new Date(manager.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Requests Received</h5>
                  {requests.length > 0 ? (
                    <ul className="list-group">
                      {requests.map((request) => (
                        <li key={request.id} className="list-group-item " style={{ marginBottom: "15px" }}>
                          <h6>Position : {request.position}</h6>
                          <p>Description : {request.description}</p>
                          
                          
                          <span>
                            Created on:{" "}
                            {new Date(request.createdAt).toLocaleDateString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No requests found for this manager.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2025 © RecruitPro.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              InfiniteLoopers
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ManagerDetails;