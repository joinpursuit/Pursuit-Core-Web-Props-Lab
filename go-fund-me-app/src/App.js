import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import Donation from "./Components/Donation";

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
    const donationTotal =
      this.state.donationTotal + Number(props.donationAmount);
    this.setState({
      ...this.state,
      donations: [...this.state.donations, props],
      donationTotal
    });
    console.log(props);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Feed donations={this.state.donations} />
        <Donation
          donationTotal={this.state.donationTotal}
          donationGoal={this.state.donationGoal}
          donationAmount={this.state.donationAmount}
          handleSubmit={this.handleSubmit}
          addDonation={this.addDonation}
        />
      </div>
    );
  }
}

export default App;
