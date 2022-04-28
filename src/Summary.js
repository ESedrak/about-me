import React from "react";
import Training from "./Training";
import Skills from "./Skills";
import Personal from "./Personal";

function Summary() {
  return (
    <div className="Summary">
      <Personal />
      <br />
      <Skills />
      <br />
      <Training />
    </div>
  );
}

export default Summary;
