import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import {
  competitionOptions,
  demandOptions,
  industries,
  stages,
  timeToPenetrateMarketAndAchieveProfitabilityOptions,
} from "../../utils/innovationRelatedData.js";

import { storage } from "../../config/firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import DOMPurify from "dompurify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../assets/styles/overview2.css";
import Header from "../../components/layout/headerInventor.js";

const INNOVATION_RETRIEVE_URL =
  "http://localhost:3000/api/innovation/getInnovation/";
const INNOVATION_MODIFY_URL =
  "http://localhost:3000/api/innovation/modifyInnovation/";

const InnovationOverview = () => {
  const navigate = useNavigate();
  const [innovation, setInnovation] = useState({});

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("Select an Industry");
  const [stage, setStage] = useState("Select a Stage");
  const [description, setDescription] = useState("");

  const [targetMarket, setTargetMarket] = useState("");
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

  const [fundingNeeded, setFundingNeeded] = useState("");
  const [useOfFunds, setUseOfFunds] = useState("");
  const [potentialSources, setPotentialSources] = useState("");

  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // Sanitize the description using the DOMPurify library
  // to remove any potentially malicious content from the description before displaying it on the page.
  const cleanDescription = DOMPurify.sanitize(innovation.description);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  //This function retreving specific innovation using it objectId.
  //It set innovation state if axios response successfull.
  const retrieveInnovation = async () => {
    try {
      const response = await axios.get(INNOVATION_RETRIEVE_URL + id);

      if (response?.status >= 200 && response?.status < 300) {
        setInnovation(response.data);

        setImageUrl(response.data.imageUrl);
        setTitle(response.data.title);
        setIndustry(response.data.industry);
        setStage(response.data.stage);
        setDescription(response.data.description);
        setTargetMarket(response.data.marketPotential.targetMarket);
        setMarketSize(response.data.marketPotential.marketSize);
        setDemand(response.data.marketPotential.demand);
        setUniqueSellingProposition(
          response.data.marketPotential.uniqueSellingProposition
        );
        setLevelOfCompetitionInTargetMarket(
          response.data.marketPotential.levelOfCompetitionInTargetMarket
        );
        setMarketingStrategies(
          response.data.marketPotential.marketingStrategies
        );
        setTimeToPenetrateMarketAndAchieveProfitability(
          response.data.marketPotential
            .timeToPenetrateMarketAndAchieveProfitability
        );
        setEstimatedCost(
          response.data.marketPotential.competitivePricingAnalysis.estimatedCost
        );
        setTargetSellingPrice(
          response.data.marketPotential.competitivePricingAnalysis
            .targetSellingPrice
        );
        setCompetition(
          response.data.marketPotential.competitivePricingAnalysis.competition
        );
        setPricingFactors(
          response.data.marketPotential.competitivePricingAnalysis
            .pricingFactors
        );
        setTargetMarketRevenue(
          response.data.marketPotential.competitivePricingAnalysis
            .targetMarketRevenue
        );
        setFundingNeeded(response.data.fundingNeeds.fundingNeeded);
        setUseOfFunds(response.data.fundingNeeds.useOfFunds);
        setPotentialSources(response.data.fundingNeeds.potentialSources);

        setContactName(response.data.contactInformation.contactName);
        setEmail(response.data.contactInformation.email);
        setPhoneNumber(response.data.contactInformation.phoneNumber);
        setAddress(response.data.contactInformation.address);

        //If response successfull log message saying "Response successfull".
        console.log("Response is successful");
      } else {
        // unsuccessful response
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  //This function make a update request to the server.
  const modifyInnovation = async () => {
    const modifiedInnovation = {
      imageUrl,
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

      contactInformation: {
        contactName,
        email,
        phoneNumber,
        address,
      },
    };

    try {
      const response = await axios.put(
        INNOVATION_MODIFY_URL + id,
        modifiedInnovation
      );

      if (response?.status >= 200 && response?.status < 300) {
        navigate(`../innovation-overview?id=${id}`);
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

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(snapshot.ref);
      setImageUrl(imageUrl);
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
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
            {/* image upload section */}
            <div className="image-preview-container">
              <img
                className="image-preview"
                src={imageUrl}
                alt="Image Preview"
              />

              <div className="upload-overlay">
                <label htmlFor="upload-input">
                  <span>Upload Image</span>
                  <input
                    id="upload-input"
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="title-area">
            <lable htmlFor="title">TITLE:</lable>
            <h2 className="innovationTitle">
              <input
                type="text"
                id="title"
                autoComplete="off"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </h2>
            <ul>
              {/* industry property */}
              <li>
                <span className="label">Industry:</span>{" "}
                <select
                  id="industry"
                  onChange={(e) => {
                    setIndustry(e.target.value);
                  }}
                  value={industry}
                >
                  <option disabled>Select an Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </li>

              {/* stage property */}
              <li>
                <span className="label">Stage of the innovation:</span>{" "}
                <select
                  id="stage"
                  onChange={(e) => {
                    setStage(e.target.value);
                  }}
                  value={stage}
                >
                  <option disabled>Select a Stage</option>
                  {stages.map((stage) => (
                    <option key={stage.name} value={stage.name}>
                      {stage.name}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <br />

      {/* Description section */}
      <section>
        <header>
          <h3 className="headings">Description</h3>
        </header>

        <div colSpan={2}>
          <section className="richTextEditor">
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(e, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
              value={cleanDescription}
            />
          </section>
          {/* <p dangerouslySetInnerHTML={{ __html: cleanDescription }}></p> */}
        </div>
      </section>
      <br />

      {/* marketPotential section */}
      <section className="marketPotential">
        <header>
          <h3 className="headings">Market potential</h3>
        </header>
        {innovation?.marketPotential && (
          <section>
            <div className="market-potential-details">
              <ul>
                {/* Target Market section */}
                <li>
                  <span className="label-type2">Target Market:</span>{" "}
                  <input
                    type="text"
                    id="targetmarket"
                    autoComplete="off"
                    onChange={(e) => {
                      setTargetMarket(e.target.value);
                    }}
                    value={targetMarket}
                  />
                </li>

                {/* market size section */}
                <li>
                  <span className="label-type2">Market Size:</span> {"Rs."}
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
                </li>

                {/* demand section */}
                <li>
                  <span className="label-type2">Demand:</span>{" "}
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
                </li>

                {/* Unique Selling Proposition section */}
                <li>
                  <span className="label-type2">
                    Unique Selling Proposition:
                  </span>{" "}
                  <input
                    type="text"
                    id="uniqueSellingProposition"
                    autoComplete="off"
                    onChange={(e) => {
                      setUniqueSellingProposition(e.target.value);
                    }}
                    value={uniqueSellingProposition}
                  />
                </li>

                {/* Level of competition in target market section */}
                <li>
                  <span className="label-type2">
                    Level of competition in target market:
                  </span>{" "}
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
                </li>

                {/* Marketing strategies section */}
                <li>
                  <span className="label-type2">Marketing strategies:</span>{" "}
                  <input
                    type="text"
                    id="marketingStrategies"
                    autoComplete="off"
                    onChange={(e) => {
                      setMarketingStrategies(e.target.value);
                    }}
                    value={marketingStrategies}
                  />
                </li>

                {/* Time to penetrate market and achieve profitability section */}
                <li>
                  <span className="label-type2">
                    Time to penetrate market and achieve profitability:
                  </span>{" "}
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
                </li>
              </ul>
            </div>
          </section>
        )}
      </section>
      <br />

      {/* competitivePricingAnalysis section */}
      <section className="competitivePricingAnalysis">
        <header>
          <h3 className="headings">Competitive Pricing Analysis</h3>
        </header>

        {innovation.marketPotential?.competitivePricingAnalysis && (
          <div className="competitivePricingAnalysis-details">
            <ul>
              {/* Estimated Cost section */}
              <li>
                <span className="label-type2">Estimated Cost:</span> {"Rs."}
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
              </li>

              {/* Target Selling Price section */}
              <li>
                <span className="label-type2">Target Selling Price:</span>{" "}
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
              </li>

              {/* Competition section */}
              <li>
                <span className="label-type2">Competition:</span>{" "}
                <input
                  type="text"
                  id="competition"
                  autoComplete="off"
                  onChange={(e) => {
                    setCompetition(e.target.value);
                  }}
                  value={competition}
                />
              </li>

              {/* Pricing factors section */}
              <li>
                <span className="label-type2">Pricing factors:</span>{" "}
                <input
                  type="text"
                  id="pricingFactors"
                  autoComplete="off"
                  onChange={(e) => {
                    setPricingFactors(e.target.value);
                  }}
                  value={pricingFactors}
                />
              </li>

              {/* Target market revenue section */}
              <li>
                <span className="label-type2">Target market revenue:</span>{" "}
                <input
                  type="text"
                  id="targetMarketRevenue"
                  autoComplete="off"
                  onChange={(e) => {
                    setTargetMarketRevenue(e.target.value);
                  }}
                  value={targetMarketRevenue}
                />
              </li>
            </ul>
          </div>
        )}
      </section>
      <br />

      {/* fundingNeeds section */}
      <section className="fundingNeeds">
        <header>
          <h3 className="headings">Funding Needs</h3>
        </header>

        {innovation?.fundingNeeds && (
          <div className="fundingNeeds-details">
            <ul>
              {/* Funding Needed section */}
              <li>
                <span className="label-type2">Funding Needed:</span> {"Rs."}
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
              </li>

              {/* Use of Funds */}
              <li>
                <span className="label-type2">Use of Funds:</span>{" "}
                <input
                  type="text"
                  id="useOfFunds"
                  autoComplete="off"
                  onChange={(e) => {
                    setUseOfFunds(e.target.value);
                  }}
                  value={useOfFunds}
                />
              </li>

              {/* Potential Sources section */}
              <li>
                <span className="label-type2">Potential Sources:</span>{" "}
                <input
                  type="text"
                  id="potentialSources"
                  autoComplete="off"
                  onChange={(e) => {
                    setPotentialSources(e.target.value);
                  }}
                  value={potentialSources}
                />
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
      {/* contactInformation section */}
      <section className="last-section">
        <section className="contactInformation">
          <header>
            <h3 className="headings">Contact Information</h3>
          </header>

          {innovation?.contactInformation && (
            <div className="contactInformation-details">
              <ul>
                {/* contactName  */}
                <li>
                  <span className="label-type3">contactName:</span>{" "}
                  <input
                    type="text"
                    id="contactName"
                    autoComplete="off"
                    onChange={(e) => {
                      setContactName(e.target.value);
                    }}
                    value={contactName}
                  />
                </li>
                <li>
                  <span className="label-type3">Email:</span>{" "}
                  <input
                    type="text"
                    id="company-email"
                    autoComplete="off"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </li>
                <li>
                  <span className="label-type3">Phone number:</span>{" "}
                  <input
                    type="text"
                    id="phoneNumber"
                    autoComplete="off"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    value={phoneNumber}
                  />
                </li>
                <li>
                  <span className="label-type3">Address:</span>{" "}
                  <input
                    type="text"
                    id="address"
                    autoComplete="off"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                  />
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
      <button className="next-button" onClick={modifyInnovation}>
        Amend Innovation
      </button>
    </section>
  );
};

export default InnovationOverview;
