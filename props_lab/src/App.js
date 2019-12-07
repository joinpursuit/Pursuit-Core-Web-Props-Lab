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
      progress: 0
    }
  }

  changeName = (event) =>{
    console.log("event target", event.target.value)
    console.log("name state", this.state.name)
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
      console.log(this.state.amount)
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
      progress: this.state.progress + Number(this.state.amount)
    })

    console.log(this.state.donations)
  }



  render() {
    const {name, caption, amount, donations, progress} = this.state;

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
        <Progress 
        progress={progress}
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
        <ul>
          {individualDonations}
        </ul>
      </div>
    );
  }
}

export default App;
