import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const UpdateUserForm = (props) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // make a GET request to retrieve the user account information
    axios.get(`http://localhost:3000/api/userAccount/viewUserAccount/${props.match.params.id}`)
      .then(response => {
        // populate the form with the user account information
        setFullName(response.data.fullName);
        setEmailAddress(response.data.emailAddress);
        setContactNumber(response.data.contactNumber);
        setCountry(response.data.country);
        setPassword(response.data.password);
        setRole(response.data.role);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // create an object with the updated user account information
    const updatedUser = {
      fullName: fullName,
      emailAddress: emailAddress,
      contactNumber: contactNumber,
      country: country,
      password: password,
      role: role
    };

    // make a PUT request to update the user account information
    axios.put(`http://localhost:3000/api/userAccount/updateUserAccount/${props.match.params.id}`, updatedUser)
      .then(response => {
        console.log(response);
        // redirect to the view user account page
        props.history.push(`/viewUserAccount/${props.match.params.id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Update User Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Contact Number:
          <input type="tel" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" value={country} onChange={e => setCountry(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Role:
          <input type="text" value={role} onChange={e => setRole(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
