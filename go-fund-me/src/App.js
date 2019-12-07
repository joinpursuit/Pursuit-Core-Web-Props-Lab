import React from 'react';
import './App.css';

import TopBar from './Components/TopBar'
import RecentDonations from './Components/RecentDonations'
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'

class App extends React.Component {
constructor() {
  super();
  this.state = {
    raisedAmount: 0,
    goalAmount: 5000,
    donations: [],
    donationAmount: 0,
    donorName: '',
    donationCaption: ''
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  const {donations, donationCaption, donationAmount, donorName, raisedAmount} = this.state 

  let newDonationsCopy = [...donations]; 

  newDonationsCopy.push({
    name: donorName,
    amount: donationAmount,
    caption: donationCaption
  })

  this.setState({
    donations: newDonationsCopy,
    raisedAmount: raisedAmount + parseInt(donationAmount)
  })
}

handleDonationAmount = (event) => {
  this.setState({
    donationAmount: event.target.value 
  })
}

handleDonorName = (event) => {
  this.setState({
    donorName: event.target.value 
  })
}

handleCaption = (event) => {
  this.setState({
    donationCaption: event.target.value
  })
}

render () {
  const {donations, raisedAmount, goalAmount, donationAmount, donorName, donationCaption} = this.state
  return (
    <div className="App">
      <TopBar />
      <RecentDonations
      donations={donations}
      />
      <Progress 
      raisedAmount={raisedAmount}
      goalAmount={goalAmount}
      />
      <DonationForm 
      donorName={donorName}
      handleDonorName={this.handleDonorName}

      donationCaption={donationCaption}
      handleCaption={this.handleCaption}

      donationAmount={donationAmount}
      handleSubmit={this.handleSubmit}
      handleDonationAmount={this.handleDonationAmount}
      />
    </div>
  );
 }
}

export default App;
