import React, {useState} from 'react';
import DonationTrackerBar from './DonationTrackerBar.jsx';
import './main.css';


const DonationForm = (props) => {
	
	const [donationAmount, setDonationAmount] = useState(1);
	const [name, setName] = useState('');
	const [caption, setCaption] = useState('');

	const handleDonationAmount = (e) => {
		setDonationAmount(e.target.value);
	}

	const handleName = (e) => {
		setName(e.target.value);
	}

	const handleCaption = (e) => {
		setCaption(e.target.value);
	};

	const sendSubToParent =(e) => {
		e.preventDefault();
		props.handleFormSubmit({donationAmount, name, caption});
	}

	return(
			<div className = 'red'>
				<form className = 'mainForm' onSubmit={sendSubToParent}>
					<h1 className='formHeader'>Raised ${props.current} of ${props.goal}</h1>
					<DonationTrackerBar percentage={props.percentage} />
					<b>Name </b>	
					<input onChange={handleName} placeholder = 'John Doe' type='text'/>
					<b>Caption</b>
					<input onChange={handleCaption} placeholder='...' type ='text'/>
					<b>Amount to Donate</b>
					<input type='range' min='1' max='1000' onChange={handleDonationAmount}/>
					<b class='currentAmount'>${donationAmount}</b>
					<button type='submit'>Donate</button>
				</form>
			</div>);
	


}

export default DonationForm;