/*
Joseph P. Pasaoa
Recent Donations Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './RecentDonations.css';

import DonationCard from './DonationCard';


/* MAIN */
const RecentDonations = (props) => {
  const donationItems = props.donations.map(donation => {
      return (
        <DonationCard 
          key={donation.donor} 
          donor={donation.donor}
          amount={donation.amount}
          msg={donation.msg}
        />
      );
  });

  return (
    <section id="recent">
      <h2>Recent Donations</h2>
      <ul>
        {donationItems}
      </ul>
    </section>
  )
}


/* EXPORT */
export default RecentDonations;
