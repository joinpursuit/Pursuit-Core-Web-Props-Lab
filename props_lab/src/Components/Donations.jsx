import React from 'react';

const DonationsMade = (props) => {
    
        return (
            <li>
                {props.caption} - {props.name}, ${props.amount}
            </li>
        )
    
}

export default DonationsMade;