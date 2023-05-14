import React from "react";
import { Routes, Route } from "react-router-dom";
import InventorRoutes from "./inventor";
import EntrepreneurRouterHome from "./entrepreneur-router-home";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/inventor/*" element={<InventorRoutes />} />
      <Route path="/entrepreneurHome/*"  element={ <EntrepreneurRouterHome/> }></Route>
    </Routes>
  );
};

export default IndexRoutes;
