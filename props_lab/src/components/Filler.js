import React from "react";
import "../css/Filler.css";

const Filler = ({ percentage }) => {
  return <div className="filler" style={{ width: `${percentage}%` }}></div>;
};

export default Filler;
