import React from 'react';
import TopBar from './Components/TopBar';
import './App.css';
import RecentDonation from './Components/RecentDonation';
import ProgressBar from './Components/ProgressBar';
import DonationForm from './Components/DonationForm';

class App extends React.Component {
  constructor(){
    super() 
    this.state = {
      // donations: [
      //     { name: 'Jo', amount: 251, caption: 'do you luv me'},
      //     { name: 'John', amount: 30, caption: 'Here take a break from work'},
      //     { name: 'Michelle', amount: 20, caption: 'lol'},
      //     { name: 'Emily', amount: 110 },
      //     { name: 'Sam', amount: 30, caption: 'Go to miami'}
      // ],
      nameEntry: '',
      captionEntry: '',
      range: 0,
      currentAmount: 0,
      totalAmount: 1000,

    }
    
  }
  handleFormSubmit= (e) => {
    // console.log("new donation")
    e.preventDefault();
    const {nameEntry, captionEntry, currentAmount, range} = this.state

    let newRangeCopy = [...range]
    newRangeCopy.push({
      name: nameEntry,
      amount: rangeAmount
    })
    let currentAmount =this.state.currentAmount;
    let range = this.state.range
    this.setState({
        currentAmount: currentAmount + parseInt(range)
    })
  }


  handleNameEntry = (event) => {
    this.setState({
      nameEntry: event.target.value
    })
  }

  handleCaptionEntry = (event) => {
    this.setState({
      captionEntry: event.target.value
    })
  }

  handleDonationRange = (event) => {
    let range = this.state.range
    this.setState({
        range: event.target.value
    })
  }

  // allCompleted = () => {
  //   return (
  //     this.state.nameEntry &&
  //     this.state.range  
    
  //   )
  // }


  render() {
   const { donations, nameEntry, captionEntry, range } = this.state;
      console.log('donor name', nameEntry)
      console.log('caption', captionEntry)
      console.log('amount', range)
      console.log("current amount", this.state.currentAmount)
  //  const donorName = 

   const list = donations.map((donations) => {
       return (
        <RecentDonation
          key= {donations.name}
          name={donations.name}
          amount= {donations.amount}
          caption= {donations.caption}
        
        />
      )
   })
      return (
    <div className="App">
     <TopBar
      title='Go Fund Me'
      statement='Help me go on a vacation to a beach somewhere'
     />
     <div className='recent-donations'>  
       <ul>
         {list}
       </ul>
     </div>
     <ProgressBar
        currentAmount={this.state.currentAmount}
        totalAmount={this.state.totalAmount}
      
     />
     <DonationForm
       handleForm= {this.handleForm}
       handleNameEntry = {this.handleNameEntry}
       handleCaptionEntry = {this.handleCaptionEntry}
       handleDonationRange = {this.handleDonationRange}
       range={this.state.range}
      handleNewDonation= {this.handleFormSubmit}
     />
    
    </div>
  );
  }
  
}

 

export default App;
