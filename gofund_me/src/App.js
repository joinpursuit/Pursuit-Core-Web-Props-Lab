import React from 'react';
import TopBar from './Components/TopBar';
import './App.css';
import RecentDonation from './Components/RecentDonation';
import ProgressBar from './Components/ProgressBar';

class App extends React.Component {
  constructor(){
    super() 
    this.state = {
      donations: [
          { name: 'Jo', amount: 251, caption: 'do you luv me'},
          { name: 'John', amount: 30, caption: 'Here take a break from work'},
          { name: 'Michelle', amount: 20, caption: 'lol'},
          { name: 'Emily', amount: 110 },
          { name: 'Sam', amount: 30, caption: 'Go to miami'}
      ],

      // currentAmt: currentAmt,
      // totalAmt: 1000

    }
    
  }

  // displayCurrentAmt = 

  render() {
   const { donations} = this.state;

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
     <div className='donations'>  
       <ul>
         {list}
       </ul>
     </div>
     <ProgressBar

     />
    
    </div>
  );
  }
  
}

 

export default App;
