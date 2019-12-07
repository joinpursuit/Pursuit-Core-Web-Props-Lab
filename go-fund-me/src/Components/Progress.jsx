import React from 'react';

const Progress = (props) => {
        return (
            <div className="progress section">
            <h4>Progress</h4>
            <p>${props.raisedAmount} from ${props.goalAmount}</p>
            </div>
        )
}


export default Progress;