import React from "react";

const Donor = ({ name, caption, amount_to_donate }) => {
  return (
    <div>
      <h5>
        {name} donated ${amount_to_donate}
      </h5>
      <p>{caption}</p>
    </div>
  );
};

export default Donor;
