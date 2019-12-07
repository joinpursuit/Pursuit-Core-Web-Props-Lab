import React from 'react';
import DonationTrackerBar from './DonationTrackerBar.jsx';
import './main.css';


class DonationForm extends React.Component{
	constructor(props){
		super();
		this.state = {
			donationAmount: 1,
			name: '',
			caption: ''
		}
	}

	handleDonationAmount = (e) => {
		this.setState({
			donationAmount: e.target.value
		});

	}

	handleName = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	handleCaption = (e) => {
		this.setState({
			caption: e.target.value
		});
	};

	sendSubToParent =(e) => {
		e.preventDefault();
		this.props.handleFormSubmit(this.state);
	}

	render(){
		return(
			<div className = 'red'>
				<form className = 'mainForm' onSubmit={this.sendSubToParent}>
					<h1 className='formHeader'>Raised ${this.props.current} of ${this.props.goal}</h1>
					<DonationTrackerBar percentage={this.props.percentage} />
					<b>Name </b>	
					<input onChange={this.handleName} placeholder = 'John Doe' type='text'/>
					<b>Caption</b>
					<input onChange={this.handleCaption} placeholder='...' type ='text'/>
					<b>Amount to Donate</b>
					<input type='range' min='1' max='1000' onChange={this.handleDonationAmount}/>
					<b class='currentAmount'>${this.state.donationAmount}</b>
					<button type='submit'>Donate</button>
				</form>
			</div>);
	}


}

export default DonationForm;