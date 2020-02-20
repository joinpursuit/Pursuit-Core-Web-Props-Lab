import React from "react";

class DonationForm extends React.Component {
  state = {
    name: "",
    caption: "",
    donation: 0,
    donationList: []
  };

  handleSubmit = e => {
    const { name, caption, donation, donationList } = this.state;
    e.preventDefault();
    this.setState(prevState => {
      return {
        donationList: [
          ...prevState.donationList,
          {
            name: name,
            caption: caption,
            donation: donation
          }
        ]
      };
    });
    console.log(donationList);
    // debugger;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Caption
          <input
            type="text"
            value={this.state.caption}
            name="caption"
            onChange={this.handleChange}
            required
          />
        </label>

        <lable>
          Amount to Donate
          <input
            type="range"
            value={this.state.donation}
            min="0"
            onChange={this.handleChange}
            name="donation"
          />
          {this.state.donation}
          <input type="submit" value="donate" />
        </lable>
      </form>
    );
  }
}

export default DonationForm;
