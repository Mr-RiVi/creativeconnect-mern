import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import "../../assets/styles/innovationCard.css";
import "../../assets/styles/inventorSearchBar.css";
import Header from "../../components/layout/headerInventor.js";

const INNOVATION_FETCH_URL =
  "http://localhost:3000/api/innovation/getAllInnovation";

const SEARCH_FETCH_URL = "http://localhost:3000/api/innovation/search?keyword=";

const InnovationVault = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  const [innovations, setInnovations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);

  //innovation fetch handler
  const fetchInnovations = async () => {
    try {
      const response = await axios.get(INNOVATION_FETCH_URL);
      if (response?.status >= 200 && response?.status < 300) {
        setInnovations(response.data);

        // successful response
        console.log("Response is successful");
      } else {
        // unsuccessful response
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {}
  };

  //search handler
  const handleSearchSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await axios.get(SEARCH_FETCH_URL + searchTerm);
      if (response.status >= 200 && response.status < 300) {
        setInnovations(response?.data?.map((obj) => obj.item));
        console.log("Search response is successful");
      } else {
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function truncateText(text, limit) {
    if (text.length > limit) {
      text = text.substring(0, limit - 3) + "...";
    }
    return text;
  }

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearchSubmit();
    } else {
      fetchInnovations();
    }
  }, [searchTerm]);
  return (
    <div class="container">
      <Header />
      <h1>Innovations</h1>
      <section className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </form>
      </section>
      <section className="vault-section">
        {innovations.map((innovation) => (
          <div className="card">
            <div className="image">
              <img
                src={innovation.imageUrl}
                alt="Card Image"
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">{innovation.title}</h3>
              <p className="card-industry">Industry : {innovation.industry}</p>
              <p className="card-stage">Stage : {innovation.stage}</p>
              <p className="card-description">
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncateText(innovation.description, 80),
                  }}
                ></p>
                {}
              </p>
            </div>
            <div className="button">
              <button
                onClick={() => {
                  navigate(
                    `../../inventor/innovation-overview?id=${innovation._id}`
                  );
                }}
              >
                View more
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InnovationVault;
