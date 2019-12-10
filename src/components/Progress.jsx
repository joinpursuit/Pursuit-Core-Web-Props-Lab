/*
Joseph P. Pasaoa
Progress Component | Go Fund Me Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './Progress.css';


/* MAIN */
class Progress extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <section id="progress">
        <h4>Progress</h4>
        <strong>Raised $440 of <em>$1000</em></strong>
        <div id="progressBar" style={{"backgroundColor": "green", "width": "auto", "height": "20px"}}></div>
      </section>
    )
  }
}


/* EXPORT */
export default Progress;
