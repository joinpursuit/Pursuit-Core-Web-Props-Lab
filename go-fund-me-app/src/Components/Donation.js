import React from "react";

class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donationAmount: 50,
      message: "Good Luck!"
    };
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addDonation(this.state);
  };

  render() {
    return (
      <div>
        <h2 id="raised-display">
          Raised ${this.props.donationTotal} of{" "}
          <span id="donation-goal font-grey">${this.props.donationGoal}</span>
        </h2>
        <div id="donation-progress-bar">
          {((this.props.donationTotal / this.props.donationGoal) * 100).toFixed(
            2
          )}
          %
        </div>
        <form onSubmit={this.handleSubmit}>
          <label name="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            onChange={this.handleChange}
            required
          />
          <label name="message">Message</label>
          <input
            type="text"
            name="message"
            placeholder="Good Luck!"
            onChange={this.handleChange}
          />
          <input
            type="range"
            name="donationAmount"
            min="5"
            max="100"
            value={this.donationAmount}
            onChange={this.handleChange}
          />
          <p>${this.state.donationAmount}</p>
          <input type="submit" value="Donate" />
        </form>
      </div>
    );
  }
}

export default Donation;
