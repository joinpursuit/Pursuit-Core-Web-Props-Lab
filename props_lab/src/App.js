import React from 'react';

import './App.css';

import Donations from "./Components/MakeDonation"
import DonationsMade from "./Components/Donations"
import Progress from "./Components/Progress"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      caption: "",
      amount: 5,
      donations: [],
      progress: 0,
      percentage: 0
    }
  }

  changeName = (event) =>{
    this.setState({
        name: event.target.value
    })
  }
  changeCap = (event) =>{
      this.setState({
          caption: event.target.value
      })
  }
  changeAmount = (event) =>{
      this.setState({
          amount: event.target.value
      })
      
  }
  addDonation = (event) => {
    event.preventDefault();
    let newDonation = {
      name: this.state.name,
      caption: this.state.caption,
      amount: this.state.amount
    }
    let donationsArr = [];
    for(let i of this.state.donations) {
      donationsArr.push(i);
    }
    donationsArr.push(newDonation)


     this.setState({
      donations: donationsArr,
      progress: this.state.progress + Number(this.state.amount),
    })

    this.setState((prevState) => {
       return {percentage: ((prevState.progress/5000)*100)}
    })

    console.log("percentage", this.state.percentage)
  }




  render() {
    const {name, caption, amount, donations, progress, percentage} = this.state;
   

    const individualDonations = donations.map((donation) => {
      return (
        <DonationsMade 
        key={donation.name}
        caption={donation.caption}
        name={donation.name}
        amount={donation.amount}
        />
      )
    })
  
    return (
      <div className="App">
        <div className="banner">
          <h2>Please help me retire ASAP!</h2>
        </div>
        <Progress 
        progress={progress}
        percentage={percentage}
        />
        <Donations 
        name={name}
        caption={caption}
        amount={amount}
        changeName={this.changeName}
        changeCap={this.changeCap}
        changeAmount={this.changeAmount}
        addDonation={this.addDonation}
        />
        <div className="donations">
          <h2>Donations</h2>
          <ul>
            {individualDonations}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
