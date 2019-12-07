import React from "react"
import SingleDonations from "./SingleDonations.jsx"


class AllDonations extends React.Component {
    constructor() {
        super()
        this.state = {
            donatedAmountNeeded: 5000,
            totalDonated: 0,

            progressPercentage: 0,
            name: "",
            message: "",
            donationAmount: 1,
            width: "0%",
            donations: [

                // { name: "John", donationAmount: 50, message: "Let's all give to this great cause!" },
                // { name: "John", donationAmount: 50, message: "Let's all give to this great cause!" },
                // { name: "John", donationAmount: 50, message: "Let's all give to this great cause!" },
            ]
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
    }



    customRangeFunct = (event) => {

        this.setState({
            donationAmount: event.target.value

        })
    }

    nameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }



    messageInput = (event) => {
        this.setState({
            message: event.target.value
        })
    }



    progress = (event) => {
        let newTotal = parseInt(this.state.totalDonated) + parseInt(this.state.donationAmount)
        let percentage = parseInt(newTotal) % parseInt(this.state.donatedAmountNeeded)
        this.setState({
            totalDonated: newTotal,
            progressPercentage: percentage,
            width: (percentage).toString() + "%"
        })
        let obj = {}
        obj["name"] = this.state.name
        obj["donationAmount"] = this.state.donationAmount
        obj["message"] = this.state.message
        this.state.donations.push(obj)
        // console.log(this.state.width)
    }

    percentage = () => {
        this.setState({
            width: (this.state.percentage).toString() + "%"
        })
    }

    render() {
        const { donations, donationAmount, totalDonated, name, message, donatedAmountNeeded, progressPercentage, width } = this.state
        console.log(width)
        const listDonations = donations.map((donation) => {

            return (
                <SingleDonations
                    // key={donation.name}
                    name={donation.name}
                    donationAmount={donation.donationAmount}
                    message={donation.message}
                />

            )

        })
        return (

            <div className="App">
                <div className="header">
                    <h1 className="headerDescription" id="goFundMe">Go Fund Me</h1>
                    <h5 className="headerDescription">Help me go on vacation to a beach somewhere</h5>
                </div>
                <div className="left-side">
                    <h3 className="recentDonation">Recent Donations</h3>
                    <ul>
                        {listDonations}
                    </ul>
                </div>
                <div className="right-side">
                    <h2> Raised ${totalDonated} of ${donatedAmountNeeded} </h2>
                    <form onSubmit={this.handleFormSubmit} id="form">

                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{width} </div>
                        </div>
                        <label htmlFor="nameInput">Name </label>
                        <input type="text" className="form-control" id="nameInput" placeholder="John Doe"
                            value={name}
                            onChange={this.nameInput}></input>
                        <label htmlFor="captionInput" >Caption </label>
                        <input type="text" className="form-control" id="captionInput" placeholder="..."
                            value={message}
                            onChange={this.messageInput}
                        ></input>
                        <div>
                            <label htmlFor="amountInput" >Amount to Donate </label>
                            <input type="range" className="custom-range" id="amountInput"
                                min="1"
                                max="1000"
                                value={donationAmount}
                                onChange={this.customRangeFunct}
                            ></input>
                            <p id="customRangeP">${donationAmount}</p>
                            <button onClick={this.progress} id="donateSubmit">Donate</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AllDonations