/*
Joseph P. Pasaoa
APP | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './App.css';

import TopBar from './components/TopBar';
import RecentDonations from './components/RecentDonations';
import Progress from './components/Progress';
import DonationForm from './components/DonationForm';


/* MAIN */
function App() {
  return (
    <div className="App">
      <div id="grid-base">
        <TopBar />
        <RecentDonations />
        <Progress />
        <DonationForm />
      </div>
    </div>
  );
}


/* EXPORTS */
export default App;
