/*
Joseph P. Pasaoa
Recent Donations Component | Go Fund Me Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './RecentDonations.css';

import DonationCard from './DonationCard';


/* MAIN */
class RecentDonations extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <section id="recent">
        <h2>Recent Donations</h2>
        <ul>
          <DonationCard />
          <DonationCard />
        </ul>
      </section>
    )
  }
}


/* EXPORT */
export default RecentDonations;
