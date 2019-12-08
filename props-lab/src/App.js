// import React from 'react';
// import './App.css';
// import AllDonations from "./Components/AllDonations"


// function App () {
// // class App extends React.Component {
// //   constructor(){
// //   super()
// // this.state = {
// //   donatedAmountNeeded = 5000,
// //   totalDonated = 150,
// //   donations: [],

// // }



// // handleNewDonation = () =>{
// //   let 
// // }
// return (

//   <AllDonations />
// // {/* <progress */}
// //  totalDonated = {this.state.totalDonated
// // donatedAmountNeeded= {this.state.donatedAmountNeeded}
//   // />


// );

// // }
// }

// export default App;













import React from 'react';
import './App.css';


import Progress from "./Components/Progress.jsx"
import TopBar from "./Components/TopBar.jsx"
import DonationForm from "./Components/DonationForm.jsx"
import RecentDonations from "./Components/RecentDonations.jsx"



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      donationGoal: 5000,
      totalDonated: 0,
      progressPercentage: 0,
      name: "",
      message: "",
      donationAmount: 5,
      donations: [

        // { name: "John", donationAmount: 50, message: "Let's all give to this great cause!" },
        // { name: "John", donationAmount: 50, message: "Let's all give to this great cause!" },
        // { name: "John", donationAmount: 50, message: "Let's all give to this great cause!" },
      ]
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

  //   let newTotal = parseInt(this.state.totalDonated) + parseInt(this.state.donationAmount)
  //   let percentage = parseInt(newTotal) % parseInt(this.state.donationGoal)

  //   this.setState({
  //     totalDonated: newTotal,
  //     progressPercentage: percentage,
  //     // width: (percentage).toString() + "%",
  //     donationAmount: 5,
  //   })
  //   let obj = {}
  //   obj["name"] = this.state.name
  //   obj["donationAmount"] = this.state.donationAmount
  //   obj["message"] = this.state.message
  //   this.state.donations.push(obj)
  //   // console.log(this.state.width)





  const {
    message,
    donationAmount,
    name,
    donations,
    totalDonated
  } = this.state

  // Making a copy of the donations array with the 
  // spread operator.
  let newDonationsCopy = [...donations];

  newDonationsCopy.push({
    name: name,
    amount: donationAmount,
    message: message
  })

  this.setState({
    donations: newDonationsCopy,
    totalDonated:   totalDonated + parseInt(donationAmount),

    donationAmount: 5,
    name: '',
    message: ''
  })
  }



  customRangeFunct = (event) => {

    this.setState({
      donationAmount: event.target.value

    })
  }

  nameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }



  messageInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }





  render() {
    const { donations, donationAmount, totalDonated, name, message, donationGoal, progressPercentage } = this.state
    // console.log(width)
    // const listDonations = donations.map((donation) => {

      // return (
      //   <SingleDonations
      //     // key={donation.name}
      //     name={donation.name}
      //     donationAmount={donation.donationAmount}
      //     message={donation.message}
      //   />

      // )

    // })
    return (

      <div className="App">


        <TopBar />
        <RecentDonations
          donations={donations}
        />
        <Progress
          totalDonated={totalDonated}
          donationGoal={donationGoal}
          progressPercentage= {progressPercentage}
        />
        <DonationForm
          donationAmount={donationAmount}
          customRangeFunct={this.customRangeFunct}

          name={name}
          nameInput={this.nameInput}

          message={message}
          messageInput={this.messageInput}

          handleFormSubmit={this.handleFormSubmit}
        />


        {/* <div className="header"> */}

        {/* <h1 className="headerDescription" id="goFundMe">Go Fund Me</h1>
          <h5 className="headerDescription">Help me go on vacation to a beach somewhere</h5>
        </div> */}

        {/* <div className="left-side">
          <h3 className="recentDonation">Recent Donations</h3>
          <ul>
            {listDonations}
          </ul>
        </div>
        <div className="right-side">
          <h2> Raised ${totalDonated} of ${donationGoal} </h2>
          <form onSubmit={this.handleFormSubmit} id="form">

            <div className="progress">
              <div className="progress-bar" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{progressPercentage}%</div>
            </div>
            <label htmlFor="nameInput">Name </label>
            <input type="text" className="form-control" id="nameInput" placeholder="John Doe"
              value={name}
              onChange={this.nameInput}></input>
            <label htmlFor="captionInput" >Caption </label>
            <input type="text" className="form-control" id="captionInput" placeholder="..."
              value={message}
              onChange={this.messageInput}
            ></input>
            <div>
              <label htmlFor="amountInput" >Amount to Donate </label>
              <input type="range" className="custom-range" id="amountInput"
                min="1"
                max="1000"
                value={donationAmount}
                onChange={this.customRangeFunct}
              ></input>
              <p id="customRangeP">${donationAmount}</p>
              <button id="donateSubmit">Donate</button>
            </div>
          </form>
        </div> */}
      </div>
    )
  }
}



export default App;
