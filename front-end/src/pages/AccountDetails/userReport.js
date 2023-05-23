import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/common/Sanjula/sidenavbar";

const UserChart = () => {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    fetchUserAccounts();
  }, []);

  const fetchUserAccounts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/userAccount/viewAllUserAccounts"
      );
      setUserAccounts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const countUserByRole = (role) => {
    return userAccounts.filter((user) => user.role === role).length;
  };

  console.log("userAccounts:", userAccounts); // Log userAccounts state

  const totalUsers = userAccounts.length;
  const inventorsCount = countUserByRole("Inventor");
  const entrepreneursCount = countUserByRole("Entrapranure");
  const mentorsCount = countUserByRole("Mentor");

  return (
    <div>
      <Sidebar />
      <div className="pl-64">
        <div className="flex flex-col h-screen">
          <nav className="p-4"></nav>
          <div className="flex flex-grow items-center justify-center mx-auto">
            <div className="w-3/4">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                  User Data
                </h1>
                <p className="text-lg font-semibold mb-4">
                  Out of {totalUsers} total users:
                </p>
                <div className="flex space-x-4">
                  <div className="flex flex-col h-96 w-40 bg-red-500">
                    <div
                      className="h-full bg-red-300 transform rotate-180"
                      style={{
                        height: `${(inventorsCount / totalUsers) * 200}%`,
                        width: "100%",
                      }}
                    ></div>
                    <p className="text-center text-sm mt-2">{inventorsCount}</p>
                    <p className="text-center text-xs text-gray-600">
                      Inventors
                    </p>
                  </div>
                  <div className="flex flex-col h-96 w-40 bg-blue-500">
                    <div
                      className="h-full bg-blue-300 transform rotate-180"
                      style={{
                        height: `${(entrepreneursCount / totalUsers) * 200}%`,
                        width: "100%",
                      }}
                    ></div>
                    <p className="text-center text-sm mt-2">
                      {entrepreneursCount}
                    </p>
                    <p className="text-center text-xs text-gray-600">
                      Entrapranure
                    </p>
                  </div>
                  <div className="flex flex-col h-96 w-40 bg-yellow-500">
                    <div
                      className="h-full bg-yellow-300 transform rotate-180"
                      style={{
                        height: `${(mentorsCount / totalUsers) * 200}%`,
                        width: "100%",
                      }}
                    ></div>
                    <p className="text-center text-sm mt-2">{mentorsCount}</p>
                    <p className="text-center text-xs text-gray-600">Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChart;   
