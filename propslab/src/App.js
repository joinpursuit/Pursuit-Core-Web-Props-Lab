import React from 'react';
import TopBar from './components/topBar/topBar';
import DonationsDisplay from './components/donations/DonationsDisplay';
import DonationsForm from './components/donationForm/DonationsForm';
// import logo from './logo.svg';
import './App.css';
// import DonationsForm from './components/donationForm/DonationsForm';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <DonationsDisplay/>
      <DonationsForm/>
    </div>
  );
}

export default App;
