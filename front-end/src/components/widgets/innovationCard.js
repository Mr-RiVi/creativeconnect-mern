import React from "react";
import "./innovationCard.css";

function InnovationCard(props) {
  return (
    <div className="innovation-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="innovation-details">
        <p>{props.industry}</p>
        <p>{props.stage}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default InnovationCard;
