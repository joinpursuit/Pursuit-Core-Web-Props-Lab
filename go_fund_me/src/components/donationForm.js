import React from "react";

class DonationForm extends React.Component {
  state = {
    name: "",
    caption: "",
    donation: 0
  };

  handleSubmit = e => {
    const { name, caption, donation } = this.state;
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Caption
          <input
            type="text"
            value={this.state.caption}
            onChange={this.handleChange}
          />
        </label>

        <lable>
          Amount to Donate
          <input
            type="range"
            value={this.state.donation}
            min="0"
            onChange={this.handleChange}
          />
        </lable>
      </form>
    );
  }
}

export default DonationForm;
