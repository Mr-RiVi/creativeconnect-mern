// import React, { useState, useEffect } from 'react';
// import UserAccount from '../'; // Import the UserAccount model

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch all users from the database when the component mounts
//     UserAccount.find({})
//       .then((data) => setUsers(data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleView = (id) => {
//     // Handle view button click
//     console.log(`View user ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Handle delete button click
//     console.log(`Delete user ${id}`);
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Edit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.fullName}</td>
//               <td>{user.emailAddress}</td>
//               <td>{user.role}</td>
//               <td>
//                 <button onClick={() => handleView(user._id)}>View</button>
//                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;
