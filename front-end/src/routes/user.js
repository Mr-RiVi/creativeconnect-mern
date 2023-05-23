import { Route, Routes } from "react-router-dom";

import Header from "../components/layout/header.js";

import UserList from "../pages/AccountDetails/allUsers.js";
import ProfilePage from "../pages/AccountDetails/viewUser.js";
import UserUpdateForm from "../pages/AccountDetails/updateuser.js";
import UserDelete from "../pages/AccountDetails/deleteUser.js";
import EmailForm from "../pages/AccountDetails/userMail.js";
import UserChart from "../pages/AccountDetails/userReport.js";

// import MarketAnalysis from "../pages/MarketAnalysis/marketAnalysis";
// import BasicInnovationInformation from "../pages/BasicInnovationInformation/basicInnovationInformation";

const UserRoutes = () => {
  return (
    <div >
      <Header />
      <Routes>
        
        <Route path="/AllUsers" element={<UserList />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/AllUsers/Update/:id" element={<UserUpdateForm />} />
        <Route path="/AllUsers/delete/:id" element={<UserDelete />} />
        <Route path="/sendMail" element={<EmailForm />} />
        <Route path="/UserReport" element={<UserChart />} />
        
      </Routes>
    </div>
  );
};

export default UserRoutes;
