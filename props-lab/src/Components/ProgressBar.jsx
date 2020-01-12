import React from 'react'

const ProgressBar = (props) => {
    return (
      <div className='progress section'>
        <h4>Progress</h4>
        <p> {props.raisedAmount} from {props.goalAmount}</p>
      </div>
    )
  }

export default ProgressBar