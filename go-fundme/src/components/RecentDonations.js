import React from 'react';
import Donation from './Donation';

class RecentDonations extends React.Component{
    state = {
        donations: [
            {name: "Jon", amount: 50, caption: 'this all give to this great cause'},
            {name: "Penny", amount: 1, caption: 'this is all I have'}
        ]
    }
    
    printDonations = () => {
        return this.state.donations.map(don => {
            return (
                <Donation
                    name = {don.name}
                    amount = {don.amount}
                    caption = {don.caption}
                />
                
            )
        })
    }

    render() {
        return(
            <div>
                {this.printDonations()}
            </div>
        )
    }
}

export default RecentDonations;