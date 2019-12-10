/*
Joseph P. Pasaoa
APP | Go Fund Me Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './App.css';

import TopBar from './components/TopBar';
import RecentDonations from './components/RecentDonations';
import Progress from './components/Progress';
import DonationForm from './components/DonationForm';


/* MAIN */
class App extends Component {
  constructor() {
    super();
    this.target = 1000;
    this.state = {
      donations: [
        { donor: "Joey", amount: 211, msg: "Good luck, Alejo! May your trip be all you imagined and more!" },
        { donor: "JR", amount: 400, msg: "wish I were the one going!!!" },
        { donor: "Wynter", amount: 50, msg: "Bon voyage!" },
        { donor: "Dessa", amount: 100, msg: "Bring me back something cool~" }
      ],
    }
  }

  calcRaised = (donationsArr) => {
    return donationsArr.reduce((sum, curr) => sum += curr.amount, 0);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    const { donations } = this.state;
    const raised = this.calcRaised(donations);
    return (
      <div className="App">
        <div id="grid-base">
          <TopBar />
          <RecentDonations 
            donations={donations}
          />
          <Progress 
            target={this.target} 
            raised={raised}
          />
          <DonationForm 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
          />
        </div>
      </div>
    );
  }
}


/* EXPORTS */
export default App;
