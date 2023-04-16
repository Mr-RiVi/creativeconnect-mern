import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserList from "./allUsers";

const UserDelete = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const deleteUser = async () => {
      fetch("http://localhost:3000/api/userAccount/deleteUserAccount/" + id, {
        method: "DELETE",
      });
    };
    deleteUser();
  }, [id]);
  return <UserList />;
};

export default UserDelete;
