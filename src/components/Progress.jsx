/*
Joseph P. Pasaoa
Progress Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './Progress.css';


/* MAIN */
const Progress = (props) => {
  return (
    <section id="progress">
      <h4>Progress</h4>
      <strong>Raised ${props.raised} of <em>${props.target}</em></strong>
      <div 
        id="progressBar" 
        style={{
          "width": `${props.percentToTarget >= 100 ? 100 : props.percentToTarget}%`
        }}
      >
        {props.percentToTarget}%
      </div>
    </section>
  )
}


/* EXPORT */
export default Progress;
