import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import TopBar from './components/TopBar';
import RecentDonations from './components/RecentDonations';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <RecentDonations />
    </div>
  );
}

export default App;
