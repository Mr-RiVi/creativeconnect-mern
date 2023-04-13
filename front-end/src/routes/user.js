import { Route, Routes } from "react-router-dom";

import Signup from "../pages/AccountDetails/signpage.js";
import UserAccountTable from "../pages/AccountDetails/allUsers.js";
// import MarketAnalysis from "../pages/MarketAnalysis/marketAnalysis";
// import BasicInnovationInformation from "../pages/BasicInnovationInformation/basicInnovationInformation";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/insert-user" element={<Signup />} />
      <Route path="/AllUsers" element={<UserAccountTable />} />
    </Routes>
  );
};

export default UserRoutes;
