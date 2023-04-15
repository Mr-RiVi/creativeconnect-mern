import { Route, Routes } from "react-router-dom";

import Signup from "../pages/AccountDetails/signpage.js";
import UserList from "../pages/AccountDetails/allUsers.js";
import ProfilePage from "../pages/AccountDetails/viewUser.js";
import UserUpdateForm from "../pages/AccountDetails/updateuser.js";
// import MarketAnalysis from "../pages/MarketAnalysis/marketAnalysis";
// import BasicInnovationInformation from "../pages/BasicInnovationInformation/basicInnovationInformation";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/insert-user" element={<Signup />} />
      <Route path="/AllUsers" element={<UserList />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/AllUsers/Update/:id" element={<UserUpdateForm />} />
    </Routes>
  );
};

export default UserRoutes;
