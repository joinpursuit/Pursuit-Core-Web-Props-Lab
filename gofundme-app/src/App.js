import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import DonationForm from './components/DonationForm';
import RecentDonations from './components/Updates';
import Progress from './components/Progress';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      raisedAmount: 0, 
      goalAmount: 5000,
      donations: [],
      donationAmount: 0
    }
  }

  render() {
   const { raisedAmount, goalAmount } = this.state
    return (
    <div className="App">
      <Welcome />
      <Progress
      raisedAmount={raisedAmount}
      goalAmount = {goalAmount}
      />
      <DonationForm />
      <RecentDonations />
      
      
    </div>
  )
  }
}

export default App;
