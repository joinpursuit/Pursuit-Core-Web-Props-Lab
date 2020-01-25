import React , { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import DonationFeed from './Components/DonationFeed';
import ProgressBar from './Components/ProgressBar';
import Form from './Components/Form'


const App = () => {
  const [ objective, setObjective ] = useState(1000);
  const [ fund, setFund ] = useState(170)
  const [ donations, setDonations ] = useState([
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
  ])
  const [ formDonor, setFormDonor ] = useState('')
  const [ formCaption, setFormCaption ] = useState('')
  const [ formAmount, setFormAmount ] = useState(5)
  

  const handleSubmitForm = () => {
    if (formDonor) {
      const newDonation = {
        name: formDonor,
        caption: formCaption,
        amount: formAmount
      }

      donations.push(newDonation);

      const total = fund + parseInt(formAmount);

      setDonations(donations)
      setFund(total)
      setFormDonor('')
      setFormCaption('')
      setFormAmount(5)
    }
  }

  const handleInputChange = (id, value) => {
    if (id === 'nameInput') {
      setFormDonor(value)
    } else if (id === 'captionInput') {
      setFormCaption(value)
    } else if (id === 'amountInput') {
      setFormAmount(value)
    }
  }


  return (
    <div className="App">
      <Header />

      <div className='container'>
        <div className='row'>
          <DonationFeed donations={donations} />

          <div className='col-8'>
            <h2 className='mb-4'>Raised ${fund} of <span className='text-muted'>${objective}</span></h2>
            <ProgressBar value={fund} target={objective} />
            <hr />

            <Form submitForm={handleSubmitForm}
              name={formDonor}
              caption={formCaption}
              amount={formAmount}
              handleInput={handleInputChange}
            />
          </div>

        </div>


      </div>


    </div>
  );
}

export default App;
