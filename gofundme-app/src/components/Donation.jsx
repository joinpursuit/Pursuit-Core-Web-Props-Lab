import React from 'react';

const Donation = (props) =>{
    return (
        <li>
            <h6>{props.donorName} donated {props.donationAmount} </h6>
            <p>{props.caption}</p>
        </li>
    )
}

export default Donation;