import React from 'react';
import DonationDisplay from './donationDisplay';

const RecentDonations = ((props, i) => {
    return(
        <DonationDisplay key={i}
        name={props.name}
        amount={props.amount}
        caption={props.caption} />
    )
})

export default RecentDonations;