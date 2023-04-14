import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "http://localhost:3000/api/userAccount/viewAllUserAccounts"
      );
      const json = await response.json();
      if (response.ok) {
        setUser(json);
      }
    };

    fetchUser();
  }, []);

// useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/userAccount/viewAllUserAccounts"
//       );
//       const json = await response.json();
//       if (response.ok) {
//         setUser(json);
//       } else {
//         throw new Error("API error");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchUser();
//   }, []);


  return (
    <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl">Currunt Users of the application</h1>
      <div className="mt-6 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          User Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Role
                        </th>
                        {/* <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Role
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Warehouse ID
                        </th> */}
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.map((user, i) => (
                        <tr
                          key={user.UserAccount_id}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {i + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.fullName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.emailAddress}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.role}
                          </td>
                          {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.role}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.wareId}
                          </td> */}
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2 justify-center">
                              <div>
                                <button
                                  type="button"
                                  className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                  View{" "}
                                </button>

                                {/* Edit Button */}
                                <Link to={`Update/${user.UserAccount_id}`}>
                                  <button
                                    type="button"
                                    className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    value={user.UserAccount_id}
                                    onClick={(e) => {
                                      console.log(e.target.value);
                                    }}
                                  >
                                    Edit{" "}
                                  </button>
                                </Link>

                                {/* Delete Button */}
                                <Link to={`/delete/${user.UserAccount_id}`}>
                                  <button
                                    type="button"
                                    className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    value={user.UserAccount_id}
                                    onClick={(e) => {
                                      console.log(e.target.value);
                                    }}
                                  >
                                    Delete{" "}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
