import React from 'react';
import TopBar from './components/topBar/topBar';
import Donations from './components/donations/Donations';
import DonationsForm from './components/donationForm/DonationsForm';
// import logo from './logo.svg';
import './App.css';
// import DonationsForm from './components/donationForm/DonationsForm';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Donations/>
      <DonationsForm/>
    </div>
  );
}

export default App;
