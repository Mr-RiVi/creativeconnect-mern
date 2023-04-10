import { Route, Routes } from "react-router-dom";

import MarketAnalysis from "../pages/MarketAnalysis/marketAnalysis";
import BasicInnovationInformation from "../pages/BasicInnovationInformation/basicInnovationInformation";

const InventorRoutes = () => {
  return (
    <Routes>
      <Route
        path="/insert-innovation"
        element={<BasicInnovationInformation />}
      />
      <Route
        path="/insert-innovation/market-potential"
        element={<MarketAnalysis />}
      />
    </Routes>
  );
};

export default InventorRoutes;
