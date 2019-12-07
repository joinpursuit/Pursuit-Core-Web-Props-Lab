import React from 'react';
import Donation from './Donation'

const RecentDonations = (props) => {
    const donationsList = props.donations.map(donationObj => {
        return (
        <Donation 
        name={donationObj.name} 
        caption={donationObj.caption} 
        amount={donationObj.amount} 
        />)
    })
        return (
            <div className="recent-donations section">
            <h4>Recent Donations</h4>
            <ul>{donationsList}</ul>
            </div>
        )
}

export default RecentDonations;