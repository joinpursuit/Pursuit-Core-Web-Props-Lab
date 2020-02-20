import React from 'react';

const DonationDisplay = ({ name, amount, caption }) => {
    return(
        <div className={"donationDisplayContainer"}>
            <h2>Recent Donations</h2>
            <p>{name} donated ${amount}</p>
            {caption}
        </div>
    )
}

export default DonationDisplay;