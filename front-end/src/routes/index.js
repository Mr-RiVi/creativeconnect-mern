import React from "react";
import { Routes, Route } from "react-router-dom";
import InventorRoutes from "./inventor";
import UserRoutes from "./user.js";
import MentorRouterHome from "./mentor-router-home";
import EntrepreneurRouterHome from "./entrepreneur-router-home";
import LoginPage from "../pages/AccountDetails/userLogin.js";
import Signup from "../pages/AccountDetails/signpage.js";
import Home from "../pages/HomePage/home.js";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/inventor/*" element={<InventorRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/mentorHome/*" element={<MentorRouterHome />} />
      <Route
        path="/entrepreneurHome/*"
        element={<EntrepreneurRouterHome />}
      ></Route>
      <Route path="/UserLogin" element={<LoginPage />} />
    </Routes>
  );
};

export default IndexRoutes;
