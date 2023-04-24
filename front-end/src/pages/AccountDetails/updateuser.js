import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import Navigation from "../../components/common/Sanjula/navbar";
import Sidebar from "../../components/common/Sanjula/sidenavbar";
import "../../assets/styles/userupdate.css";

export default function UserUpdateForm() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { id } = useParams();

  const Update = async (e) => {
    e.preventDefault();

    const user = {
      fullName,
      emailAddress,
      contactNumber,
      country,
      password,
      role,
    };

    console.log(user);
    const response = await fetch(
      "http://localhost:3000/api/userAccount/updateUserAccount/" + id,
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      console.log(json);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userAccount/viewUserAccount/" + id)
      .then((response) => {
        console.log(response);
        let json = response.data.data;
        setFullName(json.fullName);
        setEmailAddress(json.emailAdress);
        setContactNumber(json.contactNumber);
        setCountry(json.country);
        setPassword(json.password);
        setRole(json.role);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <Sidebar />
      <div className="card">
        <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
          <h1 className="text-3xl">Update User Details</h1>
          <div className="mt-6 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
            <br></br>
              <div>
                <label className="sr-only">User Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="User Name"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  value={fullName}
                />
                <br></br>
              </div>
              <div>
                <label className="sr-only">Email Address</label>
                <input
                  id="emailAdress"
                  name="emailAdress"
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                  value={emailAddress}
                />
                <br></br>
              </div>
              <div>
                <label className="sr-only">contact Number </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="contact Number"
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  value={contactNumber}
                />
                <br></br>
              </div>
              <div>
                <label className="sr-only">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="country"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  value={country}
                />
                <br></br>
              </div>

              <div>
                <label className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="Text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <br></br>
              </div>
              <div>
                <label className="sr-only">Role</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  required
                  className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="role"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  value={role}
                />
              </div>

              <br></br>
              <div className="but">
                <button
                  onClick={Update}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
