import React from "react";
import phoneLogo from "./images/phone.jpg";
import githubLogo from "./images/github.png";
import "./Details.css";

function Details() {
  return (
    <div className="Details">
      <h2>Contact me</h2>
      <span className="Details-info">✉ elizabeth_sedrak@hotmail.com</span>
      <span className="Details-info">
        <img src={phoneLogo} alt="mobile number" width="20px" />
        0421621826
      </span>
      <span className="Details-info">
        <img src={githubLogo} alt="github" width="20px" />
        <a href="https://github.com/ESedrak">github.com/ESedrak</a>
      </span>
      <hr />
    </div>
  );
}

export default Details;
