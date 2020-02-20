import React from 'react';

const MoneyRaised = ({goal, raisedAmount, percentage}) => {

    return(
        <div>
            <h2>Raised ${raisedAmount} of ${goal}</h2>
            <p>{percentage}</p>
        </div>
    )
}

export default MoneyRaised;