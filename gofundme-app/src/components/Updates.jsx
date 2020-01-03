import React from 'react';
import Donation from './Donation'

const RecentDonations = (props) => {
    const DonationsList = props.donations.map(donationObj => {
        return(
            <Donation 
            name = {donationObj.donorName}
            caption = {donationObj.caption}
            amount = {donationObj.donationAmount}
            />

        )

    })
        return(
            <div className='recent-donations'>
                <h4>Recent Donations</h4>
                <ul>{DonationsList}</ul>
            </div>
        )
    
}
export default RecentDonations;