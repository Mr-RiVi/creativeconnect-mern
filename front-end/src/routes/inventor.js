import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MarketAnalysis from "../pages/MarketAnalysis/marketAnalysis";

const inventorRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/market-potential" exact component={MarketAnalysis} />
      </Switch>
    </Router>
  );
};

export default inventorRoutes;
