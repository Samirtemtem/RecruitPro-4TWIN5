import { useState } from "react";
import User from "./User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../core/common/imageWithBasePath";
import axios from "axios";
import img from "./facial-recognition.png";
import Logo from "./Logooo.png";

function UserSelect() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const backendUrl = "http://localhost:5000";

  const handleEmailSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await axios.get(`${backendUrl}/getUserByEmail?email=${email}`);
      if (res.data && res.data.length > 0) {
        setUsers(res.data);
        setSelectedUser(res.data[0]);
      } else {
        setErrorMessage("User not found. Please check your email.");
        setUsers([]);
        setSelectedUser(null);
      }
    } catch (error) {
      setErrorMessage("Error fetching user. Please try again later.");
      setUsers([]);
      setSelectedUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-fluid d-flex vh-100">
      {/* Left Side: Image with Sky Blue Background */}
      <div className="col-lg-6 d-flex align-items-center justify-content-center left-side">
        <img src={img} alt="Facial Recognition" className="img-fluid" />
      </div>
      {/* Right Side: Form */}
      <div className="col-lg-6 d-flex align-items-center">
        <div className="form-container">
          <form className="p-4" onSubmit={handleEmailSearch}>
            <div className="text-center mb-4">
              {/* Logo above the title */}
              <img src={Logo} alt="Logo" className="logo-img" />
            </div>
            
            <h2 className="text-center mb-3">Welcome to Face Recognition Login</h2>
            <p className="text-center mb-4 text-black">Please enter your email to log in.</p>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Input Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Ensure email is required
              />
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary w-100 mt-3 ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search User"}
            </button>
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            <div className="user-list mb-4 mt-4">
              <RadioGroup value={selectedUser} onChange={handleUserSelect}>
                <RadioGroup.Label className="sr-only">Select User</RadioGroup.Label>
                <div className="user-list-container">
                  {users.map((account) => (
                    <User
                      key={account.id}
                      user={account}
                      selected={selectedUser?.id === account.id}
                      onSelect={handleUserSelect}
                    />
                  ))}
                </div>
              </RadioGroup>
            </div>
            <Link to="/login" state={{ account: selectedUser }} className="btn btn-success w-100 mt-3">
              Proceed
            </Link>
          </form>
        </div>
      </div>
      
      {/* Inline CSS */}
      <style jsx>{`
        .left-side {
          margin-left: -8px;
          background-color: rgb(196, 238, 255); /* Sky blue color */
        }
        
        .container-fluid {
          display: flex;
          height: 100vh; /* Full viewport height */
        }
        
        .img-fluid {
          max-width: 70%; /* Ensure the image is responsive */
          height: auto; /* Maintain aspect ratio */
        }

        .form-container {
          background-color: #ffffff; /* White background for the form */
          padding: 20px;
          width: 100%; /* Full width */
        
        }

        .form-control {
          border-radius: 5px; /* Rounded corners for input fields */
          border: 1px solid #ced4da; /* Light border */
        }

        .btn-primary {
          background-color: #007bff; /* Primary button color */
          border-color: #007bff; /* Border color */
          transition: background-color 0.3s; /* Smooth transition */
        }

        .btn-primary:hover {
          background-color: #0056b3; /* Darker shade on hover */
          border-color: #0056b3; /* Dark border on hover */
        }

        .alert {
          border-radius: 5px; /* Rounded corners for alerts */
        }

        .logo-img {
          max-width: 420px; /* Increase max-width for the logo */
          height: auto; /* Maintain aspect ratio */
        }

        .text-black {
          color: black; /* Set text color to black */
        }
      `}</style>
    </div>
  );
}

export default UserSelect;