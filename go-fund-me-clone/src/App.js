import React from 'react';
import logo from './logo.svg';
import TopBar from './TopBar.jsx';
import DonationForm from './DonationForm.jsx';
import DonationsBar from './DonationsBar.jsx';
import DonationBoard from './DonationBoard';
import './App.css';
import './main.css';

function App() {
  return (
    <div className ='entireApp'>
      <div className='upperHalf'>
        <TopBar />
      </div>
      <DonationBoard />
    </div>

  );
}

export default App;
