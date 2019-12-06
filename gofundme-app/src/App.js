import React from "react";
import "./App.css";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm";
import Raised from "./Components/Raised";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      raised: 0,
      name: "",
      caption: "",
      amount: 5,
      target: 5000,
      recentDonations: []
    };
  }

  handleOnChangeName = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      name: value
    });
  };

  handleOnChangeCaption = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      caption: value
    });
  };

  handleOnChangeAmount = event => {
    event.preventDefault();
    const value = parseInt(event.target.value);
    this.setState({
      amount: value
    });
  }

  handleOnSubmit = event  => {
    event.preventDefault();
    const {name, caption, amount, recentDonations} = this.state;
    recentDonations.push({name, caption, amount})
    this.setState({
      name: "",
      caption: "",
      amount: 5,
      recentDonations: recentDonations
    })
  }

  addAmount = () => {
    const {recentDonations, target} = this.state
    let total = 0;
    for(let i =0; i < recentDonations.length; i++){
      total += recentDonations[i].amount; 
      
      

    }
    const percent = (total/target) * 100
    return {total, percent}
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const {total, percent} = this.addAmount();
    return (
      <div className="App">
        <TopBar />

        <div className="container">
          <div className="row">

          <ul className="col-4 list-unstyled recent-donations">
      <h5 className="my-4">Recent Donations</h5>
      {this.state.recentDonations.map((e, i) => {
        return(
          <RecentDonations
            name={e.name}
            caption={e.caption}
            amount={e.amount}
            key={i}
          />
        )
      })}
            
            </ul>

            <div className="col-8">
              <Raised 
                total={total}
                percent={percent}
                target={this.state.target}
                />
              <hr />

              <DonationForm
                name={this.state.name}
                handleOnChangeName={this.handleOnChangeName}
                caption={this.state.caption}
                handleOnChangeCaption={this.handleOnChangeCaption}
                amount={this.state.amount}
                handleOnChangeAmount={this.handleOnChangeAmount}
                handleOnSubmit={this.handleOnSubmit}
              />
            </div>
          </div>
        </div>
        <div className="Body"></div>
      </div>
    );
  }
}

export default App;
