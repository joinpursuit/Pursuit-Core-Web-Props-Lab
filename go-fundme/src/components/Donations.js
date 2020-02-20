import React from 'react';
import TopBar from './TopBar';
import Form from './Form'
import Donation from './Donation';

class Donations extends React.Component{
    state = {
        formAmount: 0,
        percentage: 0,
        raised: 0,
        donations: [],
        // formSubmitted: false
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
        let {formAmount} = this.state
        return(
            <div>
            <TopBar />
            <div>
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