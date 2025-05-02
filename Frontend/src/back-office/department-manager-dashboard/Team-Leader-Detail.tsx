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
  team: string | null; // Added team attribute
  image: string;
  createdAt: string;
}

const TeamLeaderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [teamLeader, setTeamLeader] = useState<TeamLeader | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamLeaderDetails = async () => {
      console.log("Fetching team leader details for ID:", id);
      try {
        const response = await axios.get(`http://localhost:5000/api/user/team-leads/${id}`);
        if (response.status === 200) {
          setTeamLeader(response.data);
          console.log("Team leader details fetched:", response.data);
        } else {
          throw new Error(`Failed to fetch team leader details: ${response.status}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching team leader details:", err);
          setError(err.message);
        }
      } finally {
        setLoading(false);
        console.log("Loading finished");
      }
    };

    fetchTeamLeaderDetails();
  }, [id]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this team leader?")) {
      console.log("Deleting team leader with ID:", id);
      try {
        await axios.delete(`http://localhost:5000/api/user/team-leads/${id}`);
        alert("Team leader deleted successfully!");
        navigate("/team-leads");
      } catch (error) {
        console.error("Error deleting team leader:", error);
        alert("Failed to delete team leader.");
      }
    }
  };

  if (loading) return <p>Loading team leader details...</p>;
  if (error) return <p>Error: {error}</p>;
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