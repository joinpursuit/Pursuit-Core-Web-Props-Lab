/*
Joseph P. Pasaoa
Donation Card Component | Go Fund Me Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
// import './DonationCard.css';


/* MAIN */
class DonationCard extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <li className="donation">
        <h3>Joey donated $211</h3>
        <p>Good luck, Alejo! May your trip be all you imagined and more!</p>
      </li>
    )
  }
}


/* EXPORT */
export default DonationCard;
