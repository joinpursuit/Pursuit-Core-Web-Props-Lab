import React from 'react';
import SingleDonations from "./SingleDonations.jsx"


// Parse array, display each donations
// Create list items (li)

const RecentDonations = (props) => {
  const donationsList = props.donations.map(donationObj => {
    return (
      <SingleDonations
        name={donationObj.name}
        message={donationObj.message}
        donationAmount={donationObj.donationAmount}
      />
    )
  })

  return (

 <div className="left-side">
          <h3 className="recentDonation">Recent Donations</h3>
          <ul>
            {donationsList}
          </ul>
        </div>
  )
}

export default RecentDonations;