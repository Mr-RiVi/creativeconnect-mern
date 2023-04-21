import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import {
  tooltips,
  demandOptions,
  competitionOptions,
  timeToPenetrateMarketAndAchieveProfitabilityOptions,
} from "../../utils/innovationRelatedData";

const MarketAnalysis = () => {
  const navigate = useNavigate();

  const targetMarketRef = useRef();
  const errorRef = useRef();

  const [targetMarket, setTargetMarket] = useState("");
  const [targetMarketFocus, setTargetMarketFocus] = useState(false);

  const [marketSize, setMarketSize] = useState("");
  const [demand, setDemand] = useState("Select current demand");
  const [uniqueSellingProposition, setUniqueSellingProposition] = useState("");
  const [
    levelOfCompetitionInTargetMarket,
    setLevelOfCompetitionInTargetMarket,
  ] = useState("Select the level");
  const [marketingStrategies, setMarketingStrategies] = useState("");
  const [
    timeToPenetrateMarketAndAchieveProfitability,
    setTimeToPenetrateMarketAndAchieveProfitability,
  ] = useState("Enter the time period");

  const [estimatedCost, setEstimatedCost] = useState("");
  const [targetSellingPrice, setTargetSellingPrice] = useState("");
  const [competition, setCompetition] = useState("");
  const [pricingFactors, setPricingFactors] = useState("");
  const [targetMarketRevenue, setTargetMarketRevenue] = useState("");

  useEffect(() => {
    targetMarketRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("targetMarket", targetMarket);
    sessionStorage.setItem("marketSize", marketSize);
    sessionStorage.setItem("demand", demand);
    sessionStorage.setItem(
      "uniqueSellingProposition",
      uniqueSellingProposition
    );
    sessionStorage.setItem(
      "levelOfCompetitionInTargetMarket",
      levelOfCompetitionInTargetMarket
    );
    sessionStorage.setItem("marketingStrategies", marketingStrategies);
    sessionStorage.setItem(
      "timeToPenetrateMarketAndAchieveProfitability",
      timeToPenetrateMarketAndAchieveProfitability
    );

    sessionStorage.setItem("estimatedCost", estimatedCost);
    sessionStorage.setItem("targetSellingPrice", targetSellingPrice);
    sessionStorage.setItem("competition", competition);
    sessionStorage.setItem("pricingFactors", pricingFactors);
    sessionStorage.setItem("targetMarketRevenue", targetMarketRevenue);

    navigate("../insert-innovation/financing-patent-info");
  };
  return (
    <section className="main-section">
      <h1 className="main-sections-headings">
        Market Potential
        <Tooltip
          title={
            <div>
              <p calssName="tooltipDescriptions">{tooltips.marketPotential}</p>
            </div>
          }
          placement="right"
          arrow
        >
          <span className="infoIcon">
            <InfoOutlinedIcon fontSize="small" />
          </span>
        </Tooltip>
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Market Potential section */}
        {/* targetMarket section */}
        <table className="table">
          <tr>
            <td>
              <label htmlFor="targetMarket">
                What is the target market for your innovation?
                <Tooltip
                  title={
                    <div>
                      <p calssName="tooltipDescriptions">
                        {tooltips.targetMarket}
                      </p>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              <input
                type="text"
                id="targetmarket"
                ref={targetMarketRef}
                autoComplete="off"
                onChange={(e) => {
                  setTargetMarket(e.target.value);
                }}
                value={targetMarket}
                // onFocus={setTargetMarketFocus(true)}
                // onBlur={setTargetMarketFocus(false)}
              />
            </td>
            {/* marketSize section */}
            <td>
              <label htmlFor="marketSize">
                How big is the market for your innovation?
                <Tooltip
                  title={
                    <div calssName="tooltipDescriptions">
                      <p>{tooltips.marketSize}</p>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              {"Rs."}
              <input
                type="number"
                id="marketSize"
                min="1"
                autoComplete="off"
                onChange={(e) => {
                  setMarketSize(e.target.value);
                }}
                value={marketSize}
              />
            </td>
          </tr>
          <tr>
            {/* demand section */}
            <td>
              <label htmlFor="demand">
                What is the current demand for your innovation?
                <Tooltip
                  title={
                    <div className="tooltipDiv">
                      <br />
                      <ul className="tooltipUL">
                        <ul>
                          {demandOptions.map((demand) => (
                            <>
                              <li>
                                <strong>{demand.label}- </strong>
                                {demand.tooltip}
                              </li>
                              <br />
                            </>
                          ))}
                        </ul>
                      </ul>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              <select
                id="demand"
                onChange={(e) => setDemand(e.target.value)}
                value={demand}
              >
                <option disabled>Select current demand</option>
                {demandOptions.map((demand) => (
                  <option key={demand.label} value={demand.label}>
                    {demand.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            {/* uniqueSellingProposition section */}
            <td colSpan={2}>
              <label htmlFor="uniqueSellingProposition">
                What is your unique selling proposition?
                <Tooltip
                  title={
                    <div calssName="tooltipDescriptions">
                      <p>{tooltips.uniqueSellingProposition}</p>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              <input
                type="text"
                id="uniqueSellingProposition"
                autoComplete="off"
                onChange={(e) => {
                  setUniqueSellingProposition(e.target.value);
                }}
                value={uniqueSellingProposition}
              />
            </td>
          </tr>
          <tr>
            {/* levelOfCompetitionInTargetMarket section */}
            <td>
              <label htmlFor="levelOfCompetitionInTargetMarket">
                What is the level of competition in your target market?
                <Tooltip
                  title={
                    <div className="tooltipDiv">
                      <br />
                      <ul className="tooltipUL">
                        <ul>
                          {competitionOptions.map((competitionOptions) => (
                            <>
                              <li>
                                <strong>{competitionOptions.value}- </strong>
                                {competitionOptions.label}
                              </li>
                              <br />
                            </>
                          ))}
                        </ul>
                      </ul>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              <select
                id="levelOfCompetitionInTargetMarket"
                onChange={(e) =>
                  setLevelOfCompetitionInTargetMarket(e.target.value)
                }
                value={levelOfCompetitionInTargetMarket}
              >
                <option disabled>Select the level</option>
                {competitionOptions.map((competition) => (
                  <option key={competition.value} value={competition.value}>
                    {competition.value}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            {/* marketingStrategies section */}
            <td colSpan={2}>
              <label htmlFor="marketingStrategies">
                What marketing strategies do you plan to use to reach your
                target audience?
                <Tooltip
                  title={
                    <div calssName="tooltipDescriptions">
                      <p>{tooltips.marketingStrategies}</p>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              <input
                type="text"
                id="marketingStrategies"
                autoComplete="off"
                onChange={(e) => {
                  setMarketingStrategies(e.target.value);
                }}
                value={marketingStrategies}
              />
            </td>
          </tr>
          <tr>
            {/* timeToPenetrateMarketAndAchieveProfitability section */}
            <td colSpan={2}>
              <label htmlFor="timeToPenetrateMarketAndAchieveProfitability">
                How long do you expect it to take to penetrate the market and
                achieve profitability?
                <Tooltip
                  title={
                    <div calssName="tooltipDescriptions">
                      <p>
                        {tooltips.timeToPenetrateMarketAndAchieveProfitability}
                      </p>
                    </div>
                  }
                  placement="right"
                  arrow
                >
                  <span className="infoIcon">
                    <InfoOutlinedIcon fontSize="small" />
                  </span>
                </Tooltip>
              </label>
              <br />
              <select
                id="timeToPenetrateMarketAndAchieveProfitability"
                onChange={(e) =>
                  setTimeToPenetrateMarketAndAchieveProfitability(
                    e.target.value
                  )
                }
                value={timeToPenetrateMarketAndAchieveProfitability}
              >
                <option disabled>Enter the time period</option>
                {timeToPenetrateMarketAndAchieveProfitabilityOptions.map(
                  (time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  )
                )}
              </select>
            </td>
          </tr>
        </table>
        {/* Competitive Pricing Analysis section */}
        <br />
        <h4>
          Price point of your innovation and how does it compare to competitors.
          <Tooltip
            title={
              <div calssName="tooltipDescriptions">
                <p>{tooltips.CompetitivePricingAnalysis}</p>
              </div>
            }
            placement="right"
            arrow
          >
            <span className="infoIcon">
              <InfoOutlinedIcon fontSize="small" />
            </span>
          </Tooltip>
        </h4>
        <br />
        <dev className="CPA-section">
          {/* estimatedCost section */}
          <label htmlFor="estimatedCost" style={{ marginRight: "15px" }}>
            What is the estimated cost of producing the innovation?
          </label>
          {"Rs."}
          <input
            type="number"
            min="1"
            id="estimatedCost"
            autoComplete="off"
            onChange={(e) => {
              setEstimatedCost(e.target.value);
            }}
            value={estimatedCost}
          />
          <Tooltip
            title={
              <div calssName="tooltipDescriptions">
                <p>{tooltips.estimatedCost}</p>
              </div>
            }
            placement="right"
            arrow
          >
            <span className="infoIcon">
              <InfoOutlinedIcon fontSize="small" />
            </span>
          </Tooltip>
          <br />
          {/* targetSellingPrice section */}
          <label
            htmlFor="targetSellingPrice"
            style={{ marginRight: "15px", marginLeft: "35px" }}
          >
            What is the target selling price of the innovation?
          </label>
          {"Rs."}
          <input
            type="number"
            min="1"
            id="targetSellingPrice"
            autoComplete="off"
            onChange={(e) => {
              setTargetSellingPrice(e.target.value);
            }}
            value={targetSellingPrice}
          />
          <Tooltip
            title={
              <div calssName="tooltipDescriptions">
                <p>{tooltips.targetSellingPrice}</p>
              </div>
            }
            placement="right"
            arrow
          >
            <span className="infoIcon">
              <InfoOutlinedIcon fontSize="small" />
            </span>
          </Tooltip>
          <br />

          {/* competition section */}
          <label
            htmlFor="competition"
            style={{ marginRight: "15px", marginLeft: "35px" }}
          >
            How long do you expect it to take to penetrate the market and
            achieve profitability?
            <Tooltip
              title={
                <div calssName="tooltipDescriptions">
                  <p>{tooltips.competition}</p>
                </div>
              }
              placement="right"
              arrow
            >
              <span className="infoIcon">
                <InfoOutlinedIcon fontSize="small" />
              </span>
            </Tooltip>
          </label>
          <br />
          <input
            type="text"
            id="competition"
            autoComplete="off"
            onChange={(e) => {
              setCompetition(e.target.value);
            }}
            value={competition}
            style={{ marginLeft: "35px" }}
          />
          <br />

          {/* pricingFactors section */}
          <label
            htmlFor="pricingFactors"
            style={{ marginRight: "15px", marginLeft: "35px" }}
          >
            What factors have influenced the decision on pricing?
            <Tooltip
              title={
                <div calssName="tooltipDescriptions">
                  <p>{tooltips.pricingFactors}</p>
                </div>
              }
              placement="right"
              arrow
            >
              <span className="infoIcon">
                <InfoOutlinedIcon fontSize="small" />
              </span>
            </Tooltip>
          </label>
          <br />
          <input
            type="text"
            id="pricingFactors"
            autoComplete="off"
            onChange={(e) => {
              setPricingFactors(e.target.value);
            }}
            value={pricingFactors}
            style={{ marginLeft: "35px" }}
          />
          <br />

          {/* targetMarketRevenue section */}
          <label
            htmlFor="targetMarketRevenue"
            style={{ marginRight: "15px", marginLeft: "35px" }}
          >
            What is the estimated annual revenue of your target market?
          </label>
          <input
            type="text"
            id="targetMarketRevenue"
            autoComplete="off"
            onChange={(e) => {
              setTargetMarketRevenue(e.target.value);
            }}
            value={targetMarketRevenue}
          />
          <Tooltip
            title={
              <div calssName="tooltipDescriptions">
                <p>{tooltips.targetMarketRevenue}</p>
              </div>
            }
            placement="right"
            arrow
          >
            <span className="infoIcon">
              <InfoOutlinedIcon fontSize="small" />
            </span>
          </Tooltip>
        </dev>
        <div className="submitButton">
          <button>NEXT</button>
        </div>
      </form>
    </section>
  );
};

export default MarketAnalysis;
