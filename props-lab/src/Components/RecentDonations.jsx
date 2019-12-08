import React from 'react'
import DonationItem from './DonationItem'

const RecentDonations = (props) => {
   
    console.log('props', props)
    
     const donationsList = props.donations.map(donation => {
        return(
            <DonationItem 
                key={donation.name}
                name={donation.name}
                caption={donation.caption}
                amount={donation.amount}
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