import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import DonationForm from "./components/DonationForm";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DonationForm />
    </div>
  );
}

export default App;
