import React from 'react';
import DonationCard from './DonationCard.jsx';
import './main.css';

const DonationsBar = props => {
	const listDonations = props.donations.map(elem => {
		return ( <DonationCard name={elem.name} amount={elem.amount} caption={elem.caption} />);
	});
	return (
		<div className = 'blue'>
			<h2>Recent Donations</h2>
			{listDonations}
		</div>
		);
};


export default DonationsBar;