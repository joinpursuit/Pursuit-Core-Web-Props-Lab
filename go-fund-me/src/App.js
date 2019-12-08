import React from 'react';
import './App.css';
import DonationForm from './Components/Donation-Form'
import Donors from './Components/Donors'
import TopBar from './Components/TopBar'
import Progress from './Components/Progress'
import RecentDonations from './Components/Recent-Donations'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allDonations: [
        // {
        //   name: "Brisco County Jr",
        //   caption: "I believe in you, buddy!",
        //   amount: 100
        // },
        // {
        //   name: "Scrooge McDuck",
        //   caption: "Work smarter, not harder!",
        //   amount: 5
        // },
        // {
        //   name: "Lou Jitsu",
        //   caption: "HOT SOUP!",
        //   amount: 25
        // }
      ],
      donatedTotal: 0,
      donatedTotalPercent: 0,
      donationGoal: 5000,
      userName: '',
      donationAmount: 0,
      userCaption: '',
      submitted: false
    }
  }

  handleNewDonation = () => {
    let donatedTotal = parseInt(this.state.donatedTotal);
    let donationAmount = parseInt(this.state.donationAmount);

    this.setState({
      donatedTotal: donatedTotal + donationAmount,
    })
  }

  handleTotalPercentage = () => {
    let donatedTotal = parseInt(this.state.donatedTotal);
    let donationGoal = parseInt(this.state.donationGoal);
    this.setState({
      donatedTotalPercent: donatedTotal / donationGoal * 100
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { 
      userCaption, 
      userName, 
      donationAmount, 
      allDonations 
    } = this.state;

    let allDonationsCopy = [...allDonations]

    allDonationsCopy.push({
      name: userName,
      caption: userCaption,
      amount: donationAmount
    })

    console.log("form submitted")
    this.handleNewDonation();
    console.log(this.state.donatedTotal)
    this.handleTotalPercentage();

    if (this.allFieldsValid()) {
      this.setState({
        allDonations: allDonationsCopy,
        submitted: true
      })
    }
  }

  handleUserName = (event) => {
    console.log("that's some spicy input!")
    this.setState({
      userName: event.target.value
    })
  }

  handleUserCaption = (event) => {
    console.log("I shouldn't have eaten the whole input!")
    this.setState({
      userCaption: event.target.value
    })
  }

  handleDonationAmount = (event) => {
    console.log("slider adjusted")
    this.setState({
      donationAmount: event.target.value
    })
  }

  allFieldsValid = () => {
    return (
      this.state.userName &&
      this.state.userCaption &&
      this.state.donationAmount 
    )
  }

  render() {
    const {
      allDonations,
      donatedTotal,
      donatedTotalPercent,
      donationGoal,
      donationAmount,
      userName,
      userCaption} = this.state;

    return (
      <div className="App">
        <TopBar />
        <div className="left-side">
            <RecentDonations 
              allDonations={allDonations}
            />
        </div>
        <div className="right-side">
          <div className="donation-meter">
            <Progress
              donatedTotal={donatedTotal}
              donationGoal={donationGoal}
              donatedTotalPercent={donatedTotalPercent}
            />
          </div>
          <div className="form-container">
            <DonationForm 
              handleFormSubmit={this.handleFormSubmit} 
              handleUserName={this.handleUserName}
              userName={userName}
              handleUserCaption={this.handleUserCaption}
              userCaption={userCaption}
              handleDonationAmount={this.handleDonationAmount}
              donationAmount={donationAmount}
            />
          </div>
        </div>
      </div>
    );

  }

}

export default App;
