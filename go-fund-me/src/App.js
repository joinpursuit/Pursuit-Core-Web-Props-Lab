import React from 'react';
import './App.css';
import DonationForm from './Components/donationForm';
import Progress from './Components/progress';
import RecentDonations from './Components/recentDonations';
import TopBar from './Components/TopBar';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      goalAmount: 1000,
      raised: 0,
      donations: [],
      donatedAmount: 5,
      donorName: '',
      donorCaption: '',
      percentage: 0
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { goalAmount, raised, donatedAmount, donorCaption, donorName, donations } = this.state;
    let newDonationCopy = [...donations];

    newDonationCopy.push({
      name: donorName,
      caption: donorCaption,
      amount: donatedAmount
    })

    this.setState({
      donations: newDonationCopy,
      raised: raised + donatedAmount,
      percentage: ((raised + donatedAmount) / goalAmount) * 100
    })


  }
  handleChangeDonatedAmount = (event) => {
    this.setState({
      donatedAmount: parseInt(event.target.value)
    })
  }
  handleDonorName = (event) => {
    this.setState({
      donorName: event.target.value
    })
  }

  handleDonorCaption = (event) => {
    this.setState({
      donorCaption: event.target.value
    })
  }
  render() {
    let { raised, donatedAmount, donorName, donorCaption, donations, percentage } = this.state;
    return (
      <div className="App">

        <div className='main-page'>
          <TopBar />
          <div className='body'>

            <div className='body-left'>
              <RecentDonations donations={donations} />
            </div>


            <div className='body-right'>
              <div id='goal'>
               
                <Progress
                raised = {raised}
                  percentage={percentage}
                />

              </div>

              <DonationForm
                newDonation={this.handleNewDonation}
                donatedAmount={donatedAmount}

                changeDonatedAmount={this.handleChangeDonatedAmount}
                handleSubmit={this.handleSubmit}
                donorName={donorName}
                handleDonorName={this.handleDonorName}

                donorCaption={donorCaption}
                handleDonorCaption={this.handleDonorCaption}
              />

            </div>
          </div>

        </div>

      </div>


    );
  }
}

export default App;
