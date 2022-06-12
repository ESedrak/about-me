import React from "react";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Details() {
  return (
    <div className="Details">
      <h2>Contact</h2>
      <span className="Details-info">✉ elizabeth.sedrak94@gmail.com</span>
      <span className="Details-info">
        <FontAwesomeIcon icon={faPhone} /> 0421621826
      </span>
      <hr />
    </div>
  );
}

export default Details;
