import React from 'react';
import DonationForm from './DonationForm.jsx';
import DonationsBar from './DonationsBar.jsx';
import './App.css';
import './main.css';

class DonationBoard extends React.Component{
	constructor(){
		super();
		this.state = {
			donations: [{name: 'Jo', amount: 251, 'caption': 'do you luv me'}, 
			{name: 'John', amount: 30, caption: 'Here, take a break from work'},
			{name: 'Michelle', amount: 20, 'caption': 'Lol'}],
			goal: 1000,
			current: 441,


		}

	}

	handleFormSubmit = (formSubmission) => {
		let tempArr = this.state.donations;
		tempArr.pop();
		let newDonation = {name: formSubmission.name, amount: formSubmission.donationAmount, caption: formSubmission.caption};
		tempArr.unshift(newDonation);
		this.setState({
			donations: tempArr,
			current: this.state.current + parseInt(formSubmission.donationAmount)
		});
	}
	calculatePercentage = () => {
		let percentage = (this.state.current / this.state.goal) * 100;
		if(percentage > 100){
			percentage = 100;
		} 
		return percentage;
	}

	render(){
		return(
		<div className ='lowerHalf'>
	        <div className ='smallerChild'>
	          <DonationsBar donations={this.state.donations} />
	        </div>
	        <div className ='largerChild'>
	          <DonationForm goal={this.state.goal} current={this.state.current} handleFormSubmit={this.handleFormSubmit} percentage={this.calculatePercentage()} />
	        </div>
      	</div>)
	}
}



export default DonationBoard;