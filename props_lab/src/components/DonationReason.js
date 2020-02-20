import React from 'react'

const DonationReason = ({name,caption, donationAmount}) => {
     
    return(
        <div>
        <ul className="donationList">
             <li className="doner ">
          <div>
            <h5 className="doners"> {name},{donationAmount}</h5>
            {caption}
          </div>
        </li>
        </ul>
        </div>
    )
    
}

export default DonationReason;