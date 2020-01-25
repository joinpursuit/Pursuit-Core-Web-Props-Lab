import React, { useState } from "react";

const Donation = (props) => {
  const [state, setState] = useState({
    donationAmount: 50,
    message: "Good Luck!"
  })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addDonation(state);
  };

  return (
    <div>
      <h2 id="raised-display">
        Raised ${props.donationTotal} of{" "}
        <span id="donation-goal font-grey">${props.donationGoal}</span>
      </h2>
      <div id="donation-progress-bar">
        {((props.donationTotal / props.donationGoal) * 100).toFixed(
          2
        )}
        %
        </div>
      <form onSubmit={handleSubmit}>
        <label name="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={handleChange}
          required
        />
        <label name="message">Message</label>
        <input
          type="text"
          name="message"
          placeholder="Good Luck!"
          onChange={handleChange}
        />
        <input
          type="range"
          name="donationAmount"
          min="5"
          max="100"
          value={state.onationAmount}
          onChange={handleChange}
        />
        <p>${state.donationAmount}</p>
        <input type="submit" value="Donate" />
      </form>
    </div>
  );
}

export default Donation;
