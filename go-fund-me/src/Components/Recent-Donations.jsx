import React from "react"
import Donors from './Donors'

const RecentDonations = (props) => {
    const donationsList = props.allDonations.map(donationObj => {
        return (
        <Donors 
            name={donationObj.name} 
            caption={donationObj.caption} 
            amount={donationObj.amount}
        />)
    })
    return (
        <div>
            <h4>Recent Donations</h4>
            <ul>
                {donationsList}
            </ul>
        </div>
    )

}


export default RecentDonations