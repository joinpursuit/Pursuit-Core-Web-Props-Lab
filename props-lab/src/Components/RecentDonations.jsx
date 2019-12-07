import React from 'react'
import DonationItem from './RecentDonations'

const RecentDonations = (props) => {
    debugger;
    console.log('props', props)
    console.log("donations", props.donations)
     const donationsList = props.donations.map(donationObj => {
        return(
            <DonationItem 
                key={donationObj.name}
                name={donationObj.name}
                caption={donationObj.caption}
                amount={donationObj.amount}
            />
        )
    })
    return(
        <div className='recent-donations section'>
            <h4>Recent Donations</h4>
            <ul>
                {donationsList}
            </ul>
        </div>
    )
}

export default RecentDonations