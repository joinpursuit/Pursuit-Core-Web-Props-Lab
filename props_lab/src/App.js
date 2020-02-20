import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Form from './components/donationForm'
import TopBar from './components/topBar';
import RecentDonations from './components/recentDonations';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <TopBar />
      <RecentDonations />
    </div>
  );
}

export default App;
