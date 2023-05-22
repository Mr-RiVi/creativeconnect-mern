import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilePage = ({ match }) => {
  const [user, setUser] = useState({});
  const userId = match.params.id;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `/api/userAccount/viewUserAccount/642e8cb0e0c40a919a07b9de`
        // ${userId}
      );
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>{user.fullName}</h2>
      <p>Email: {user.emailAdress}</p>
      <p>Contact Number: {user.contactNumber}</p>
      <p>Country: {user.country}</p>
      <p>Role: {user.role}</p>
      <Link to="/">Go back</Link>
      <Link to={`/updateUserAccount/${userId}`}>Update</Link>
    </div>
  );
};

export default ProfilePage;
