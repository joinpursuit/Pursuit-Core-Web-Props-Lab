import React from 'react';
import './App.css';
import Form from './Components/form'
import Donors from './Components/Donors'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      donors: [
        {
          name: "Brisco County Jr",
          caption: "I believe in you, buddy!",
          donation: 100
        },
        {
          name: "Scrooge McDuck",
          caption: "Work smarter, not harder!",
          donation: 5
        },
        {
          name: "Lou Jitsu",
          caption: "HOT SOUP!",
          donation: 25
        }
      ],
      donatedTotal: this.totalMath,
      donatedTotalPercent: this.totalMath / 100,
      donationLimit: 5000,
      donationAmount: 0,
      userName: '',
      userCaption: ''
    }
  }

  totalMath = () => {
    let allDonors = this.state.donors
    let sum = 0
    for (let person of allDonors) {
      sum += person.donation
    }
    return sum
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted")

    // if (this.allFieldsValid()) {
    //   this.handleCalculate();
    //   this.setState({
    //     submitted: true
    //   })
    // }
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
      parseInt(this.state.donationAmount) !== 0 
    )
  }

  render() {
    const {
      donors,
      donatedTotal,
      donatedTotalPercent,
      donationLimit,
      donationAmount,
      userName,
      userCaption} = this.state;
    
    return (
      <div className="App">
        <div className="header">
          <h1>Go Fund Doug</h1>
          <p>Help me quit my job so I can have more time to learn how to code</p>
        </div>
        <div className="left-side">
          <div className="donation-list">
            <Donors />
          </div>
        </div>
        <div className="right-side">
          <div className="donation-meter">
            <h2>Raised $ {donatedTotal} of $ {donationLimit}</h2>
            <div>
              <div role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{donatedTotalPercent}%</div>
            </div>
          </div>
          <div className="form-container">
            <Form 
              handleFormSubmit={this.handleFormSubmit} 
              handleUserName={this.handleUserName}
              userName={this.state.userName}
              handleUserCaption={this.handleUserCaption}
              userCaption={this.state.userCaption}
              handleDonationAmount={this.handleDonationAmount}
              donationAmount={this.state.donationAmount}
            />
          </div>
        </div>
      </div>
    );

  }

}

export default App;
