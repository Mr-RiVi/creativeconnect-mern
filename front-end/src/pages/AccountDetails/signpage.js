import React, { useState } from "react";
import axios from "axios";

import "../../assets/styles/signup.css";

const Signup = () => {
  // Set initial state for form inputs
  const [fullName, setFullName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior

    // Regular expression to check if contact number contains only 10 digits
    const contactNumberRegex = /^[0-9]{10}$/;

    // Regular expression to check if password contains at least one uppercase letter and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

    // Check if all fields are filled in
    if (
      !fullName ||
      !emailAdress ||
      !contactNumber ||
      !country ||
      !password ||
      !role
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Check if contact number is valid
    if (!contactNumber.match(contactNumberRegex)) {
      setErrorMessage("Contact number should contain only 10 digits.");
      return;
    }

    // Check if password is valid
    if (!password.match(passwordRegex)) {
      setErrorMessage(
        "Password should contain at least one uppercase letter and one digit."
      );
      return;
    }

    // Send data to server
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
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Error submitting form. Please try again later.");
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
    setErrorMessage("");
  };

  return (
    <div id="card">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emailAdress">Email Address</label>
          <input
            type="email"
            id="emailAdress"
            value={emailAdress}
            onChange={(e) => setEmailAdress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Brazil">Brazil</option>
            <option value="Argentina">Argentina</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="South Korea">South Korea</option>
            <option value="Australia">Australia</option>
          </select>
        </div> */}
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select a Role</option>
            <option value="Inventor">Inventor</option>
            <option value="Entrapranure">Entrapranure</option>
            <option value="Mentor">Mentor</option>
          </select>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
