import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Tooltip from "@mui/material/Tooltip";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../assets/styles/basicInnovationInformation.css";
import { industries, stages } from "../../utils/innovationRelatedData";

const TITLE_REGEX = /^[\w\s\.,!?"'&()@#%^*+=-]{1,255}$/;

function BasicInnovationInformation() {
  const navigate = useNavigate();

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

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    setvalidTitle(TITLE_REGEX.test(title));
  }, [title]);

  useEffect(() => {
    setErrorMsg("");
  }, [title]);

  //logic when user submit the form
  const handleSubmit = (e) => {
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

    navigate("./market-potential");
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
                  {stages.map((stage) => (
                    <li>
                      <strong>{stage.name}: </strong>
                      {stage.description}
                      <br />
                    </li>
                  ))}
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
          {stages.map((stage) => (
            <option key={stage.name} value={stage.name}>
              {stage.name}
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
