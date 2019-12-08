import React from 'react';
import DonatorList from './DonatorList'

const RecentDonations = (props) => {

    const donationsList = props.donations.map(donation => {
        return (<DonatorList
            name={donation.name}
            caption={donation.caption}
            amount={donation.donationAmount} />)
    })

    return (<ul className="col-4 list-unstyled text-center">
        <h3 className='my-4'>Recent Donations</h3>
        <ul>
            {donationsList}
        </ul>
    </ul>
    )
}


export default RecentDonations;