import React from "react";
import Filler from "./Filler.js";
import "../css/DisplayProgressBar.css";

const DisplayProgressBar = ({ percentage }) => {
  return (
    <div className={"progress-bar"}>
      <Filler percentage={percentage} />
    </div>
  );
};

export default DisplayProgressBar;
