import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import DonationForm from './components/DonationForm';
import RecentDonations from './components/Updates';
import Progress from './components/Progress';

//to a component you will pass the value and an event listener that you want the thing to update the value

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      raisedAmount: 0, 
      goalAmount: 1000,
      donations: [],
      donationAmount: 0,
      donorName: '',
      caption: ''
    }
  }

  handleNewDonation = (event) =>{
    event.preventDefault();
    let raisedAmount = this.state.raisedAmount;
    let donationAmount = this.state.donationAmount;
    this.setState({
      raisedAmount: raisedAmount + donationAmount
    })
  }

  handleDonationAmount = (event) =>{
    this.setState({
      raisedAmount: event.target.value
    })
  }

  handleDonorName = (event) =>{
    this.setState({
      donorName: event.target.value
    })
  }

  handleDonationRange = (event) =>{
    this.setState({
      donationAmount: event.target.value
    })
  }

  handleCaption = (event) =>{
    this.setState({
      caption: event.target.value
    })
  }

  handleSubmit = () =>{

  }

  render() {
   const { raisedAmount, goalAmount, name, caption, donationAmount, donorName} = this.state
    return (
    <div className="App">
      <Welcome />
      <RecentDonations />

      <div className = 'donation-area'>
      <Progress
        raisedAmount={raisedAmount}
        goalAmount = {goalAmount}
      />
      <DonationForm
       donorName = {donorName}
       donationAmount = {donationAmount}
       handleNewDonation = {this.handleNewDonation}
       handleDonationAmount = {this.handleDonationAmount}
       handleDonationRange = {this.handleDonationRange}
       handleCaption = {this.handleCaption}
      />
      </div>
      
    </div>
  )
  }
}

export default App;
