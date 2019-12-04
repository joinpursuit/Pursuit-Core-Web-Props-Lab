import React from 'react';
import './App.css';

import Header from './Components/Header';
import DonationFeed from './Components/DonationFeed';
import ProgressBar from './Components/ProgressBar';
import Form from './Components/Form'


class App extends React.Component {
  state = {
    objective: 1000,
    fund: 170,
    donationCount: 3,
    donations: [
      {
        name: 'John',
        caption: 'Here take a break from work',
        amount: 30
      },
      {
        name: 'Emily',
        caption: '',
        amount: 110
      },
      {
        name: 'Sam',
        caption: 'Go to miami',
        amount: 30
      }
    ],
    formDonor: '',
    formCaption: '',
    formAmount: 5
  }

  handleSubmitForm = () => {
    if (this.state.formDonor) {
      const allDonations = [...this.state.donations];
      const newDonation = {
        name: this.state.formDonor,
        caption: this.state.formCaption,
        amount: this.state.formAmount
      }

      allDonations.push(newDonation);

      const total = this.state.fund + parseInt(this.state.formAmount);

      this.setState({
        donations: allDonations,
        fund: total,
        formDonor: '',
        formCaption: '',
        formAmount: 5
      })
    }
  }

  handleInputChange = (id, value) => {
    if (id === 'nameInput') {
      this.setState({ formDonor: value })
    } else if (id === 'captionInput') {
      this.setState({ formCaption: value })
    } else if (id === 'amountInput') {
      this.setState({ formAmount: value })
    }
  }

  // ######################### RENDER #############################
  render() {
    return (
      <div className="App">
        <Header />

        <div className='container'>
          <div className='row'>
            <DonationFeed donations={this.state.donations} />

            <div className='col-8'>
              <h2 className='mb-4'>Raised ${this.state.fund} of <span className='text-muted'>${this.state.objective}</span></h2>
              <ProgressBar value={this.state.fund} target={this.state.objective} />
              <hr />

              <Form submitForm={this.handleSubmitForm}
                name={this.state.formDonor}
                caption={this.state.formCaption}
                amount={this.state.formAmount}
                handleInput={this.handleInputChange}
              />
            </div>

          </div>


        </div>


      </div>
    );
  }
}

export default App;
