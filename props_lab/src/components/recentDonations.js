import React from 'react';
import DonationDisplay from './donationDisplay';

class RecentDonations extends React.Component {
    state = {
        donations: [
            {name: "",
            amount: 0,
            caption: ""}
        ]
    }
    
    render() {
        let donations = this.state.donations.map((donation, i) => {
            return <DonationDisplay key={i}
            name={donation.name}
            amount={donation.amount}
            caption={donation.caption} />
        })
        return(
            <div>
                {donations}
            </div>
        )
    }
}

export default RecentDonations;