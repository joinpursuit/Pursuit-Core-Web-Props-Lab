import React from 'react';
import TopBar from './TopBar';
import Form from './Form'
import Donation from './Donation';
import MoneyRaised from './MoneyRaised';

class Donations extends React.Component{
    state = {
        formAmount: 0,
        raisedAmount: 0,
        donations: [],
        goal: 5000,
        percentage: 0
    }
    

    printDonations = () => {
        return this.state.donations.map(don => {
            return (
                <Donation
                    name = {don.name}
                    amount = {don.amount}
                    caption = {don.caption}
                    key = {don.caption}
                />
                
            )
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let submittedAmount = e.target.elements[2].value
        this.setState(prevState => {
            return {
                raisedAmount: prevState.raisedAmount += Number(submittedAmount)
            }
        })
        
        let don = {
            name: e.target.elements[0].value,
            caption: e.target.elements[1].value,
            amount: e.target.elements[2].value
        }
        this.setState(prevState=> {
            return {
                donations: [...prevState.donations, don]
            }

        })
        e.target.reset()
    }

    handleSlider = (e) => {
        e.preventDefault();
        this.setState({
            formAmount: e.target.value
        })
    }


    render() {
        let {formAmount,goal, raisedAmount, percentage} = this.state
        console.log(raisedAmount)
        return(
            <div>
            <TopBar />
            <div>
            <MoneyRaised
                goal={goal}
                raisedAmount={raisedAmount}
                percentage={percentage}
            />
            <h3>Recent Donations</h3>
                {this.printDonations()}
            </div>
            <Form 
                handleSubmit={this.handleSubmit}
                formAmount={formAmount}
                handleSlider = {this.handleSlider}
            />
            </div>
        )
    }
}

export default Donations;