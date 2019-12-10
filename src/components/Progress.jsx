/*
Joseph P. Pasaoa
Progress Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './Progress.css';


/* MAIN */
const Progress = (props) => {
  const percentToTarget = Math.round(props.raised / props.target * 100);
  return (
    <section id="progress">
      <h4>Progress</h4>
      <strong>Raised ${props.raised} of <em>${props.target}</em></strong>
  <div id="progressBar" style={{"width": `${percentToTarget}%`}}>{percentToTarget}%</div>
    </section>
  )
}


/* EXPORT */
export default Progress;
