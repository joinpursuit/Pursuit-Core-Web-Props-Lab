import React from 'react';


class DonationForm extends React.Component {
  

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted')
        this.setState({
          submitted: true
        })
    }

    handleName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    handleCaption = (event) =>{
        this.setState({
            caption : event.target.value
        })
    }

    handleAmount = (event) => {
        this.setState({
            donationAmount: event.target.value
        })
    }
    render(){
        // const { name, caption, donationAmount } = this.state
        return(
            <div className = 'donation-form'>
                <form onSubmit = {this.handleFormSubmit}>
                    <label htmlFor = 'name'>Name </label>
                    <br></br>
                    <input
                        id='name'
                        name='name'
                        type ='text'
                        onChange ={this.props.handleDonorName}
                        value = {this.props.DonorName}
                    />
                    <br></br>
                    <label htmlFor = 'caption'>Caption </label>
                    <br></br>
                    <input
                        id='caption'
                        name='caption'
                        type ='text'
                        onChange ={this.props.handleCaption}
                        value = {this.props.caption}
                    />
                    <br></br>
                    <label htmlFor = 'amount'>Amount to be donated </label>
                    <br></br>
                    <input
                        id='amount'
                        name='amount'
                        type ='range'
                        min ='0'
                        max = '1000'
                        onChange ={this.props.handleDonationRange}
                        value = {this.props.donationAmount}
                    />
                    <br></br>
                    <span><h2>${this.props.donationAmount}</h2></span>
                    <button>Donate!</button>
                </form>
            </div>
        )
    }
}

export default DonationForm;