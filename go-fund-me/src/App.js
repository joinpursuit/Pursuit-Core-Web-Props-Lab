import React, { useState } from 'react';
import './App.css';
import DonationForm from './Components/donationForm';
import Progress from './Components/progress';
import RecentDonations from './Components/recentDonations';
import TopBar from './Components/TopBar';

const App = () => {
  const goalAmount = 1000;
  const [percentage, setPercentage] = useState(0);
  const [donorName, setDonorName] = useState('');
  const [donorCaption, setDonorCaption] = useState('');
  const [donatedAmount, setDonatedAmount] = useState(5);
  const [raised, setRaised] = useState(0)
  const [donations, setDonations] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();

    let newDonationCopy = [...donations];

    newDonationCopy.push({
      name: donorName,
      caption: donorCaption,
      amount: donatedAmount
    })
    setDonations(newDonationCopy)
    setRaised(raised + donatedAmount)
    setPercentage((raised + donatedAmount) / goalAmount * 100)

  }
  const handleChangeDonatedAmount = (event) => {
    setDonatedAmount(parseInt(event.target.value))
  }
  const handleDonorName = (event) => {
    setDonorName(event.target.value)
  }

  const handleDonorCaption = (event) => {
    setDonorCaption(event.target.value)
  }

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
                raised={raised}
                percentage={percentage}
              />

            </div>

            <DonationForm
              // newDonation={handleNewDonation}
              donatedAmount={donatedAmount}

              changeDonatedAmount={handleChangeDonatedAmount}
              handleSubmit={handleSubmit}
              donorName={donorName}
              handleDonorName={handleDonorName}

              donorCaption={donorCaption}
              handleDonorCaption={handleDonorCaption}
            />

          </div>
        </div>

      </div>

    </div>


  );
}

export default App;
