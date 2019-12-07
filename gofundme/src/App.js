import React from 'react';
import './App.css';
import Welcome from './Components/WelcomeBanner'
import Recent from './Components/RecentDonations'
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      donations: [
        // { name: 'Janelly', caption: 'I did it', amountDonated: 40 },
        // { name: 'Kamla', caption: 'Yep', amountDonated: 50 },
        // { name: 'Xaiver', caption: 'On it', amountDonated: 40 },
        // { name: 'Kay', caption: 'Beach Money', amountDonated: 20 }
      ],
      name: '',
      caption: '',
      donationAmount: 0,
      raisedAmount: 0,
      goalAmount: 5000
    }
    this.state = this.initialState
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { caption, donationAmount, name, donations, raisedAmount } = this.state

    const newDonationsCopy = [...donations];

    newDonationsCopy.push({
      name: name,
      caption: caption,
      donationAmount: donationAmount
    })

    this.setState({
      raisedAmount: Number(raisedAmount) + Number(donationAmount),
      donations: newDonationsCopy
    })
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleCaption = (e) => {
    this.setState({
      caption: e.target.value
    })
  }

  handleDonationAmount = (e) => {
    this.setState({
      donationAmount: e.target.value
    })
  }

  recentDonation = (e) => {

  }

  render() {
    const { raisedAmount, goalAmount, donationAmount, name, caption } = this.state

    // const { recentDonations } = this.state

    return (
      <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"></link>

        <div className='top-bar'>
          <Welcome />
          <div className='recent-donations'>
            <Recent
              donations={this.state.donations}
            // name={name}
            // caption={caption}
            // donationAmount={donationAmount}
            />
            <div>
              <Progress
                raisedAmount={raisedAmount}
                goalAmount={goalAmount} />
              <DonationForm
                handleName={this.handleName}
                handleCaption={this.handleCaption}
                handleSubmit={this.handleSubmit}
                handleDonationAmount={this.handleDonationAmount}
                name={name}
                caption={caption}
                donationAmount={donationAmount}
              />
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default App;
