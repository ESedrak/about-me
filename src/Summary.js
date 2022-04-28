import React from "react";
import Training from "./Training";
import Skills from "./Skills";
import Personal from "./Personal";
import Professional from "./Professional";
import "./Summary.css";

function Summary() {
  return (
    <div className="Summary">
      <Personal />
      <br />
      <Skills />
      <br />
      <Training />
      <br />
      <Professional />
    </div>
  );
}

export default Summary;
