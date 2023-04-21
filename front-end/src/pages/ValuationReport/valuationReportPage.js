import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ValuationReportPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  return (
    <section className="main-section">
      <h1>Estimate Innovation Price Report</h1>
      <section className="intro">
        <h3>Introduction</h3>
        <p>
          The purpose of this report is to provide a comprehensive analysis of
          the estimated price for a particular innovation. The innovation under
          consideration has been evaluated based on various factors, including
          market potential, level of competition, estimated cost, and funding
          needs. In this report, we aim to provide insights into the estimated
          price of the innovation and the methodology used to arrive at the
          estimation. Additionally, we will analyze the results and provide
          context for the findings, including any potential implications or
          limitations.
        </p>
      </section>

      <section className="methodology">
        <h3>Methodology</h3>
        <p>
          We used a regression model to analyze the relationship between the
          input data and the estimated value of the innovation. The model used
          the following independent variables:
        </p>
        <ul>
          <li>Market size</li>
          <li>Market demand</li>
          <li>Level of competition in the target market</li>
          <li>Time to penetrate the market and achieve profitability</li>
          <li>Estimated cost</li>
          <li>Target selling price</li>
          <li>Funding needed</li>
        </ul>
      </section>

      <section className="results">
        <h3>Results</h3>
        <h4>
          Estimated Price: {"Rs."}
          {"3600.00"}
        </h4>
        <p>
          The estimated price of the innovation is [insert estimated price].
          This price was derived using a multivariate regression analysis
          algorithm, which is a statistical method that helps to identify the
          relationship between multiple independent variables and a dependent
          variable, such as the price of an innovation. The following factors
          were taken into account:
        </p>
        <ul>
          <li>Market size[]</li>
          <li>Market demand[]</li>
          <li>Level of competition in the target market[]</li>
          <li>Time to penetrate the market and achieve profitability[]</li>
          <li>Estimated cost[]</li>
          <li>Target selling price[]</li>
          <li>Funding needed[]</li>
        </ul>
        <p>
          Each of these factors was given a weight based on their perceived
          impact on the final price. The weights were determined through careful
          analysis and consideration of various market factors.
        </p>
        <p>
          Based on the analysis, it was determined that the most significant
          factors in determining the final price were [insert factors]. The
          estimated price was then calculated using these factors and their
          respective weights.
        </p>
        <p>
          It's important to note that while this estimated price provides a
          valuable starting point, there may be other factors that could impact
          the final price. These factors should be carefully considered and
          evaluated as part of any future pricing strategy."
        </p>
      </section>

      <section className="analysis">
        <h3>Analysis</h3>
        <p>
          The results of our analysis show that the model is able to predict
          innovation price with a high degree of accuracy, with an [R-squared
          value of 0.85]. This indicates that the model explains a significant
          portion of the variation in innovation price.
        </p>
        <p>
          One limitation of our model is that it is based on a relatively small
          dataset, which may not be fully representative of the entire
          population of innovations. As a result, our estimates may not be as
          accurate for innovations outside of our sample.
        </p>
        <p>
          Our findings have important implications for innovation pricing
          strategies. For instance, our model enables firms to simulate the
          effects of various pricing scenarios on innovation profitability. By
          estimating the impact of price changes on demand and revenue, firms
          can make more informed decisions about pricing strategies and
          determine the optimal price point for a given innovation.
        </p>
        <p>
          Overall, our analysis suggests that our model is a useful tool for
          estimating innovation price, and that the factors identified in our
          analysis are important drivers of innovation pricing decisions.
          However, further research is needed to confirm the robustness of our
          findings, and to expand the scope of our analysis to include a wider
          range of innovations and market conditions.
        </p>
      </section>

      <section className="conclusion">
        <h3>Conclusion</h3>
        <p>
          In conclusion, our analysis shows that market size, market demand,
          level of competition, time to profitability, estimated cost, target
          selling price, and funding needed are important factors to consider
          when pricing an innovation. Our model has demonstrated that these
          factors have a significant impact on innovation pricing and
          profitability. Based on the results, we recommend that firms carefully
          consider each of these factors when developing pricing strategies.
          Additionally, our model can be used to simulate different pricing
          scenarios, allowing firms to identify the optimal price point for a
          given innovation. By using this approach, firms can maximize
          profitability and make informed decisions about pricing strategies.
          Overall, our findings provide valuable insights into innovation
          pricing strategies and can be used by firms to make more informed
          decisions.
        </p>
      </section>
    </section>
  );
};

export default ValuationReportPage;
