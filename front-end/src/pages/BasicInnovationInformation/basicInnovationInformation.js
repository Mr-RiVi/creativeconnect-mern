import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Tooltip from "@mui/material/Tooltip";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../assets/styles/basicInnovationInformation.css";

const TITLE_REGEX = /^[\w\s\.,!?"'&()@#%^*+=-]{1,255}$/;

const industries = [
  "Agriculture",
  "Automotive",
  "Biotechnology",
  "Chemical",
  "Construction",
  "Consumer goods",
  "Education",
  "Energy",
  "Environmental technology",
  "Finance",
  "Food and beverage",
  "Health care",
  "Information technology",
  "Manufacturing",
  "Media and entertainment",
  "Mining",
  "Pharmaceuticals",
  "Retail",
  "Telecommunications",
  "Transportation",
  "Utilities",
];

const stages = [
  "Ideation",
  "Concept Development",
  "Proof of Concept",
  "Prototype Development",
  "Product Development",
  "Launch",
  "Growth",
  "Maturity",
  "Decline",
];

function BasicInnovationInformation() {
  const titleRef = useRef();
  const errRef = useRef();

  const [title, setTitle] = useState("");
  const [validTitle, setvalidTitle] = useState(false);
  const [titleFocus, settitleFocus] = useState(false);

  const [industry, setIndustry] = useState("Select an Industry");

  const [stage, setStage] = useState("Select a Stage");

  const [description, setDescription] = useState("");
  const [descriptionFocus, setDescriptionFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // const history = useHistory();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    setvalidTitle(TITLE_REGEX.test(title)); // title eka wens weddi regex eka through check krnw valid d kiyla valid nm true else false validTitle state eka set krnw
  }, [title]);

  useEffect(() => {
    setErrorMsg("");
  }, [title]);

  //logic when user submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = TITLE_REGEX.test(title);
    if (!v) {
      setErrorMsg("Invalid Entry");
      return;
    }

    // Store the basic details in session storage
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("industry", industry);
    sessionStorage.setItem("stage", stage);
    sessionStorage.setItem("description", description);

    // history.push("/market-potential");
  };
  return (
    <section className="main-section">
      {/* Error messsage display section */}
      <p id="errorMessage" ref={errRef}>
        {errorMsg}
      </p>

      {/* page main heading section */}
      <h1 className="main-heading">
        Revolutionize Your Ideas: Let's Get Started
      </h1>

      {/* form starting point */}
      <form onSubmit={handleSubmit}>
        {/* title section */}
        <lable htmlFor="title">
          TITLE:
          <span className={validTitle ? "valid" : "hide"}>
            <CheckCircleOutlineIcon fontSize="small" />
          </span>
          <span className={validTitle || !title ? "hide" : "invalid"}>
            <HighlightOffIcon fontSize="small" />
          </span>
        </lable>
        <br />
        <input
          type="text"
          id="title"
          ref={titleRef}
          autoComplete="off"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          onFocus={() => {
            settitleFocus(true);
          }}
          onBlur={() => {
            settitleFocus(false);
          }}
        />
        <br />

        {/* industry section */}
        <lable htmlFor="industry">INDUSTRY:</lable>
        <br />
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
        <br />

        {/* stage section */}
        <lable htmlFor="stage">
          STAGE:
          <Tooltip
            title={
              <div className="tooltipDiv">
                <h2 calssName="tooltipHeading">Stage Descriptions:</h2>
                <br />
                <ul className="tooltipUL">
                  <ul>
                    <li>
                      <strong>Ideation:</strong> This is the stage where you
                      generate an idea for a new product or service by
                      brainstorming, conducting market research, and identifying
                      customer needs and pain points.
                    </li>
                    <br />
                    <li>
                      <strong>Concept Development:</strong> Here, you refine and
                      develop the idea further by creating a clear definition,
                      developing a business model, and identifying potential
                      target customers. Proof of Concept: In this stage, you
                      create a prototype or model of the product or service to
                      test its feasibility and potential.
                    </li>
                    <br />
                    <li>
                      <strong>Proof of Concept:</strong>In this stage, you
                      create a prototype or model of the product or service to
                      test its feasibility and potential.
                    </li>
                    <br />
                    <li>
                      <strong>Prototype Development:</strong> After the proof of
                      concept stage, a more advanced prototype is developed to
                      test the product or service in more detail.
                    </li>
                    <br />
                    <li>
                      <strong>Product Development:</strong> This is the stage
                      where the final product is developed for commercial use,
                      including product design, engineering, and manufacturing.
                    </li>
                    <br />
                    <li>
                      <strong>Launch:</strong> The product or service is
                      introduced to the market, which can include creating
                      marketing campaigns, pricing strategies, and distribution
                      channels.
                    </li>
                    <br />
                    <li>
                      <strong>Growth:</strong> The product or service should
                      ideally begin to grow in popularity and usage, including
                      expanding distribution, improving customer satisfaction,
                      and developing new features or product lines.
                    </li>
                    <br />
                    <li>
                      <strong>Maturity:</strong> The product or service is
                      well-established and has a loyal customer base, which can
                      include maintaining profitability, optimizing production,
                      and exploring new markets or opportunities.
                    </li>
                    <br />
                    <li>
                      <strong>Decline:</strong>The product or service begins to
                      lose market share and may become less profitable,
                      including identifying the reasons for the decline and
                      potentially discontinuing the product or service.
                    </li>
                    <br />
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
        </lable>
        <br />
        <select
          id="stage"
          onChange={(e) => {
            setStage(e.target.value);
          }}
          value={stage}
        >
          <option disabled>Select a Stage</option>
          {stages.map((cv_stage) => (
            <option key={cv_stage} value={cv_stage}>
              {cv_stage}
            </option>
          ))}
        </select>
        <br />

        {/* description section */}
        <lable htmlFor="description">DESCRIPTION:</lable>
        <section className="richTextEditor">
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(e, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            value={description}
          />
        </section>
        <br />

        <div className="submitButton">
          <button>NEXT</button>
        </div>
      </form>
    </section>
  );
}

export default BasicInnovationInformation;
