import React, { Component } from "react";
import Donor from "./Donor";
import ProgressBar from "./Progress";
import "../css/DonationsAndForm.css";

class DonationsAndForm extends Component {
  state = {
    name: "",
    caption: "",
    amount_to_donate: 0,
    donors: [],
    totalRaised: 0,
    goal: 200000,
    percentage: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { name, caption, amount_to_donate, goal } = this.state;
    let donor = {
      name: name,
      caption: caption,
      amount_to_donate: amount_to_donate
    };
    this.setState(prevState => {
      return {
        donors: [...prevState.donors, donor],
        totalRaised: (prevState.totalRaised += Number(donor.amount_to_donate)),
        percentage: Math.min(
          Number(parseFloat((prevState.totalRaised / goal) * 100).toFixed(2)),
          100
        )
      };
    });
  };

  render() {
    console.log(this.state);
    let {
      name,
      caption,
      amount_to_donate,
      donors,
      totalRaised,
      goal,
      percentage
    } = this.state;
    let donorsList = donors.map((donor, i) => {
      return (
        <Donor
          key={i}
          name={donor.name}
          caption={donor.caption}
          amount_to_donate={donor.amount_to_donate}
        />
      );
    });
    return (
      <>
        <div id={"donationsRecent"}>
          <h3>Recent Donations</h3>
          <div>{donorsList}</div>
        </div>
        <div id={"progressBar"} onSubmit={this.handleSubmit}>
          <ProgressBar
            totalRaised={totalRaised}
            goal={goal}
            percentage={percentage}
          />
        </div>
        <form className={"donationForm"} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Input a name"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Caption
            <input
              type="text"
              placeholder="..."
              name="caption"
              value={caption}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Amount to Donate
            <input
              id="amountInput"
              type="range"
              min="0"
              max="50000"
              name="amount_to_donate"
              value={amount_to_donate}
              onChange={this.handleChange}
            ></input>
            <h2>${amount_to_donate}</h2>
          </label>
          <button id="donateBtn" type="submit">
            Donate
          </button>
        </form>
      </>
    );
  }
}

export default DonationsAndForm;
