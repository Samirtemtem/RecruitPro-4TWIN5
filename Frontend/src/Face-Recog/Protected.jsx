import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem('token'); // Replace 'token' with the actual key if different

      if (!token) {
        console.error('No token found in session storage.');
        navigate("/login"); // Redirect to login if no token
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/auth/user/${token}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Use Bearer authentication
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('API Response:', data); // Log the API response
        setUserData(data.user); // Accessing the nested user object
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate("/login"); // Redirect to login if there's an error
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    console.log('User Data:', userData); // Log userData whenever it changes
  }, [userData]);

  const imageUrl = userData?.image;
  console.log('Image URL:', imageUrl);

  return (
    <div className="h-full flex items-center bg-indigo-100 flex-col justify-center gap-10">
      <h1 className="font-poppins text-2xl text-green-600">
        You have successfully logged in.
      </h1>
      {userData && (
        <div className="text-gray-800">
          <p>Email: {userData.email}</p>
          {imageUrl && <img src={imageUrl} alt="User" className="w-24 h-24 rounded-full" />} {/* Display user image if available */}
          {/* Add other user data as needed */}
        </div>
      )}
    </div>
  );
}

export default Protected;