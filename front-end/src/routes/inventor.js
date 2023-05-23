import { Route, Routes } from "react-router-dom";

import MarketAnalysis from "../pages/MarketAnalysis/marketAnalysis";
import BasicInnovationInformation from "../pages/BasicInnovationInformation/basicInnovationInformation";
import FinancingAndPatentInfo from "../pages/FinancingAndPatentInfo/financingAndPatentInfo";
import TeamAndContactInfo from "../pages/TeamAndContactInformation/teamAndContactInfo";
import InnovationOverview from "../pages/InnovationOverview/innovationOverview";
import ValuationReportPage from "../pages/ValuationReport/valuationReportPage";
import InnovationVault from "../pages/InnovationVault/innovationVault";
import InnovationUpdate from "../pages/InnovationUpdtae/innovationUpdate";

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
      <Route
        path="/insert-innovation/financing-patent-info"
        element={<FinancingAndPatentInfo />}
      />
      <Route
        path="/insert-innovation/team-contact-info"
        element={<TeamAndContactInfo />}
      />
      <Route path="/innovation-overview/" element={<InnovationOverview />} />
      <Route path="/report" element={<ValuationReportPage />} />
      <Route path="/innovation-vault" element={<InnovationVault />} />
      <Route path="/innovation-update" element={<InnovationUpdate />} />
    </Routes>
  );
};

export default InventorRoutes;
