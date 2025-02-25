import React from "react";
import { Route, Routes } from "react-router";
import { publicRoutes, authRoutes } from "./router.link"; // Assuming routes are imported from here
import Feature from "../feature";
import AuthFeature from "../authFeature";

// Import AuthProvider for managing authentication
import AuthProvider from "../AuthContext";

const ALLRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
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
      </Routes>
    </AuthProvider>
  );
};

export default ALLRoutes;
