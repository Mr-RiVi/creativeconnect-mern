import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/allUsers.css";
// import Navigation from "../../components/common/Sanjula/navbar";
import Sidebar from "../../components/common/Sanjula/sidenavbar";
import Header from "../../components/layout/header";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* <Header/> */}
      <Sidebar />
      <div className="csaard">
        <div className="cont123ainer ">
          <h1 className="h1">Current Users of the application</h1>
          <div className="0002">
            <div className="0003">
              <div className="0004">
                <div className="0005">
                  <div className="0006">
                    <div className="0007">
                      <input
                        type="text"
                        placeholder="Search by name or role"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                      />
                      <table className="table">
                        <thead className="thead">
                          <tr>
                            <th scope="col" className="th">
                              No
                            </th>
                            <th scope="col" className="th">
                              User Name
                            </th>
                            <th scope="col" className="th">
                              Email
                            </th>
                            <th scope="col" className="th">
                              Role
                            </th>
                            <th scope="col" className="th">
                              Actions
                            </th>
                          </tr>
                        </thead>

                        <tbody className="tbody">
                          {filteredUsers.map((user, i) => (
                            <tr key={user._id} className="tr">
                              <td className="td">{i + 1}</td>
                              <td className="td">{user.fullName}</td>
                              <td className="td">{user.emailAdress}</td>
                              <td className="td">{user.role}</td>

                              <td className="123">
                                <div className="456">
                                  <div>
                                    {/* Edit Button */}
                                    <Link to={`Update/${user._id}`}>
                                      <button
                                        type="button"
                                        className="button"
                                        value={user.UserAccount_id}
                                        onClick={(e) => {
                                          console.log(e.target.value);
                                        }}
                                      >
                                        Edit{" "}
                                      </button>
                                    </Link>

                                    {/* Delete Button */}
                                    <Link to={`delete/${user._id}`}>
                                      <button
                                        type="button"
                                        className="button"
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
      </div>
    </div>
  );
};

export default UserList;
                                   
