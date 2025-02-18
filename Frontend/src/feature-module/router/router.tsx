import React from "react";
import {  Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "./router.link";
import Feature from "../feature";


const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        



                <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>


        
      </Routes>
    </>
  );
};



export default ALLRoutes;
