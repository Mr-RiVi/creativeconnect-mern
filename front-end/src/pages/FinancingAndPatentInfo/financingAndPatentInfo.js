import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { tooltips } from "../../utils/innovationRelatedData";

const FinancingAndPatentInfo = () => {
  const navigate = useNavigate();

  const errorRef = useRef();

  const [fundingNeeded, setFundingNeeded] = useState("");
  const [useOfFunds, setUseOfFunds] = useState("");
  const [potentialSources, setPotentialSources] = useState("");

  const [patentNumber, setPatentNumber] = useState("");
  const [patentFilingDate, setPatentFilingDate] = useState("");
  const [trademarkRegistrationNumber, setTrademarkRegistrationNumber] =
    useState("");
  const [trademarkFilingDate, setTrademarkFilingDate] = useState("");
  const [copyrightRegistrationNumber, setCopyrightRegistrationNumber] =
    useState("");
  const [copyrightFilingDate, setCopyrightFilingDate] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      setErrorMsg("Invalid Entry");
      return;
    }

    sessionStorage.setItem("fundingNeeded", fundingNeeded);
    sessionStorage.setItem("useOfFunds", useOfFunds);
    sessionStorage.setItem("potentialSources", potentialSources);
    sessionStorage.setItem("patentNumber", patentNumber);
    sessionStorage.setItem("patentFilingDate", patentFilingDate);
    sessionStorage.setItem(
      "trademarkRegistrationNumber",
      trademarkRegistrationNumber
    );
    sessionStorage.setItem("trademarkFilingDate", trademarkFilingDate);
    sessionStorage.setItem(
      "copyrightRegistrationNumber",
      copyrightRegistrationNumber
    );
    sessionStorage.setItem("copyrightFilingDate", copyrightFilingDate);

    navigate("../insert-innovation/team-contact-info");
  };

  return (
    <section className="main-section">
      <h1 className="main-sections-headings">
        Funding needs
        <Tooltip
          title={
            <div>
              <p calssName="tooltipDescriptions">{tooltips.fundingNeeds}</p>
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
      {/* error message appear section */}
      <p
        ref={errorRef}
        className={errorMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errorMsg}
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fundingNeeded" style={{ marginRight: "15px" }}>
          Amount of funding needed :
        </label>
        {"Rs."}
        <input
          type="number"
          min="1"
          id="fundingNeeded"
          autoComplete="off"
          onChange={(e) => {
            setFundingNeeded(e.target.value);
          }}
          value={fundingNeeded}
        />
        <Tooltip
          title={
            <div calssName="tooltipDescriptions">
              <p>{tooltips.fundingNeeded}</p>
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

        {/* useOfFunds section */}
        <label htmlFor="useOfFunds" style={{ marginRight: "15px" }}>
          Intended use of funds:
        </label>
        <input
          type="text"
          id="useOfFunds"
          autoComplete="off"
          onChange={(e) => {
            setUseOfFunds(e.target.value);
          }}
          value={useOfFunds}
        />
        <Tooltip
          title={
            <div calssName="tooltipDescriptions">
              <p>{tooltips.useOfFunds}</p>
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

        {/* potentialSources section */}
        <label htmlFor="potentialSources" style={{ marginRight: "15px" }}>
          Potential funding sources:
        </label>
        <input
          type="text"
          id="potentialSources"
          autoComplete="off"
          onChange={(e) => {
            setPotentialSources(e.target.value);
          }}
          value={potentialSources}
        />
        <Tooltip
          title={
            <div calssName="tooltipDescriptions">
              <p>{tooltips.potentialSources}</p>
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
        <hr />

        {/* Intellectual property information section */}
        <h1 className="main-sections-headings">
          Intellectual property information
        </h1>

        {/* patentNumber section */}
        <label htmlFor="patentNumber" style={{ marginRight: "15px" }}>
          Patent number:
        </label>
        <input
          type="text"
          id="patentNumber"
          autoComplete="off"
          onChange={(e) => {
            setPatentNumber(e.target.value);
          }}
          value={patentNumber}
        />
        <br />

        {/* patentFilingDate section */}
        <label htmlFor="patentFilingDate" style={{ marginRight: "15px" }}>
          Patent filing date:
        </label>
        <input
          type="date"
          id="patentFilingDate"
          autoComplete="off"
          onChange={(e) => {
            setPatentFilingDate(e.target.value);
          }}
          value={patentFilingDate}
        />
        <br />

        {/* trademarkRegistrationNumber section */}
        <label
          htmlFor="trademarkRegistrationNumber"
          style={{ marginRight: "15px" }}
        >
          Trademark registration number:
        </label>
        <input
          type="text"
          id="trademarkRegistrationNumber"
          autoComplete="off"
          onChange={(e) => {
            setTrademarkRegistrationNumber(e.target.value);
          }}
          value={trademarkRegistrationNumber}
        />
        <br />

        {/* trademarkFilingDate section */}
        <label htmlFor="trademarkFilingDate" style={{ marginRight: "15px" }}>
          Trademark filing date:
        </label>
        <input
          type="date"
          id="trademarkFilingDate"
          autoComplete="off"
          onChange={(e) => {
            setTrademarkFilingDate(e.target.value);
          }}
          value={trademarkFilingDate}
        />
        <br />

        {/* copyrightRegistrationNumber section */}
        <label
          htmlFor="copyrightRegistrationNumber"
          style={{ marginRight: "15px" }}
        >
          Copyright registration number:
        </label>
        <input
          type="text"
          id="copyrightRegistrationNumber"
          autoComplete="off"
          onChange={(e) => {
            setCopyrightRegistrationNumber(e.target.value);
          }}
          value={copyrightRegistrationNumber}
        />
        <br />

        {/* copyrightFilingDate section */}
        <label htmlFor="copyrightFilingDate" style={{ marginRight: "15px" }}>
          Copyright filing date:
        </label>
        <input
          type="date"
          id="copyrightFilingDate"
          autoComplete="off"
          onChange={(e) => {
            setCopyrightFilingDate(e.target.value);
          }}
          value={copyrightFilingDate}
        />
        <br />

        <div>
          <p>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I hereby certify that the information provided in this form is
            accurate and complete to the best of my knowledge. I understand that
            any false statements or omissions may result in the rejection of my
            innovation submission or other legal consequences. By submitting my
            innovation, I acknowledge and agree that CreativeConnect may use and
            disclose the information provided for evaluation and potential
            investment or other opportunities. I also acknowledge and agree that
            CreativeConnect makes no representations or guarantees regarding the
            success or profitability of my innovation and that any investment or
            partnership decisions will be made at CreativeConnect's sole
            discretion.
          </p>
          <br />
        </div>
        <button disabled={!isChecked ? true : false}>NEXT</button>
      </form>
    </section>
  );
};

export default FinancingAndPatentInfo;
