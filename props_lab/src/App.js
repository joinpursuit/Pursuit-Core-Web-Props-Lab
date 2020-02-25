import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import DonationsAndForm from "./components/DonationsAndForm";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DonationsAndForm />
    </div>
  );
}

export default App;
