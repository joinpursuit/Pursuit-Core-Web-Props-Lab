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
      <div className="col-8">
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
          <div className="form-group">
            <label name="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="John Doe"
              onChange={this.handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label name="message">Message</label>
            <input
              type="text"
              name="message"
              className="form-control"
              placeholder="Good Luck!"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Amount to Donate</label>
            <input
              type="range"
              name="donationAmount"
              className="custom-range"
              min="5"
              max="100"
              value={this.donationAmount}
              onChange={this.handleChange}
            />
            <p>${this.state.donationAmount}</p>
            <input type="submit" value="Donate" />
          </div>
          
        </form>
      </div>
    );
  }
}

export default Donation;
