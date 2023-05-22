import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import DOMPurify from "dompurify";

import "../../assets/styles/overview2.css";
import DeleteConfirmationModal from "../../components/common/deleteConfirmationModal.js";
import Header from "../../components/layout/headerInventor.js";

const INNOVATION_RETRIEVE_URL =
  "http://localhost:3000/api/innovation/getInnovation/";

const InnovationOverview = () => {
  const navigate = useNavigate();
  const [innovation, setInnovation] = useState({});

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Sanitize the description
  const cleanDescription = DOMPurify.sanitize(innovation.description);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const retrieveInnovation = async () => {
    try {
      const response = await axios.get(INNOVATION_RETRIEVE_URL + id);

      if (response.status >= 200 && response.status < 300) {
        setInnovation(response.data);
        // successful response
        console.log("Response is successful");
      } else {
        // unsuccessful response
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const naviageReportPage = () => {
    navigate(`../report?id=${innovation._id}`);
  };

  const naviageUpdatePage = () => {
    navigate(`../innovation-update?id=${innovation._id}`);
  };

  const toggleDeleteConfirmation = () => {
    setShowDeleteConfirmation((prevValue) => !prevValue);
  };

  const handleDelete = () => {
    toggleDeleteConfirmation();
  };

  useEffect(() => {
    retrieveInnovation();
  }, []);

  return (
    <section className="main-section">
      <Header />
      <section>
        <section className="first-section">
          <div className="main-image-area">
            <img
              className="main-image"
              src={innovation.imageUrl}
              alt="Innovation Image"
            />
          </div>
          <div className="title-area">
            <h2 className="innovationTitle">{innovation.title}</h2>
            <ul>
              <li>
                <span className="label">Industry:</span>{" "}
                <span className="value">{innovation.industry}</span>
              </li>
              <li>
                <span className="label">Stage of the innovation:</span>{" "}
                <span className="value">{innovation.stage}</span>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <br />
      <section>
        <header>
          <h3 className="headings">Description</h3>
        </header>

        <div colSpan={2}>
          <p dangerouslySetInnerHTML={{ __html: cleanDescription }}></p>
        </div>
      </section>
      <br />
      <section className="marketPotential">
        <header>
          <h3 className="headings">Market potential</h3>
        </header>
        {innovation?.marketPotential && (
          <section>
            <div className="market-potential-details">
              <ul>
                <li>
                  <span className="label-type2">Target Market:</span>{" "}
                  <span className="value-type2">
                    {innovation.marketPotential.targetMarket}
                  </span>
                </li>
                <li>
                  <span className="label-type2">Market Size:</span>{" "}
                  <span className="value-type2">
                    {innovation.marketPotential.marketSize}
                  </span>
                </li>
                <li>
                  <span className="label-type2">Demand:</span>{" "}
                  <span className="value-type2">
                    {innovation.marketPotential.demand}
                  </span>
                </li>
                <li>
                  <span className="label-type2">
                    Unique Selling Proposition:
                  </span>{" "}
                  <span className="value-type2">
                    {innovation.marketPotential.uniqueSellingProposition}
                  </span>
                </li>
                <li>
                  <span className="label-type2">
                    Level of competition in target market:
                  </span>{" "}
                  <span className="value-type2">
                    {
                      innovation.marketPotential
                        .levelOfCompetitionInTargetMarket
                    }
                  </span>
                </li>
                <li>
                  <span className="label-type2">Marketing strategies:</span>{" "}
                  <span className="value-type2">
                    {innovation.marketPotential.marketingStrategies}
                  </span>
                </li>
                <li>
                  <span className="label-type2">
                    Time to penetrate market and achieve profitability:
                  </span>{" "}
                  <span className="value-type2">
                    {
                      innovation.marketPotential
                        .timeToPenetrateMarketAndAchieveProfitability
                    }
                  </span>
                </li>
              </ul>
            </div>
          </section>
        )}
      </section>
      <br />
      <section className="competitivePricingAnalysis">
        <header>
          <h3 className="headings">Competitive Pricing Analysis</h3>
        </header>

        {innovation.marketPotential?.competitivePricingAnalysis && (
          <div className="competitivePricingAnalysis-details">
            <ul>
              <li>
                <span className="label-type2">Estimated Cost:</span>{" "}
                <span className="value-type2">
                  {"Rs."}
                  {
                    innovation.marketPotential.competitivePricingAnalysis
                      .estimatedCost
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">Target Selling Price:</span>{" "}
                <span className="value-type2">
                  {"Rs."}
                  {
                    innovation.marketPotential.competitivePricingAnalysis
                      .targetSellingPrice
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">Competition:</span>{" "}
                <span className="value-type2">
                  {
                    innovation.marketPotential.competitivePricingAnalysis
                      .competition
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">Pricing factors:</span>{" "}
                <span className="value-type2">
                  {
                    innovation.marketPotential.competitivePricingAnalysis
                      .pricingFactors
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">Target market revenue:</span>{" "}
                <span className="value-type2">
                  {
                    innovation.marketPotential.competitivePricingAnalysis
                      .targetMarketRevenue
                  }
                </span>
              </li>
            </ul>
          </div>
        )}
      </section>
      <br />
      <section className="fundingNeeds">
        <header>
          <h3 className="headings">Funding Needs</h3>
        </header>

        {innovation?.fundingNeeds && (
          <div className="fundingNeeds-details">
            <ul>
              <li>
                <span className="label-type2">Funding Needed:</span>{" "}
                <span className="value-type2">
                  {innovation.fundingNeeds.fundingNeeded}
                </span>
              </li>
              <li>
                <span className="label-type2">Use of Funds:</span>{" "}
                <span className="value-type2">
                  {innovation.fundingNeeds.useOfFunds}
                </span>
              </li>
              <li>
                <span className="label-type2">Potential Sources:</span>{" "}
                <span className="value-type2">
                  {innovation.fundingNeeds.potentialSources}
                </span>
              </li>
            </ul>
          </div>
        )}
      </section>

      <br />
      <section className="IntellectualProperty">
        <header>
          <h3 className="headings">Intellectual property information</h3>
        </header>

        {innovation?.intellectualPropertyInformation && (
          <div className="IntellectualProperty-details">
            <ul>
              <li>
                <span className="label-type2">Patent number:</span>{" "}
                <span className="value-type2">
                  {innovation.intellectualPropertyInformation.patentNumber}
                </span>
              </li>
              <li>
                <span className="label-type2">Patent filing date:</span>{" "}
                <span className="value-type2">
                  {innovation.intellectualPropertyInformation.patentFilingDate}
                </span>
              </li>
              <li>
                <span className="label-type2">
                  Trademark registration number:
                </span>{" "}
                <span className="value-type2">
                  {
                    innovation.intellectualPropertyInformation
                      .trademarkRegistrationNumber
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">Trademark filing date:</span>{" "}
                <span className="value-type2">
                  {
                    innovation.intellectualPropertyInformation
                      .trademarkFilingDate
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">
                  Copyright registration number:
                </span>{" "}
                <span className="value-type2">
                  {
                    innovation.intellectualPropertyInformation
                      .copyrightRegistrationNumber
                  }
                </span>
              </li>
              <li>
                <span className="label-type2">Copyright filing date:</span>{" "}
                <span className="value-type2">
                  {
                    innovation.intellectualPropertyInformation
                      .copyrightFilingDate
                  }
                </span>
              </li>
            </ul>
          </div>
        )}
      </section>

      <br />
      <section className="last-section">
        <section className="contactInformation">
          <header>
            <h3 className="headings">Contact Information</h3>
          </header>

          {innovation?.contactInformation && (
            <div className="contactInformation-details">
              <ul>
                <li>
                  <span className="label-type3">Name:</span>{" "}
                  <span className="value-type3">
                    {innovation.contactInformation.contactName}
                  </span>
                </li>
                <li>
                  <span className="label-type3">Email:</span>{" "}
                  <span className="value-type3">
                    {innovation.contactInformation.email}
                  </span>
                </li>
                <li>
                  <span className="label-type3">Phone number:</span>{" "}
                  <span className="value-type3">
                    {innovation.contactInformation.phoneNumber}
                  </span>
                </li>
                <li>
                  <span className="label-type3">Address:</span>{" "}
                  <span className="value-type3">
                    {innovation.contactInformation.address}
                  </span>
                </li>
              </ul>
            </div>
          )}
        </section>

        <section className="teamMembers">
          <header>
            <h3 className="headings">Team members</h3>
          </header>

          {innovation?.teamMembers && (
            <div className="teamMembers-details">
              <ul>
                {innovation.teamMembers.map((teamMember) => (
                  <li>
                    <p>{teamMember.memberName}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </section>
      <button className="button" onClick={naviageReportPage}>
        Calculate Valuation
      </button>
      <button className="button" onClick={naviageUpdatePage}>
        Update innovation
      </button>
      {showDeleteConfirmation && (
        <DeleteConfirmationModal
          toggleDeleteConfirmation={toggleDeleteConfirmation}
          innovationId={id}
        />
      )}
      <button className="button" onClick={handleDelete}>
        {showDeleteConfirmation ? "Confirm Delete" : "Delete innovation"}
      </button>
    </section>
  );
};

export default InnovationOverview;
