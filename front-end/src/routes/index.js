import React from "react";
import { Routes, Route } from "react-router-dom";
import InventorRoutes from "./inventor";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/inventor/*" element={<InventorRoutes />} />
    </Routes>
  );
};

export default IndexRoutes;
