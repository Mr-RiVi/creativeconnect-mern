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
import { storage_inventor } from "../../config/firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Header from "../../components/layout/headerInventor.js";

const TITLE_REGEX = /^[\w\s\.,!?"'&()@#%^*+=-]{1,255}$/;

function BasicInnovationInformation() {
  const navigate = useNavigate();

  const titleRef = useRef();
  const errRef = useRef();

  const [imageUrl, setImageUrl] = useState("");
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = TITLE_REGEX.test(title);
    if (!v) {
      setErrorMsg("Invalid Entry");
      return;
    }

    // Store the basic details in session storage
    sessionStorage.setItem("imageUrl", imageUrl);
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("industry", industry);
    sessionStorage.setItem("stage", stage);
    sessionStorage.setItem("description", description);

    navigate("./market-potential");
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const storageRef = ref(storage_inventor, `images/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(snapshot.ref);
      setImageUrl(imageUrl);
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  return (
    <section className="main-section">
      <Header />
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
        {/* image upload section */}
        <div className="image-preview-container">
          {imageUrl ? (
            <img className="image-preview" src={imageUrl} alt="Image Preview" />
          ) : (
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
          )}
        </div>
        <br />

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
        <br />

        <div className="submitButton">
          <button className="next-button">NEXT</button>
        </div>
      </form>
    </section>
  );
}

export default BasicInnovationInformation;
