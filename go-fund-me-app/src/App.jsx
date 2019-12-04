import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Feed from "./Components/Feed.jsx";
import Donation from "./Components/Donation.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [
        // { name: "John", amount: 25, message: "Kiki", id: 1 },
        // { name: "Steve", amount: 50, message: "do you", id: 2 },
        // { name: "Samsung", amount: 100, message: "luv me", id: 3 }
      ],
      donationTotal: 0,
      donationGoal: 1000
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  addDonation = props => {
    const id = this.state.donations.length + 1;
    props.id = id;
    const donationTotal = this.state.donationTotal + Number(props.donationAmount);
    const donationArr = [].concat(this.state.donations)
    donationArr.push(props);
    this.setState({
      ...this.state,
      donations: donationArr,
      donationTotal
    });
    console.log(props);
  };

  render() {
    console.log(this.state.donations)
    return (
      <div className="App">
        
        <Header />
        <div className="container">
          <div className="row">
            < Feed donations = {this.state.donations}/> 
            <Donation
            donationTotal = {this.state.donationTotal}
            donationGoal = {this.state.donationGoal}
            donationAmount = {this.state.donationAmount}
            handleSubmit = {this.handleSubmit}
            addDonation = {this.addDonation}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
