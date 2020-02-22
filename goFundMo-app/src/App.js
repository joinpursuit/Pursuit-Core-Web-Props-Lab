import React from 'react';
import './App.css';
import TopBar from './Components/TopBar';
import Progress from './Components/Progress';
import DonationForm from './Components/DonationForm';

let donations = [];

const handelSubmit = ( donation) => {

  donations.push(donation)
  console.log(donations)
} 

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Progress/>
      <DonationForm handelSubmit={handelSubmit}/>
    </div>
  );
}

export default App;
