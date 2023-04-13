import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAccountTable = () => {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/userAccount/viewAllUserAccounts');
      setUserAccounts(result.data);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Country</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {userAccounts.map((userAccount) => (
          <tr key={userAccount._id}>
            <td>{userAccount.fullName}</td>
            <td>{userAccount.emailAdress}</td>
            <td>{userAccount.contactNumber}</td>
            <td>{userAccount.country}</td>
            <td>{userAccount.role}</td>
            <td>{userAccount.created_at}</td>
            <td>{userAccount.updated_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserAccountTable;
