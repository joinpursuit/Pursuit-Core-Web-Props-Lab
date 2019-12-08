import React from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './Components/Banner'
import RecentDonations from './Components/RecentDonations'
import Form from './Components/Form'
import ProgressBar from './Components/ProgressBar'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      raisedAmount : 0,
      goalAmount: 5000,
      donations: [],
      donationAmount: 5,
      donorName: '',
      donationCaption: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    const {donationCaption, donationAmount, donorName, donations, raisedAmount} = this.state

    let newDonationsCopy = [...donations]
    console.log(newDonationsCopy)

    newDonationsCopy.push ({
      name: donorName,
      amount: donationAmount,
      caption: donationCaption
    })
    console.log(newDonationsCopy)

    this.setState({
      donations: newDonationsCopy,
      raisedAmount: raisedAmount + parseInt(donationAmount),
      donationAmount: 5,
      donorName: '',
      donationCaption: ''
    })
  }

  handleDonationAmount = (event) => {
    this.setState({
      donationAmount: event.target.value
    })
  }
  handleDonationCaption = (event) => {
    this.setState({
      donationCaption: event.target.value
    })
  }
  handleDonorName = (event) => {
    this.setState({
      donorName: event.target.value
    })
  }
  
  render(){
    const {raisedAmount,
          goalAmount, 
          donationAmount, 
          donorName,
          donationCaption,
          donations
        } = this.state

        console.log('Donations =>', donations)
    return (
      <div className="App">
        <Banner />
        <Form 
          handleSubmit= {this.handleSubmit}

          donationAmount= {donationAmount}
          handleDonationAmount = {this.handleDonationAmount}

          donorName = {donorName}
          handleDonorName = {this.handleDonorName}

          donationCaption = {donationCaption}
          handleDonationCaption = {this.handleDonationCaption}
        />
        <RecentDonations 
          donations = {donations}
        />
        <ProgressBar 
          raisedAmount= {raisedAmount}
          goalAmount= {goalAmount}
        />
      </div>
    )
  }

}
  

export default App;
