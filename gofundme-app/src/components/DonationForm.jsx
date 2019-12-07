import React from 'react';


class DonationForm extends React.Component {
    constructor(){
        super();
        this.state ={
            name: ' ',
            caption: '',
            amount:0
        }
    }

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
            amount: event.target.value
        })
    }
    render(){
        const { name, caption, amount } = this.state
        return(
            <div className = 'donation-form'>
                <form onSubmit = {this.handleFormSubmit}>
                    <label htmlFor = 'name'>Name: </label>
                    <input
                    id='name'
                    name='name'
                    type ='text'
                    onChange ={this.handleName}
                    value = {name}
                    />

                    <label htmlFor = 'caption'>Caption: </label>
                    <input
                    id='caption'
                    name='caption'
                    type ='text'
                    onChange ={this.handleCaption}
                    value = {caption}
                    />

                    <label htmlFor = 'amount'>Amount: </label>
                    <input
                    id='amount'
                    name='amount'
                    type ='range'
                    min ='0'
                    max = '1000'
                    onChange ={this.handleAmount}
                    value = {amount}
                    />
                    <span><h2>{amount}</h2></span>
                    <button>Donate!</button>
                </form>
            </div>
        )
    }
}

export default DonationForm;