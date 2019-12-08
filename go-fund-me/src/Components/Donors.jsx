import React from "react"

const Donors = (props) => {
    return(
        <li>
            <p>{props.name} handsomely donated ${props.amount}</p>
            <p>{props.caption}</p>
        </li>
    )
}

export default Donors