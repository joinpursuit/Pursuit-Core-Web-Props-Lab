import React from 'react';

const RecentDonation = (props) => {
   
    return (
       
            <li>
                {props.nameEntry} donated
                ${props.amount}
                <p className='captions'>{props.captionEntry}</p>
             </li>
      
    )
}

export default RecentDonation;