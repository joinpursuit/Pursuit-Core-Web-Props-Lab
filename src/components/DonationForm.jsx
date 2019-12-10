/*
Joseph P. Pasaoa
Donation Form Component | Go Fund Me Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './DonationForm.css';


/* MAIN */
class DonationForm extends Component {
  constructor() {
    super();
    this.initialState = {
      nameValue: "",
      msgValue: "",
      amount: 0
    }
    this.state = this.initialState;
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <section id="form">
        <h2>Make a Donation</h2>
        <form id="formDonate" onSubmit={this.handleSubmit}>
          <label htmlFor="nameValue">Name</label>
            <input type="text" id="nameValue" onChange={this.handleChange} placeholder="Jane Doe" />
          <label htmlFor="msgValue">Message</label>
            <input type="text" id="msgValue" onChange={this.handleChange} placeholder="What would you like to tell Alejo?" />
          <button type="button">Submit</button>
        </form>
      </section>
    )
  }
}


/* EXPORT */
export default DonationForm;
