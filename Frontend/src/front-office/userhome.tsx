import React, { useEffect } from "react"; // Add useEffect here
import { useNavigate } from "react-router-dom";


const UserHome = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>Hello, you are in your home</h1>
    </div>
  );
}

export default UserHome;
