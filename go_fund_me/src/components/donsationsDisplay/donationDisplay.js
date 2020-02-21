import React from "react";

import Donation from "./donation/donation";

const DonationDisplay = ({ donations }) => {
  let donationlist = donations.map((donation, i) => {
    return (
      <Donation
        key={i}
        name={donation.name}
        caption={donation.caption}
        donation={donation.donation}
      />
    );
  });

  return <div>{donationlist}</div>;
};

export default DonationDisplay;
