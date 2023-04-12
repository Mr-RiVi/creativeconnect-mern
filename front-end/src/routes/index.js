import React from "react";
import { Routes, Route } from "react-router-dom";
import InventorRoutes from "./inventor";
import UserRoutes from "./user.js";
const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/inventor/*" element={<InventorRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
    </Routes>
  );
};

export default IndexRoutes;
