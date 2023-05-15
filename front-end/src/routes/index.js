import React from "react";
import { Routes, Route } from "react-router-dom";
import InventorRoutes from "./inventor";
import UserRoutes from "./user.js";
import MentorRouterHome from './mentor-router-home'
import EntrepreneurRouterHome from './entrepreneur-router-home'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/inventor/*" element={<InventorRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/mentorHome/*" element={<MentorRouterHome />} />
      <Route path="/entrepreneurHome/*"  element={ <EntrepreneurRouterHome/> }></Route>    
    </Routes>
  );
};

export default IndexRoutes;
