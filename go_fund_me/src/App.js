import React from "react";
import DonationForm from "./components/donationform/donationForm";
import DonationDisplay from "./components/donsationsDisplay/donationDisplay";

import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    caption: "",
    donation: 0,
    donationList: [],
    goal: 1000,
    totalDonation: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, caption, donation, totalDonation } = this.state;
    this.setState(prevState => {
      return {
        donationList: [
          ...prevState.donationList,
          {
            name: name,
            caption: caption,
            donation: donation
          }
        ],
        totalDonation: parseInt(totalDonation) + parseInt(donation)
      };
    });
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      name,
      caption,
      donation,
      donationList,
      totalDonation,
      goal
    } = this.state;

    return (
      <div className="App">
        <div>
          <p>
            Rasied ${totalDonation} of ${goal}
          </p>
          <DonationForm
            name={name}
            caption={caption}
            donation={donation}
            donationList={donationList}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div>
          Recent Donations
          <DonationDisplay donations={donationList} />
        </div>
      </div>
    );
  }
}
export default App;
