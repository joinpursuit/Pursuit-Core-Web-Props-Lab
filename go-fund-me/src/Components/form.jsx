import React from 'react';


class Form extends React.Component {
    render() {
        return (
            <form className="formy-mcformface" onSubmit={this.props.handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name!"
                    value={this.props.userName}
                    onChange={this.props.handleUserName}
                />
                <input
                    type="text"
                    placeholder="Say something nice to Doug!"
                    value={this.props.userCaption}
                    onChange={this.props.handleUserCaption}
                />
                <input
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

export default Form;