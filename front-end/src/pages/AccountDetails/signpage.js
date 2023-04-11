import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  // Set initial state for form inputs
  const [fullName, setFullName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    axios
      .post("http://localhost:3000/api/userAccount/addUserAccount", {
        fullName: fullName,
        emailAdress: emailAdress,
        contactNumber: contactNumber,
        country: country,
        password: password,
        role: role,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle form reset
  const handleReset = () => {
    // Reset form input states to empty strings
    setFullName("");
    setEmailAdress("");
    setContactNumber("");
    setCountry("");
    setPassword("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="emailAdress">Email Address</label>
        <input
          type="email"
          id="emailAdress"
          value={emailAdress}
          onChange={(event) => setEmailAdress(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="Inventor">Inventor</option>
          <option value="Entrapranure">Entrapranure</option>
          <option value="Mentor">Mentor</option>
        </select>
      </div>
      <div>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Signup;
