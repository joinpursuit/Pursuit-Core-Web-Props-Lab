import React from 'react';
import './Progress.css'

const Progress =(props) => {
    console.log("props",props )
    return( 
        <div className="progress">
            <h2>${props.progress} out of $5,000 raised.</h2>
            <div className="progressBarGray">
                <div style={{width:props.percentage+"%"}} className="progressBarGreen">{props.percentage}%</div>
            </div>
        </div>
    ) 
       
}

export default Progress;