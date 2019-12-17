import React, {Component} from 'react';
import './App.css';

import TopBar from './Components/TopBar';
import RecentDonation from './Components/RecentDonation';
import Progress from './Components/Progress';
import DonationForm from './Components/DonationForm'


class App extends Component {
  constructor(){
  super()
  this.state = {
    goalAmount:1000,
    raisedAmount: 0,
    donations: [],
    donationAmount: 5,
    name: '',
    caption: '',
  }
}

handleNewDonation = (e) => {
  e.preventDefault();
  const{donationAmount, 
        caption,
        name, 
        donations, 
        raisedAmount} = this.state

  let newDonationCopy = [...donations]

  newDonationCopy.push({
    name:name,
    amount:donationAmount,
    caption:caption
  })

  this.setState({
    donations: newDonationCopy,
    raisedAmount: raisedAmount + parseInt(donationAmount),
    //resetting state
    donationAmount: 5,
    name: '',
    caption: '',
  })
}

handleDonationAmount = (e) =>{
this.setState({
  donationAmount: e.target.value
})
}

handleName = (e) => {
  this.setState({
    name: e.target.value
  })
}

handleCaption = (e) => {
  this.setState({
      caption:e.target.value
  })
}

render(){
  const {raisedAmount,
         goalAmount, 
         donationAmount, 
         caption, 
         name, 
         donations} = this.state

  return(
    <div className="App">
    <TopBar />
    
    <RecentDonation 
    donations={donations}   
    />
   
    <Progress 
    raisedAmount={raisedAmount}
    goalAmount = {goalAmount}
    />
    
    <DonationForm 
    handleNewDonation = {this.handleNewDonation}
    donationAmount = {donationAmount}
    handleDonationAmount = {this.handleDonationAmount}
    handleName = {this.handleName}
    name = {name}
    handleCaption = {this.handleCaption}
    caption = {caption}
    />
   </div>
  )
}
}



export default App;
