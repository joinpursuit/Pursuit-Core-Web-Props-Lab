import React, {useState} from 'react';
import DonationForm from './DonationForm.jsx';
import DonationsBar from './DonationsBar.jsx';
import './App.css';
import './main.css';

const DonationBoard = (props) => {

	const [donations, setDonations] = useState([{name: 'Jo', amount: 251, 'caption': 'do you luv me'}, 
			{name: 'John', amount: 30, caption: 'Here, take a break from work'},
			{name: 'Michelle', amount: 20, 'caption': 'Lol'}]);
	const [goal, setGoal] = useState(1000);
	const [current, setCurrent] = useState(441);


	 const handleFormSubmit = (formSubmission) => {
		let tempArr = donations;
		tempArr.pop();
		let newDonation = {name: formSubmission.name, amount: formSubmission.donationAmount, caption: formSubmission.caption};
		tempArr.unshift(newDonation);
		setDonations(tempArr);
		setCurrent(current+ parseInt(formSubmission.donationAmount) );
	}
	const calculatePercentage = () => {
		let percentage = (current / goal) * 100;
		if(percentage > 100){
			percentage = 100;
		} 
		return percentage;
	};

	return(
		<div className ='lowerHalf'>
	        <div className ='smallerChild'>
	          <DonationsBar donations={donations} />
	        </div>
	        <div className ='largerChild'>
	          <DonationForm goal={goal} current={current} handleFormSubmit={handleFormSubmit} percentage={calculatePercentage()} />
	        </div>
      	</div>)
	
}



export default DonationBoard;