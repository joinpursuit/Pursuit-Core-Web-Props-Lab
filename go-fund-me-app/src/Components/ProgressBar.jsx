import React from 'react';

const ProgressBar = props => {
    const progress = props.value * 100 / props.target;
    const style = {
        width: `${progress}%`
    }
    return (
        <div className="progress">
          <div className="progress-bar bg-success" 
                role="progressbar" 
                style={style} 
                aria-valuenow={props.value}
                aria-valuemin="0" 
                aria-valuemax="1000"
            >{progress}%</div>
        </div>
    )
}

export default ProgressBar;