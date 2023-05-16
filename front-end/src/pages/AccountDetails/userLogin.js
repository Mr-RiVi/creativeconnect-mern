import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Sidebar from "../../components/common/Sanjula/sidenavbar";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/userAccount/login",
        {
          username,
          password,
        }
      );
      if (response.data.success) {
        // Redirect user to respective pages based on role
        if (response.data.role === "Admin") {
          window.location.href = "/user/AllUsers";
        } else if (response.data.role === "Inventor") {
          window.location.href = "/insert-innovation/market-potential";
        } else if (response.data.role === "Entrepreneur") {
          window.location.href = "/entrepreneurHome";
        } else if (response.data.role === "Mentor") {
          window.location.href = "/mentorHome";
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <Sidebar /> */}
      <div className="pl-45">
        <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            User Login
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="w-96">
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            If you don't have an account,{" "}
            <Link to="/user/insert-user" className="text-blue-500">
              click here to create a profile
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
