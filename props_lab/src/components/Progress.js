import React from "react";
import DisplayProgressBar from "./DisplayProgressBar.js";

const ProgressBar = ({ totalRaised, goal, percentage }) => {
  return (
    <>
      <h1>
        Raised ${totalRaised} out of ${goal}
      </h1>
      <p>
        We're <strong>%{percentage}</strong> there!
      </p>
      <DisplayProgressBar percentage={percentage} />
    </>
  );
};

export default ProgressBar;
