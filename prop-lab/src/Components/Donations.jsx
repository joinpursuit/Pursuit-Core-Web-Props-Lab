import React from 'react'

const Donations = (props) => {
    return(
        <li>
            <p>{props.name} Donated ${props.amount}</p>
            <p>{props.caption}</p>
        </li>
    )
}

export default Donations