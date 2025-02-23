import { useEffect, useState } from "react";
import User from "../components/User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserSelect() {
  const [selected, setSelected] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(""); // State for email input

  const backendUrl = "http://localhost:5000"; // Replace with your local backend URL

  const handleEmailSearch = () => {
    setLoading(true);
    axios
      .get(`${backendUrl}/getUserByEmail?email=${email}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setUsers(res.data); // Set users to the fetched data
          setSelected(res.data[0]); // Set selected to the first user in the result
          setErrorMessage(null);
        } else {
          setErrorMessage("User not found.");
          setUsers([]);
          setSelected(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setErrorMessage("Error fetching user.");
        setUsers([]);
        setSelected(null);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-50 to-purple-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-md">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
            Log In
          </h1>
          <div className="mb-4 flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter user email"
              className="border border-gray-300 p-3 rounded-md mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleEmailSearch}
              className="bg-indigo-500 text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-indigo-600"
            >
              {loading ? "Searching..." : "Search User"}
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>
          <div className="max-h-[380px] overflow-y-auto p-2 flex flex-col items-center">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">Select User</RadioGroup.Label>
              <div className="space-y-4 w-full">
                {users.map((account) => (
                  <User key={account.id} user={account} />
                ))}
              </div>
            </RadioGroup>
          </div>
          <Link
            to="/login"
            state={{ account: selected }}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-600 transition duration-300 w-full text-center"
          >
            Proceed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default UserSelect;