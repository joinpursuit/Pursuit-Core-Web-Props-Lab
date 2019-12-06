import React from 'react';


const DonationCard = props => {
	return(
		<div>
			<h4>{props.name} donated ${props.amount}</h4>
			<i>{props.caption}</i>
		</div>
		)
}

export default DonationCard;