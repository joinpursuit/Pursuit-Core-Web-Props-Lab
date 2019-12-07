import React from 'react';

const Donors = (props) => {
    return (
        <li className="media my-2">
            <div className="media-body">
                <h5 className="mt-0 mb-1">{props.name} Donated ${props.amount}</h5>
                {props.blurb}
            </div>
        </li>
    )
}

export default Donors;