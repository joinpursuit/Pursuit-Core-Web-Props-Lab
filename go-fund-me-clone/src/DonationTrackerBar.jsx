import React from 'react';
import './main.css';



const DonationTrackerBar = (props) => {
	return(
		<div className='tracker'>
			<div className='percentage' style={{width: `${props.percentage}%`}}>
				<p className='percName'>{props.percentage}%</p>
			</div>
		</div>
		)
}


export default DonationTrackerBar;