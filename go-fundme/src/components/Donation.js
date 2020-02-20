import React from 'react';

const Donation = ({name, amount, caption}) => {
    return (
        <div>
            <h3>{name} donated ${amount}</h3>
            <p>{caption}</p>
        </div>
    )
}

export default Donation;