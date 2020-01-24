import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import Donation from "./Components/Donation";

const App = () => {
  const [state, setState] = useState({
    donations: [
      // { name: "John", amount: 25, message: "Kiki", id: 1 },
      // { name: "Steve", amount: 50, message: "do you", id: 2 },
      // { name: "Samsung", amount: 100, message: "luv me", id: 3 }
    ],
    donationTotal: 0,
    donationGoal: 1000
  })

  const handleSubmit = e => {
    e.preventDefault();
  };

  const addDonation = props => {
    const id = state.donations.length + 1;
    props.id = id;
    const donationTotal = state.donationTotal + Number(props.donationAmount);
    setState({
      ...state,
      donations: [...state.donations, props],
      donationTotal
    });
    console.log(props);
  };

  return (
    <div className="App">
      <Header />
      <Feed donations={state.donations} />
      <Donation
        donationTotal={state.donationTotal}
        donationGoal={state.donationGoal}
        donationAmount={state.donationAmount}
        handleSubmit={handleSubmit}
        addDonation={addDonation}
      />
    </div>
  );
}

export default App;
