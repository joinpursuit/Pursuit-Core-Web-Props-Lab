import React from 'react';
import './App.css';
import Donations from './Components/Donations';
import Progress from './Components/Progress';
import Form from './Components/Form';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      donations: [
        {
            donor: 'John', 
            amount: 50, 
            message: "Let's all give to this great cause!",
        },
        {
            donor: 'Jane', 
            amount: 66, 
            message: "Tis the season to be donating",
        },
        {
            donor: 'Jack Ma', 
            amount: 34, 
            message: "Arribaba ee bettrer dan amaszhon",
        },
      ],
      currentFormUser: {
        donor: '',
        amount: 5,
        message: '',
      },
      totalRaised: () => this.state.donations.reduce((t, d) => t += 1 * d.amount, 0),
      goal: 1000,
    }
  }

  handleInput = ({target: {value, id}}) => {
    let {currentFormUser: {donor, amount, message}} = this.state
    
    this.setState({
      currentFormUser: {
        donor: id === 'nameInput' ? value : donor,
        amount: id === 'amountInput' ? value : amount,
        message: id === 'captionInput' ? value : message,
      }
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    console.log(event.target)
    let {currentFormUser, donations} = this.state
    this.setState({
      donations: donations.concat([currentFormUser]),
    })

  }

  render() {
    let {
      state: {
        currentFormUser: {
          donor, 
          amount, 
          message
        }, 
        donations, 
        totalRaised, 
        goal
      },
      handleInput,
      submitForm,
    } = this


    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <Donations donations={donations}/>
            <div className='col-8'>
              <Progress 
                totalRaised={totalRaised()}
                goal={goal}
              />
              <Form 
                sliderValue={amount}
                name={donor}
                message={message}
                goal={goal}
                submitForm={submitForm}
                handleInput={handleInput}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
