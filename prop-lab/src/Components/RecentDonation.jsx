import React from 'react';
import Donations from './Donations'


const RecentDonation = (props) => {
    const donationsList = props.donations.map(donationObj => {
        return(<Donations 
            name={donationObj.name} 
            caption={donationObj.caption} 
            amount={donationObj.amount} />)
    })
    return(
        <div className='recentDonations section'>
            <h6>Recent Donations</h6>
            <ul>
                {donationsList}
            </ul>
        </div>
    )
}

export default RecentDonation;