import React from 'react';



const Progress = (props) =>{
    // const {goalAmount, raisedAmount} = this.state
    return(
        <div className='progress-section'>
            <h4>Raised ${props.raisedAmount} of ${props.goalAmount}</h4>
        </div>
    )
}

export default Progress;