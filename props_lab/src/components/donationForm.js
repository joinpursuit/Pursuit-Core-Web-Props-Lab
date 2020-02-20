import React from 'react';
import RecentDonations from './recentDonations';

class DonationForm extends React.Component {
    state = {
        name: "",
        amount: 0,
        caption: "",
        recentDonators: []
    }


    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    
    handleAmount = (e) => {
        this.setState({amount: e.target.value})
    }

    handleCaption = (e) => {
        this.setState({caption: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({})
    }

    render() {
        console.log(this.state)
        return(
            <div className={"donationFormContainer"}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Amount:
                        <input type="number" value={this.state.amount} onChange={this.handleAmount}></input>
                    </label>
                    <label>
                        Caption:
                        <input type="text" value={this.state.caption} onChange={this.handleCaption}></input>
                    </label>
                    <button type="submit">Donate</button>
                </form>
                <div>
                    <RecentDonations />
                </div>
            </div>
        )
    }
}

export default DonationForm;