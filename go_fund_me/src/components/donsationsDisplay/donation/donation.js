import React from "react";
const Donation = ({ name, caption, donation }) => {
  return (
    <div className="donation">
      <h5>
        {name} donated {donation}
      </h5>
      <p>{caption}</p>
    </div>
  );
};

export default Donation;
