import React from "react";
import { Route, Routes } from "react-router";
import { publicRoutes, authRoutes, authRoutesfront,publicRoutesFront } from "./router.link"; // Assuming routes are imported from here
import Feature from "../feature";
import AuthFeature from "../authFeature";

import Login from "../../Face-Recog/Login";
import UserSelect from "../../Face-Recog/UserSelect";
import Protected from "../../Face-Recog/Protected";
import Home from "../../Face-Recog/adminDash";

// Import AuthProvider for managing authentication
import AuthProvider from "../AuthContext";

import AuthFeatureFront from "../AuthFeatureFront"; // Import the new component
import FeatureFront from "../featureFront"; // Import the new component

const ALLRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<UserSelect />} />
        <Route path="user-select" element={<UserSelect />} />
        <Route path="login" element={<Login />} />
        <Route path="protected" element={<Protected />} />
        
        {/* Public Routes (No Authentication Required) */}
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* Authenticated Routes (Protected by AuthFeature) */}
        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* Authenticated Front Routes (Separate Style for Front Auth Feature) */}
        <Route element={<AuthFeatureFront />}>
          {authRoutesfront.map((route, idx) => (
            <Route path={route.path} element={route.element} key={`front-${idx}`} />
          ))}
        </Route>

        {/* Authenticated Front Routes (Separate Style for Front Auth Feature) */}
        <Route element={<FeatureFront />}>
          {publicRoutesFront.map((route, idx) => (
            <Route path={route.path} element={route.element} key={`front-${idx}`} />
          ))}
        </Route>

      </Routes>


     
    </AuthProvider>
  );
};

export default ALLRoutes;
