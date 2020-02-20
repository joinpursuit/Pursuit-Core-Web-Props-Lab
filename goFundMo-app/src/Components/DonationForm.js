import React, { Component } from "react";

class DonationForm extends Component {
  state = {
    name: "",
    caption: "",
    amount: 0
  }
  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handelSubmit = (e) => {
    e.preventDefault();
    let {name, caption, amount} = this.state;
    console.log({name, caption, amount})

  } 

  render() {
    let { name, caption, amount} = this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Name:
          <input type="text" value={name} name="name" onChange={this.handelChange}/>
        </label>

        <label>
          Caption:
          <input type="text" value={caption} name="caption" onChange={this.handelChange}/>
        </label>

        <label>
          Amount
          <input type="range" value={amount} name="amount" onChange={this.handelChange} min="1" max="5000"/>
        </label>
        <h3> $ { amount } </h3>
        <button type="submit"> Submit </button>
      </form>
    )
  }
}

export default DonationForm;
