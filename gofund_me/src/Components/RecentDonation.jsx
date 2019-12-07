import React from 'react';

const RecentDonation = (props) => {

    return (
        
        <li>
            {props.name} donated
            ${props.amount}
            <p className='captions'>{props.caption}</p>
              
        </li>
       
    )
}

export default RecentDonation;