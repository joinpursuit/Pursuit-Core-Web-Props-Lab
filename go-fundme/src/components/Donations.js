import React from 'react';
import TopBar from './TopBar';
import Form from './Form'
import Donation from './Donation';

class Donations extends React.Component{
    state = {
        donations: [
            {name: "Jon", amount: 50, caption: 'this all give to this great cause'},
            {name: "Penny", amount: 1, caption: 'this is all I have'}
        ],
        formSubmitted: false
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
        
    }

    render() {
        return(
            <div>
            <TopBar />
            <Form />
            <div>
                {this.printDonations()}
            </div>
            </div>
        )
    }
}

export default Donations;