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
      <div className="boder">
      <div className="card">
        <div className="123">
          <h1 className="h1">Update User Details</h1>
          <div className="4567">
            <div className="465">
            <br></br>
              <div>
                <label className="label">User Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="input"
                  placeholder="User Name"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  value={fullName}
                />
                <br></br>
              </div>
              <div>
                <label className="label">Email Address</label>
                <input
                  id="emailAdress"
                  name="emailAdress"
                  type="text"
                  required
                  className="input"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                  value={emailAddress}
                />
                <br></br>
              </div>
              <div>
                <label className="label">contact Number </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="text"
                  required
                  className="input"
                  placeholder="contact Number"
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  value={contactNumber}
                />
                <br></br>
              </div>
              <div>
                <label className="label">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  className="input"
                  placeholder="country"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  value={country}
                />
                <br></br>
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  id="password"
                  name="password"
                  type="Text"
                  required
                  className="input"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <br></br>
              </div>
              <div>
                <label className="label">Role</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  required
                  className="input"
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
                  className="753"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
