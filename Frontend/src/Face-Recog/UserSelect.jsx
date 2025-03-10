import { useState } from "react";
import User from "./User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserSelect() {
  const [selected, setSelected] = useState(null); // Initialize as null
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(""); // Ensure this is an empty string

  const backendUrl = "http://localhost:5000"; // Replace with your local backend URL

  const handleEmailSearch = () => {
    setLoading(true);
    console.log("Searching for user with email:", email);

    axios
      .get(`${backendUrl}/getUserByEmail?email=${email}`)
      .then((res) => {
        console.log("Response received:", res.data);

        if (res.data && res.data.length > 0) {
          setUsers(res.data);
          setSelected(res.data[0]); // Select the first user found
          setErrorMessage(null);
          console.log("User found:", res.data[0]);
        } else {
          setErrorMessage("User not found.");
          setUsers([]);
          setSelected(null);
          console.log("No user found for the provided email.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setErrorMessage("Error fetching user.");
        setUsers([]);
        setSelected(null);
      })
      .finally(() => {
        setLoading(false);
        console.log("Loading finished.");
      });
  };

  const handleUserSelect = (user) => {
    setSelected(user);
    console.log("Selected user:", user); // Log the selected user
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f4ff" }}>
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", width: "90%", maxWidth: "400px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#4f46e5", marginBottom: "20px", textAlign: "center" }}>
          Log In
        </h1>
        <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="email"
            value={email} // This should always be defined
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
            style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "4px", marginBottom: "10px", width: "100%" }}
          />
          <button
            onClick={handleEmailSearch}
            style={{ backgroundColor: "#4f46e5", color: "white", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4338ca")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
          >
            {loading ? "Searching..." : "Search User"}
          </button>
          {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
        </div>
        <div style={{ maxHeight: "380px", overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <RadioGroup value={selected} onChange={handleUserSelect}>
            <RadioGroup.Label style={{ display: "none" }}>Select User</RadioGroup.Label>
            <div style={{ width: "100%" }}>
              {users.map((account) => (
                <User key={account.id} user={account} selected={selected?.id === account.id} onSelect={handleUserSelect} />
              ))}
            </div>
          </RadioGroup>
        </div>
        <Link
          to="/login"
          state={{ account: selected }}
          style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", backgroundColor: "#4f46e5", padding: "10px 20px", color: "white", textDecoration: "none", width: "100%", textAlign: "center" }}
        >
          Proceed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ marginLeft: "5px", width: "20px", height: "20px" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default UserSelect;