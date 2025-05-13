import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface TeamLeader {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  team: string | null;
  image: string;
  createdAt: string;
}

interface Need {
  id: string;
  position: string;
  description: string;
  requirements: string[];
  department?: string;
  status?: string;
  experience: number;
  quantity: number;
  importance: string;
  requestCreated: boolean;
}

const TeamLeaderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [teamLeader, setTeamLeader] = useState<TeamLeader | null>(null);
  const [needs, setNeeds] = useState<Need[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamLeaderDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/team-leads/${id}`);
        if (response.status === 200) {
          setTeamLeader(response.data);
        } else {
          throw new Error(`Failed to fetch team leader details: ${response.status}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchNeeds = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/need/needs/teamLead/${id}`);
        if (response.status === 200) {
          setNeeds(response.data);
        } else {
          throw new Error(`Failed to fetch needs: ${response.status}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    fetchTeamLeaderDetails();
    fetchNeeds();
  }, [id]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this team leader?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/user/team-leads/${id}`);
        alert("Team leader deleted successfully!");
        navigate("/team-leads");
      } catch (error) {
        alert("Failed to delete team leader.");
      }
    }
  };


  if (!teamLeader) return <p>Team leader not found</p>;

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row align-items-center mb-4">
            <div className="d-md-flex d-sm-block justify-content-between align-items-center flex-wrap">
              <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                <Link to="/department-manager-dashboard/team-leaders-list">
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
            {/* Team Leader Details */}
            <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Team Leader Details</h5>
                  <div className="list-group details-list-group mb-4">
                    <div className="list-group-item">
                      <span>First Name</span>
                      <p className="text-gray-9">{teamLeader.firstName}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Last Name</span>
                      <p className="text-gray-9">{teamLeader.lastName}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Email</span>
                      <p className="text-gray-9">{teamLeader.email}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Phone Number</span>
                      <p className="text-gray-9">{teamLeader.phoneNumber}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Department</span>
                      <p className="text-gray-9">{teamLeader.department}</p>
                    </div>
                    <div className="list-group-item">
                      <span>Team</span>
                      <p className="text-gray-9">
                        {teamLeader.team || "Unassigned"}
                      </p>
                    </div>
                    <div className="list-group-item">
                      <span>Created on</span>
                      <p className="text-gray-9">
                        {new Date(teamLeader.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {teamLeader.image && (
                    <div className="text-center">
                      <img
                        src={teamLeader.image}
                        alt="Team Leader"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Needs Section */}
            <div className="col-xxl-9 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Needs</h5>
                  {needs.length > 0 ? (
                    <div className="row">
                      {needs.map((need) => (
                        <div key={need.id} className="col-md-6 mb-4">
                          <div className="card h-100 shadow-sm">
                            <div className="card-body">
                              <h6 className="card-title">
                                <strong>Position:</strong> {need.position}
                              </h6>
                              <p className="mb-2">
                                <strong>Description:</strong> {need.description}
                              </p>
                              <p className="mb-2">
                                <strong>Requirements:</strong>{" "}
                                {need.requirements.join(", ")}
                              </p>
                              <p className="mb-2">
                                <strong>Department:</strong>{" "}
                                {need.department || "Unspecified"}
                              </p>
                              <p className="mb-2">
                                <strong>Status:</strong> {need.status}
                              </p>
                              <p className="mb-2">
                                <strong>Experience:</strong> {need.experience}{" "}
                                years
                              </p>
                              <p className="mb-2">
                                <strong>Quantity:</strong> {need.quantity}
                              </p>
                              <p className="mb-2">
                                <strong>Importance:</strong> {need.importance}
                              </p>
                              <p className="mb-0">
                                <strong>Request Created:</strong>{" "}
                                {need.requestCreated ? "Yes" : "No"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No needs found for this team leader.</p>
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

export default TeamLeaderDetails;