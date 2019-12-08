import React from 'react';

const ProgressBar = (props) => {
  return (
        <div className='progress-bar'>
           <p>Raised ${props.currentAmount} of ${props.totalAmount}</p>

        </div>
    )
}
export default ProgressBar;