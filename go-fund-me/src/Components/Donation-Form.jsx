import React from 'react';


class DonationForm extends React.Component {
    render() {
        return (
            <form className="formy-mcformface" onSubmit={this.props.handleFormSubmit}>
                <label htmlFor="name">NAME: </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name!"
                    value={this.props.userName}
                    onChange={this.props.handleUserName}
                />
                <label htmlFor="comment">COMMENT: </label>
                <input
                    id="comment"
                    type="text"
                    placeholder="Say something nice to Doug!"
                    value={this.props.userCaption}
                    onChange={this.props.handleUserCaption}
                />
                <label htmlFor="amount">AMMOUNT: </label>
                <input
                    id="amount"
                    type="range"
                    className="donation-range"
                    min="5"
                    max="1000"
                    value={this.props.donationAmount}
                    onChange={this.props.handleDonationAmount}
                />
                <h2 className="donation-range">${this.props.donationAmount}</h2>
                <button className="donate-button">DONATE</button>
            </form>

        )
    }
}

export default DonationForm;