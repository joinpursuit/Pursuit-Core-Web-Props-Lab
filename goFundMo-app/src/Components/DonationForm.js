import React, { Component } from "react";


class DonationForm extends Component {
  state = {
    name: "",
    caption: "",
    amount: 0,
    donations: []
  }
  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let { name, caption, amount} = this.state;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handelSubmit({name, caption, amount})
      }}>
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
