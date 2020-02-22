import React from 'react';

const DonationsDisplay = ({name, amount, caption}) => {
    return(
        <div className="container">
            <h3>{name} donated ${amount} </h3>
            <p>{caption}</p>
        </div>
    )
}

export default DonationsDisplay;