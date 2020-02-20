import React from "react"
const DonationDisplay = ({name, ammount, caption, }) => {
    return(
        <div className="donationContainer">
            <h4>{name}</h4>
            <div>${ammount}</div>
            <div>{caption}</div>

        </div>
    )
}

export default DonationDisplay