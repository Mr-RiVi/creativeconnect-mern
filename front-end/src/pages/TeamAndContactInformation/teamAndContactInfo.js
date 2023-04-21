import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { tooltips } from "../../utils/innovationRelatedData";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const INNOVATION_INSERT_URL =
  "http://localhost:3000/api/innovation/insertInnovation";

const TeamAndContactInfo = () => {
  const navigate = useNavigate();

  const [teamMembers, setTeamMembers] = useState([
    { memberName: "", email: "", role: "", relationshipToTheInnovation: "" },
  ]); //teamMembers state eka object array ekak (me array eke tynne objects)

  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleAddMember = () => {
    setTeamMembers([
      ...teamMembers,
      { memberName: "", email: "", role: "", relationshipToTheInnovation: "" },
    ]); //(...teamMembers (spread op) use krl danata teamMembers array eke tyna okkoma objects methnata dala finally empty aluth object ekk add krla)
  };

  const handleMemberNameChange = (index, value) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index].memberName = value;
    setTeamMembers(newTeamMembers);
  };

  const handleEmailChange = (index, value) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index].email = value;
    setTeamMembers(newTeamMembers);
  };

  const handleRoleChange = (index, value) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index].role = value;
    setTeamMembers(newTeamMembers);
  };

  const handleRelationshipToTheInnovationChange = (index, value) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index].relationshipToTheInnovation = value;
    setTeamMembers(newTeamMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = sessionStorage.getItem("title");
    const industry = sessionStorage.getItem("industry");
    const stage = sessionStorage.getItem("stage");
    const description = sessionStorage.getItem("description");
    const targetMarket = sessionStorage.getItem("targetMarket");
    const marketSize = sessionStorage.getItem("marketSize");
    const demand = sessionStorage.getItem("demand");
    const uniqueSellingProposition = sessionStorage.getItem(
      "uniqueSellingProposition"
    );
    const levelOfCompetitionInTargetMarket = sessionStorage.getItem(
      "levelOfCompetitionInTargetMarket"
    );
    const marketingStrategies = sessionStorage.getItem("marketingStrategies");
    const timeToPenetrateMarketAndAchieveProfitability = sessionStorage.getItem(
      "timeToPenetrateMarketAndAchieveProfitability"
    );

    const estimatedCost = sessionStorage.getItem("estimatedCost");
    const targetSellingPrice = sessionStorage.getItem("targetSellingPrice");
    const competition = sessionStorage.getItem("competition");
    const pricingFactors = sessionStorage.getItem("pricingFactors");
    const targetMarketRevenue = sessionStorage.getItem("targetMarketRevenue");

    const fundingNeeded = sessionStorage.getItem("fundingNeeded");
    const useOfFunds = sessionStorage.getItem("useOfFunds");
    const potentialSources = sessionStorage.getItem("potentialSources");

    const patentNumber = sessionStorage.getItem("patentNumber");
    const patentFilingDate = sessionStorage.getItem("patentFilingDate");
    const trademarkRegistrationNumber = sessionStorage.getItem(
      "trademarkRegistrationNumber"
    );
    const trademarkFilingDate = sessionStorage.getItem("trademarkFilingDate");
    const copyrightRegistrationNumber = sessionStorage.getItem(
      "copyrightRegistrationNumber"
    );
    const copyrightFilingDate = sessionStorage.getItem("copyrightFilingDate");

    console.log(
      "price analisis :" + estimatedCost,
      targetSellingPrice,
      competition,
      pricingFactors,
      targetMarketRevenue
    );

    const innovationDetails = {
      title,
      industry,
      stage,
      description,

      marketPotential: {
        targetMarket,
        marketSize,
        demand,
        uniqueSellingProposition,
        levelOfCompetitionInTargetMarket,
        marketingStrategies,
        timeToPenetrateMarketAndAchieveProfitability,
        competitivePricingAnalysis: {
          estimatedCost,
          targetSellingPrice,
          competition,
          pricingFactors,
          targetMarketRevenue,
        },
      },

      fundingNeeds: {
        fundingNeeded,
        useOfFunds,
        potentialSources,
      },

      intellectualPropertyInformation: {
        patentNumber,
        patentFilingDate,
        trademarkRegistrationNumber,
        trademarkFilingDate,
        copyrightRegistrationNumber,
        copyrightFilingDate,
      },

      teamMembers: [...teamMembers],

      contactInformation: {
        contactName,
        email,
        phoneNumber,
        address,
      },
    };

    const response = await axios.post(INNOVATION_INSERT_URL, innovationDetails);
    console.log(response.data._id);
    console.log(innovationDetails);

    // Clear session storage
    sessionStorage.clear();

    if (response.data && response.data._id) {
      // if the _id property exists in the response data, use it
      navigate(`../innovation-overview?id=${response.data._id}`);
    } else {
      // handle the case where the _id property is not present in the response
      console.error("Unable to retrieve innovation ID from response");
    }
  };
  return (
    <section className="main-section">
      {/* Team information section */}
      <h1 className="main-sections-headings">Team Information</h1>
      <form onSubmit={handleSubmit}>
        <>
          {teamMembers.map((teamMember, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1">
                  Team Member {index + 1} : {teamMember.memberName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="fullname">Fullname :</label>
                  <input
                    type="text"
                    id="fullname"
                    autoComplete="off"
                    onChange={(e) => {
                      handleMemberNameChange(index, e.target.value);
                    }}
                    value={teamMember.memberName}
                  />
                  <br />
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => {
                      handleEmailChange(index, e.target.value);
                    }}
                    value={teamMember.email}
                  />
                  <br />
                  <label htmlFor="role">
                    Role :
                    <Tooltip
                      title={
                        <div>
                          <p calssName="tooltipDescriptions">{tooltips.role}</p>
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
                  <input
                    type="text"
                    id="role"
                    autoComplete="off"
                    onChange={(e) => {
                      handleRoleChange(index, e.target.value);
                    }}
                    value={teamMember.role}
                  />
                  <br />
                  <label htmlFor="relationshipToTheInnovation">
                    Relationship to the innovation :
                    <Tooltip
                      title={
                        <div>
                          <p calssName="tooltipDescriptions">
                            {tooltips.relationshipToTheInnovation}
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
                  <input
                    type="text"
                    id="relationshipToTheInnovation"
                    autoComplete="off"
                    onChange={(e) => {
                      handleRelationshipToTheInnovationChange(
                        index,
                        e.target.value
                      ); // "Role" is more focused on the job function or title of the team member, while "Relationship to the innovation" is more focused on their involvement with the innovation being submitted.
                    }}
                    value={teamMember.relationshipToTheInnovation}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleAddMember}
            style={{ width: "150px", margin: "20px" }}
          >
            Add Member
          </Button>
        </>

        <hr />
        <h1 className="main-sections-headings">Contact Information</h1>
        {/* Contact Informations section */}
        <label htmlFor="contactName" style={{ marginRight: "25px" }}>
          Name:
        </label>
        <input
          type="text"
          id="contactName"
          autoComplete="off"
          onChange={(e) => {
            setContactName(e.target.value);
          }}
          value={contactName}
        />
        <br />

        <label htmlFor="company-email" style={{ marginRight: "25px" }}>
          Email:
        </label>
        <input
          type="text"
          id="company-email"
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />

        <label htmlFor="phoneNumber" style={{ marginRight: "25px" }}>
          Phone number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          autoComplete="off"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber}
        />
        <br />

        <label htmlFor="address" style={{ marginRight: "25px" }}>
          Address:
        </label>
        <input
          type="text"
          id="address"
          autoComplete="off"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        <br />
        <button>Launch Innovation</button>
      </form>
    </section>
  );
};

export default TeamAndContactInfo;
