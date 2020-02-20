import React, { Component } from "react";
import "../css/DonationForm.css";

class DonationForm extends Component {
  state = {
    name: "",
    caption: "",
    amount_to_donate: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {};

  render() {
    let { name, caption, amount_to_donate } = this.state;
    return (
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
    );
  }
}

export default DonationForm;
