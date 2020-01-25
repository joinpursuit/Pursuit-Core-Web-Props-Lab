import React from 'react';
// import Donation from './donation'

const RecentDonations = (props) => {
    const donationList = props.donations.map((donation) => {
        return (
            <li className='donation'> {donation.name} donated ${donation.amount}
                <p className='comment'>{donation.caption}</p>
            </li>
        )
    })
    return (
        <div className='recent-donations section'>
            <h6>Recent Donations</h6>
            <ul>
                {donationList}
            </ul>
        </div>
    )
}

export default RecentDonations;
