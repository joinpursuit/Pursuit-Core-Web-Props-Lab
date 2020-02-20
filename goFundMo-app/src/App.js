import React from 'react';
import './App.css';
import TopBar from './Components/TopBar';
import Progress from './Components/Progress';
import DonationForm from './Components/DonationForm';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Progress/>
      <DonationForm/>
    </div>
  );
}

export default App;
