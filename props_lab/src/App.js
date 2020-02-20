import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import DisplayRecentDonations from "./components/RecentDonations";
import DonationForm from "./components/DonationForm";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DisplayRecentDonations />
      <DonationForm />
    </div>
  );
}

export default App;
