// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import UserAccount from './userAccountModel'; // assuming this is the model file you provided

// const UsersTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       const response = await UserAccount.find();
//       setUsers(response.data);
//     }
//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     await UserAccount.delete(id);
//     setUsers(users.filter(user => user._id !== id));
//   }

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Full Name</th>
//           <th>Email Address</th>
//           <th>Role</th>
//           <th>Options</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(user => (
//           <tr key={user._id}>
//             <td>{user.fullName}</td>
//             <td>{user.emailAdress}</td>
//             <td>{user.role}</td>
//             <td>
//               <Link to={`/users/${user._id}`}>View</Link>
//               <button onClick={() => handleDelete(user._id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UsersTable;
